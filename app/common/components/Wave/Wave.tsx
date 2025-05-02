import React, { FunctionComponent } from 'react'

import styles from './Wave.module.css'

export interface WaveProps {
  isSmall?: boolean;
}

export const Wave: FunctionComponent<WaveProps> = ({ isSmall = false }) => (
  <svg
    className={`${styles.wave} ${isSmall ? styles.waveSmall : ''}`}
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 150"
  >
    <path
      d="M -0.489 135.663 C 18.114 122.673 89.196 34.891 220.351 16.924 C 418.632 2.285 453.448 86.379 569.677 90.275 C 699.062 94.611 808.821 9.495 800.312 11.169 L 800.413 150.269 L -0.094 150.501 L -0.489 135.663 Z"
      fill="#fe414d"
    />
  </svg>
)
