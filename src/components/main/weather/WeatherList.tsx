'use client'
import {ReactNode, RefObject} from 'react'
import styles from './weather.module.css'
interface IWeatherList {
    children: ReactNode
    elementRef: RefObject<HTMLUListElement>;
}

export default function WeatherList({children, elementRef}: IWeatherList) {
    return <ul className={styles.weather} ref={elementRef}>{children}</ul>
}
