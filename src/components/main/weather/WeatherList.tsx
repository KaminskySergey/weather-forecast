'use client'
import {ReactNode, RefObject} from 'react'
import styles from './weather.module.css'
interface IWeatherList {
    children: ReactNode
}

export default function WeatherList({children}: IWeatherList) {
    return <ul className={styles.weather}>{children}</ul>
}
