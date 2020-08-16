const fs = require("fs");
const path = require("path");
const typescript = require("typescript");

module.exports = {
  options: {
    debug: true,
    func: {
      list: ["t"],
      extensions: [".ts", ".tsx"],
    },
    lngs: ["fr", "es", "ko"],
    defaultValue: "",
    nsSeparator: "::",
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    trans: {
      component: "Trans",
      defaultsKey: "defaults",
      extensions: [".tsx"],
      fallbackKey: (_, value) => value,
    },
    resource: {
      loadPath: "common/i18n/{{lng}}/{{ns}}.json",
      savePath: "common/i18n/{{lng}}/{{ns}}.json",
    },
  },
  transform: function(file, enc, done) {
    const extension = path.extname(file.path);
    let content = fs.readFileSync(file.path, enc);

    if (extension === ".ts" || extension === ".tsx") {
      content = typescript.transpileModule(content, {
        compilerOptions: {
          target: "es6",
          sourceMap: true,
          inlineSources: true,
          sourceRoot: "/",
          jsx: "preserve",
          baseUrl: ".",
          lib: ["dom", "esnext"],
          module: "esnext",
          moduleResolution: "node",
          paths: {
            web: ["web"],
            common: ["common"]
          },
          resolveJsonModule: true,
          allowSyntheticDefaultImports: true,
          types: ["react", "react-css-modules"],
          typeRoots: ["node_modules/@types"],
          plugins: [{ "name": "typescript-tslint-plugin" }]
        },
        exclude: ["node_modules"]
      }).outputText;
    }

    this.parser.parseTransFromString(content);

    done();
  },
};