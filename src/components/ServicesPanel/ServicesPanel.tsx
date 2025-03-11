import React from 'react';

import styles from './ServicesPanel.css';

export interface ServicesPanelProps {
  config: any;
}

export function ServicesPanel({config}: ServicesPanelProps) {
  return <div className={styles.ServicesPanel}>ServicesPanel</div>;
}
