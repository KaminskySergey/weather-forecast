'use client'
import styles from './trip.module.css'

import { ReactNode, RefObject } from 'react';

interface ITripList {
  children: ReactNode;
  elementRef: RefObject<HTMLUListElement>;
}

export default function TripList({ children, elementRef }: ITripList) {
  return (
    <ul className={styles.trip} ref={elementRef}>
      {children}
    </ul>
  );
}