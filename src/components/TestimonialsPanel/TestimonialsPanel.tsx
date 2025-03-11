import React from 'react';

import styles from './TestimonialsPanel.css';

export interface TestimonialsPanelProps {
  prop?: string;
}

export function TestimonialsPanel({prop = 'default value'}: TestimonialsPanelProps) {
  return <div className={styles.TestimonialsPanel}>TestimonialsPanel {prop}</div>;
}
