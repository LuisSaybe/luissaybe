import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

import './style.scss';

export function Landing() {
  const { t } = useTranslation();

  return (
    <div styleName='root'>
       <div>
        <section>
          <div styleName='content'>
          <div styleName='title'>
            {t('Hello')}
            </div>
            <div>
              {t('Nice to meet you, my name is Luis Saybe.')}
              {t('I am currently in the early process of looking for employment in Seoul and am intertested at applying at my Talk to Me in Korean.')}
              {t('Talk To Me in Korean is my first choie as a company.')}
              {t('I made this page in order so that you can familiarize yourself who I am and what my goals are.')}
            </div>
          </div>
        </section>
        <section styleName='what-i-am-looking-for'>
          <div styleName='content'>
            <div styleName='what-i-am-looking-for-title title'>
            {t('What I am looking for')}
            </div>
            <div styleName='goals'>
              <div>
                {t('- I am looking to work a company that I like sponsor a work visa in Seoul.')}
              </div>
              <div>
              {t('- I am looking to work for a company that will sponsor my work visa in Seoul.')}
              </div>
              {t('While I am an American citizen, I currently live in Paris, France.')}
              <Trans>
                I have already been through the visa process here in France and currently hold a visa for a <a styleName='link' href='https://france-visas.gouv.fr/en_US/web/france-visas/international-talents-and-economic-attractiveness'>qualified international talent</a>.
            </Trans>
            </div>
          </div>
        </section>
        <div>
        <section>
          <div styleName='content'>
            <div styleName='title'>
              {t('About Me')}
            </div>
            <Trans>
              I am a web developer working in Paris, France for <a styleName='link' href='https://techcrunch.com/2018/12/13/glose-raises-3-4-million-for-its-collaborative-reading-app/'>Glose</a>.
            </Trans>
            <div>
              {t('I spend a large portion of my time studying foreign languages, it is an important part of my life.')}
            </div>
            <Trans>
              I am a <a styleName='link' href='https://www.facebook.com/marina.pereleshina.5/posts/1588862781125456'>balboa dancer</a>. In fact I am attending <a styleName='link' href='https://www.facebook.com/events/198391677711996/'>Korea Balboa Weekend</a> for the 2nd time.
            </Trans>
            <div>
              {t('While I am not a designer, my captivation with graphic novels from an early age generated an interest in visual design, user experience and story telling.')}
            </div>
          </div>
        </section>
        <div>
          <div styleName='title'>
            {t('I am coming to Seoul')}
          </div>
          <div>
            {t('I will be visiting Seoul for the third time.')}
            {t('I arrive November 8th and depart to Paris on the 21st of November.')}
            {t('I am here on vacation to visit friends, dance balboa, and take the TOPIK for the first time.')}
          </div>
        </div>
        <div styleName='title'>
          {t('I hope we can get to know each other')}
        </div>
        <Trans>
          You can find my english resume <a styleName='link' href='http://luissaybe.com/resume.pdf'>here</a>.
        </Trans>
        {t('I hope I have succesfully painted a picture of myself.')}
        {t('Do not hesitate to reach out with any more questions you have.')}
        <div>
          {t('email')}
          &nbsp;
          {t('luis@trois.io')}
        </div>
        <div>
          {t('kakaotalk')}
          &nbsp;
          {t('luissaybe')}
        </div>
        <div>
          {t('insagram')}
          &nbsp;
          <a href='https://www.instagram.com/saybeluis/'>instagram</a>
        </div>
       </div>
     </div>
    </div>
  );
}
