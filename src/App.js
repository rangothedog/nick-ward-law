import React, {useEffect, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import config from './config.json';
import styles from './App.css';
import logo from './img/ward-law-logo.svg';
import { AboutPanel } from './components/AboutPanel/AboutPanel.tsx';
import { ServicesPanel } from './components/ServicesPanel/ServicesPanel.tsx';
console.log('config', config);
console.log('styles', styles);

const server = config.server.protocol + '://' + config.server.host + ':' + config.server.port;
console.log('server', server);

const copyright = config.site.copyright;
console.log('copyright', copyright);

const tabs = [
  { name: 'about', to: '/about', text: 'About', element: AboutPanel},
  { name: 'services', to: '/services', text: 'Services', element: ServicesPanel},
  { name: 'cases', to: '/cases', text: 'Cases', element: null},
  { name: 'testimonials', to: '/testimonials', text: 'Testimonials', element: null},
  { name: 'contact', to: '/contact', text: 'Contact', element: null}
];
console.log('tabs', tabs);

function App() {
  
  const [activeTab, setActiveTab] = useState('about');

  function tabHeaderClick(event) {
    
    console.log('tabHeaderClick', event);    
    const tab = event.target.text.toLowerCase();
    console.log('tab', tab);
  
    const activeTabs = document.querySelectorAll('.app-tab-title.active');
    console.log('activeTab', activeTab);
    if (activeTab) {
      activeTabs.forEach((tab) => {
        tab.classList.remove('active');
      });
    }
    event.target.classList.add('active');
  
    setActiveTab(tab);
  }

  const tabHeaders = tabs.map((tab, index) => {
    return <Link to={tab.to} className={`app-tab-title ${tab.name === activeTab ? 'active' : ''}`} key={index} onClick={tabHeaderClick}>{tab.text}</Link>;
  });
  console.log('tabHeaders', tabHeaders);

  return (
    <BrowserRouter>
    <div className='app'>
    <div className='app-header'>      
      <div className='app-banner-shadow'/>
      <div className='app-banner-title'>
        <h1 className='app-banner-text'>
          {config.site.title}
        </h1>
        {/*<img className='app-banner-image' src={banner} alt={`${config.site.title}`} />*/}
      </div>
      <nav className='app-nav'>
        <div className='app-tab-list'>
          {tabHeaders}          
        </div>
      </nav>      
    </div>

    <main className='app-main'>
      <div className='app-main-content'>            
        <Routes>
          <Route path="/about" element={<AboutPanel config={config}/>} />
          <Route path="/services" element={<ServicesPanel />} />
          <Route path="/" element={<AboutPanel config={config}/>} />
        </Routes>
      </div>
    </main>
    <footer className='app-footer'>
      {/*
      <h3 className='app-copyright'>
        {copyright}
      </h3>        
      */}
      {/*<div>
        <a className='app-link' href='https://www/rangothedog.com' target='_blank' rel='noopener noreferrer'>
          rangothedog.com
        </a>
      </div>
    */}
    </footer>      
  </div>
  </BrowserRouter>
  );
}

export default App;
