import React from 'react';
import styles from './AboutPanel.css';
import photo from '../../img/nick-ward-profile-1.jpg';
import scales from '../../img/nick-ward-law-banner-7.jpeg';

export interface AboutPanelProps {
  config: any;
}

export function AboutPanel({ config }: AboutPanelProps) {

  console.log('AboutPanel.config', config);
  console.log('AbnoutPanel.styles', styles);
  
  const paragraphs = config.site.about.paragraphs.map((paragraph, index) => {
    return (
      <li className='app-about-paragraph' key={index}>{paragraph}</li>
    );
  });

  console.log('AboutPanel.paragraphs', paragraphs);

  return (
    <div className='app-tab-panel app-tab-about active'>
      <div className='app-tab-header'>
        <div className='app-about-title'>
          <div>{config.site.about.title}</div>
        </div>
        <img className='app-about-photo' src={photo} alt={`${config.site.about.person}`} />
      </div>
      <div className='app-tab-content'>
        <div className='app-about-shadow'></div>
        <ul className='app-about-list'>
          {paragraphs}
        </ul>
      </div>
    </div>
  );
}
