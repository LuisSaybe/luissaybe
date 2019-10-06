import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import {
  DispatchUserInterfaceSettingsContext
} from 'web/js/context';

import './style.scss';

export function Landing() {
  const { t } = useTranslation();
  const dispatchUserInterfaceSettings = useContext(DispatchUserInterfaceSettingsContext);
  const selectLanguage = (language) => {
    dispatchUserInterfaceSettings({
      type: 'SET',
      data: {
        language
      }
    });
  };

  return (
    <div styleName='root'>
        <section styleName='languages'>
          <button onClick={() => selectLanguage('ko')} styleName='language-button'>
            <img styleName='flag-svg' alt='south korea' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/south-korea.svg' />
          </button>
          <button onClick={() => selectLanguage('en')} styleName='language-button'>
            <img styleName='flag-svg' alt='united kingdom' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/united-kingdom.svg' />
          </button>
          <button onClick={() => selectLanguage('fr')} styleName='language-button'>
            <img styleName='flag-svg' alt='france' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/france.svg' />
          </button>
          <button onClick={() => selectLanguage('es')}  styleName='language-button'>
            <img alt='spain' styleName='flag-svg' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/spain.svg' />
          </button>
        </section>
        <section styleName='section'>
          <div styleName='content'>
            <div styleName='left-section text-content text-vertical-spacing'>
              <div styleName='title'>
               {t('Hello')}
              </div>
              <div>
                {t('Nice to meet you, my name is Luis Saybe.')}
              </div>
              <div>
                {t('I am currently in the early process of looking for employment in Seoul and am intertested at applying at Talk to Me in Korean.')}
              </div>
              <div>
                {t('Talk To Me in Korean is my first choice as a company.')}
              </div>
              <div>
                {t('I made this page to introduce myself and share my goals.')}
              </div>
            </div>
            <div styleName='right-section'>
              <img styleName='image' alt='' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/moscow.jpg' />
            </div>
          </div>
        </section>
        <section styleName='section'>
          <div styleName='content'>
            <div styleName='left-section title'>
              {t('About Me')}
            </div>
            <div styleName='right-section text-content text-vertical-spacing'>
              <div>
                <Trans>
                  I am a web developer working in Paris, France for <a styleName='link' href='https://techcrunch.com/2018/12/13/glose-raises-3-4-million-for-its-collaborative-reading-app/'>Glose</a>.
                </Trans>
              </div>
              <div>
                <Trans>
                  I spend a large portion of my time studying <a styleName='link' href='https://www.duolingo.com/profile/luissaybe'>foreign languages</a>, it is an important part of my life.
                </Trans>
              </div>
              <div>
                <Trans>
                  I am a guitar student, rugby referee and <a styleName='link' href='https://www.facebook.com/marina.pereleshina.5/posts/1588862781125456'>balboa dancer</a>. In fact I am attending <a styleName='link' href='https://www.facebook.com/events/198391677711996/'>Korea Balboa Weekend</a> for the 2nd time.
                </Trans>
              </div>
              <div>
                {t('While I am not a designer I have been captivated by graphic novels from an early age. Since then, I have been interested in visual design, user experience and storytelling.')}
              </div>
            </div>
          </div>
        </section>
        <section styleName='what-i-am-looking-for section'>
          <div styleName='content'>
            <div styleName='left-section what-i-am-looking-for-title title'>
              {t('What I am looking for')}
            </div>
            <div styleName='right-section text-content goals text-vertical-spacing'>
              <div>
                {t('I am looking to work for a company that can sponsor a work visa in South Korea.')}
              </div>
              <div>
               {t('While I am an American citizen, I currently live in Paris, France.')}
              </div>
              <div>
                <Trans>
                  I have already been through the visa process here in France and currently hold a visa for a <a styleName='link' href='https://france-visas.gouv.fr/en_US/web/france-visas/international-talents-and-economic-attractiveness'>qualified international talent.</a>
                </Trans>
              </div>
            </div>
          </div>
        </section>
        <section styleName='section'>
          <div styleName='content'>
            <div styleName='title left-section'>
              {t('I am coming to Seoul')}
            </div>
            <div styleName='right-section text-content text-vertical-spacing'>
              <div>
                {t('I will be visiting Seoul for the third time.')}
              </div>
              <div>
                {t('I arrive November 8th and depart to Paris on the 21st of November.')}
              </div>
              <div>
                {t('I am here on vacation to visit friends, dance balboa, and take the TOPIK for the first time and hopefully meet you!')}
              </div>
              <div>
                {t('I am planning to move to Seoul during 2020.')}
                &nbsp;
                {t('Because the logistics, time and money concerning travel to South Korea are prohibitively expensive I want to take this opportunity to meet the Talk to Me in Korean team if possible.')}
              </div>
            </div>
          </div>
        </section>
        <section styleName='section know-each-other'>
          <div styleName='content'>
            <div styleName='title left-section'>
             {t('I hope we can get to know each other')}
            </div>
            <div styleName='text-content right-section text-vertical-spacing'>
              <div>
                <Trans>
                  You can find my english resume <a styleName='link' href='http://luissaybe.com/resume.pdf'>here</a>.
                </Trans>
              </div>
              <div>
                {t('I hope I have succesfully painted a picture of myself.')}
              </div>
              <div>
               {t('Do not hesitate to reach out with any questions you have.')}
              </div>
            </div>
          </div>
        </section>
        <section styleName='section'>
          <div styleName='content'>
            <img styleName='coffee image' alt='' src='https://luissaybe.nyc3.digitaloceanspaces.com/ttmk/IMG_7022.JPG' />
          </div>
        </section>
        <section styleName='section'>
          <div styleName='content'>
            <div>
             <a styleName='link' href='http://luissaybe.com'>luissaybe.com</a>
            </div>
            <div>
              <a styleName='link' href='mailto:luis@trois.io'>luis@trois.io</a>
            </div>
            <div>
             <a styleName='link' href='https://github.com/luissaybe'>{t('github')}</a>
            </div>
            <div>
              <a styleName='link' href='https://www.instagram.com/saybeluis'>
                {t('instagram')}
              </a>
            </div>
            <div>
              <a styleName='link' href='https://open.spotify.com/user/sobibortreblinka?si=sOjDypJGQOmdwvpvZva_Fg'>
                {t('spotify')}
              </a>
            </div>
            <div>
              {t('kakaotalk id')}
              &nbsp;
              luissaybe
            </div>
          </div>
        </section>
    </div>
  );
}
