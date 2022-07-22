import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { set } from "web/js/redux/user-interface/action";
import { Language } from "common/helpers";

import "./style.scss";

export function Landing() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectLanguage = (language) => {
    dispatch(
      set({
        language,
      }),
    );
  };

  return (
    <div styleName="root">
      <header styleName="languages">
        <button
          onClick={() => selectLanguage(Language.ko)}
          styleName="language-button"
        >
          <img
            styleName="flag-svg"
            alt="south korea"
            src="https://luissaybe.nyc3.digitaloceanspaces.com/image/south-korea.svg"
          />
        </button>
        <button
          onClick={() => selectLanguage(Language.en)}
          styleName="language-button"
        >
          <img
            styleName="flag-svg"
            alt="united kingdom"
            src="https://luissaybe.nyc3.digitaloceanspaces.com/image/united-kingdom.svg"
          />
        </button>
        <button
          onClick={() => selectLanguage(Language.fr)}
          styleName="language-button"
        >
          <img
            styleName="flag-svg"
            alt="france"
            src="https://luissaybe.nyc3.digitaloceanspaces.com/image/france.svg"
          />
        </button>
        <button
          onClick={() => selectLanguage(Language.es)}
          styleName="language-button"
        >
          <img
            alt="spain"
            styleName="flag-svg"
            src="https://luissaybe.nyc3.digitaloceanspaces.com/image/spain.svg"
          />
        </button>
      </header>
      <section styleName="section">
        <div styleName="content">
          <div styleName="left-section text-content text-vertical-spacing">
            <div>{t("Luis Saybe")}</div>
            <div>{t("Programmer")}</div>
          </div>
          <div styleName="right-section">
            <img
              alt="Luis in seoul"
              styleName="image"
              src="https://luissaybe.nyc3.digitaloceanspaces.com/luissaybe/seoul.jpg"
            />
          </div>
        </div>
      </section>
      <section styleName="what-i-am-looking-for section">
        <div styleName="content">
          <div styleName="left-section what-i-am-looking-for-title title">
            {t("Interests")}
          </div>
          <div styleName="right-section text-content goals text-vertical-spacing">
            <div>
              <a
                styleName="link"
                href="https://www.facebook.com/marina.pereleshina.5/videos/1588854561126278"
              >
                {t("Balboa")}
              </a>
            </div>
            <div>
              <a styleName="link" href="http://seoullatte.com">
                {t("Korean langauge")}
              </a>
            </div>
            <div>
              <a styleName="link" href="https://leetcode.com/luissaybe">
                {t("Programming puzzles")}
              </a>
            </div>
            <div>
              <a
                styleName="link"
                href="https://github.com/LuisSaybe/connect-4-reinforcement-learning"
              >
                {t("Reinforcement learning")}
              </a>
            </div>
            <div>
              <a
                styleName="link"
                href="https://www.youtube.com/watch?v=g0eu_fYdVHs"
              >
                {t("Classical guitar")}
              </a>
            </div>
            <div>
              <a
                styleName="link"
                href="https://www.duolingo.com/profile/luissaybe"
              >
                {t("Foreign languages")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section styleName="section">
        <div styleName="content">
          <img
            styleName="coffee"
            alt="coffee and books"
            src="https://luissaybe.nyc3.digitaloceanspaces.com/image/coffee_resize_compressed.jpg"
          />
        </div>
      </section>
      <section styleName="section">
        <div styleName="content">
          <div>
            <a styleName="link" href="mailto:luis@trois.io">
              luis@trois.io
            </a>
          </div>
          <div>
            <a
              styleName="link"
              href="https://luissaybe.nyc3.digitaloceanspaces.com/luissaybe/resume.pdf"
            >
              {t("resume")}
            </a>
          </div>
          <div>
            <a styleName="link" href="https://github.com/luissaybe">
              {t("github")}
            </a>
          </div>
          <div>
            <a styleName="link" href="https://www.instagram.com/saybeluis">
              {t("instagram")}
            </a>
          </div>
          <div>
            <a
              styleName="link"
              href="https://open.spotify.com/playlist/4f8p2uJxHYZOPwpaXR80KK"
            >
              {t("spotify")}
            </a>
          </div>
          <div>
            {t("kakaotalk id")}
            &nbsp; luissaybe
          </div>
        </div>
      </section>
    </div>
  );
}
