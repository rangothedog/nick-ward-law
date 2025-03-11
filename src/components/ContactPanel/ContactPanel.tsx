import React from 'react';

import styles from './ContactPanel.css';

export interface ContactPanelProps {
  prop?: string;
}

export function ContactPanel({prop = 'default value'}: ContactPanelProps) {
  return <div className={styles.ContactPanel}>ContactPanel {prop}</div>;
}
