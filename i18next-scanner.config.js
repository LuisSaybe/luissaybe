module.exports = {
    options: {
        removeUnusedKeys: true,
        debug: true,
        func: {
            list: ['t'],
            extensions: ['.js', '.jsx']
        },
        lngs: ['fr', 'ko', 'es'],
        defaultValue: '',
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        },
        trans: {
          component: 'Trans',
          defaultsKey: 'defaults',
          extensions: ['.js', '.jsx'],
          fallbackKey: (_, value) => value,
        },
        resource: {
            loadPath: 'common/i18n/{{lng}}/{{ns}}.json',
            savePath: 'common/i18n/{{lng}}/{{ns}}.json',
        }
    }
};
