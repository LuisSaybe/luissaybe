import './app.css'

export function Application() {
  return (
    <div className="list root text">
      <div>
        software engineer at&nbsp;
        <a href="https://joinbetter.com">Better Health</a>
      </div>
      <div>
        <a href="/resume.pdf">resume</a>
      </div>
      <div>
        <div>interests</div>
        <div className="interests list sublist">
          <a href="https://leetcode.com/u/user2523xT">programming puzzles</a>
          <a href="https://www.youtube.com/watch?v=g0eu_fYdVHs">classical guitar</a>
          <div>graphic novels</div>
          <div>studying foreign languages</div>
          <div>dancing balboa</div>
        </div>
      </div>
      <div>
        <a href="https://www.youtube.com/watch?v=ww9hZfgC2d8/">music</a>
      </div>
      <div>
        <a href="https://github.com/LuisSaybe">github</a>
      </div>
      <div>l.saybe@gmail.com</div>
    </div>
  );
}
