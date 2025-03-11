import React from 'react';

import styles from './CasesPanel.css';

export interface CasesPanelProps {
  prop?: string;
}

export function CasesPanel({prop = 'default value'}: CasesPanelProps) {
  return <div className={styles.CasesPanel}>CasesPanel {prop}</div>;
}
