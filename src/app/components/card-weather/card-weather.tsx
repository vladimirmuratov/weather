import React from "react";
import styles from "./card-weather.module.css";
import {Temperature} from "../icons/temperature";
import {Moisture} from "../icons/moisture";
import {Wind} from "../icons/wind";

interface Props {
    data: any,
    isSimpleData: boolean,
    onToggleData: () => void
}

export const CardWeather: React.FC<Props> = ({data, isSimpleData, onToggleData}): JSX.Element => {
    const icon = data.weather[0].icon + '@2x.png'

    return (<div className={styles.cardWeather_container}>
        <div className={styles.cardWeather_image_block}>
            <img src={`http://openweathermap.org/img/wn/${icon}`} alt="img"/>
        </div>
        <div className={styles.cardWeather_content_block}>
            <div>
                <h1 className={styles.city}>{data.name},</h1>
                &nbsp;
                <span className={styles.city}>{data.sys.country}</span>
            </div>
            <ul className={styles.list}>
                <li>{data.weather[0].description}</li>
                <li><Temperature/>{data.main.temp}&#8451;</li>
                {!isSimpleData && (
                    <>
                        <li>min {data.main.temp_min}&#8451;</li>
                        <li>max {data.main.temp_max}&#8451;</li>
                        <li>ощущ.как {data.main.feels_like}&#8451;</li>
                        <li>давление {data.main.pressure}мм.рт.ст</li>
                        <li><Moisture/>{data.main.humidity}%</li>
                        <li><Wind/>{data.wind.speed}м/с</li>
                    </>
                )}

            </ul>
            <p className={styles.link} onClick={onToggleData}>{isSimpleData ? "Подробнее" : "Меньше информации"}</p>
        </div>
    </div>)
}