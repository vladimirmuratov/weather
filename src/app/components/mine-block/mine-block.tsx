import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import styles from "./mine-block.module.css";
import {Preloader} from "../preloader/preloader";
import {Form} from "../form/form";
import {CardWeather} from "../card-weather/card-weather";
import {BaseUrl} from "../../../config";

export const MineBlock = (): JSX.Element => {
    const [city, setCity] = useState('')
    const [data, setData] = useState()
    const [error, setError] = useState<any>('')
    const [isLoading, setLoading] = useState(false)
    const [isSimpleData, setSimpleData] = useState(true)

    const http = axios.create({
        baseURL: BaseUrl,
        headers: {
            'Content-type': 'Application/json'
        },
        params: {
            q: `${city ? city : "Moscow"}`
        }
    })

    const toggleFormHandler = () => setSimpleData(!isSimpleData)

    /*async function getData() {
        try {
            setSimpleData(true)
            setError('')
            setLoading(true)
            const response = await http.get('')
            if (response.status === 200) {
                setCity('')
                return response.data
            }
        } catch (error: any) {
            setError(error.response.data?.message)
        }
    }*/

    const getData = useCallback(async () => {
        try {
            setSimpleData(true)
            setError('')
            setLoading(true)
            const response = await http.get('')
            if (response.status === 200) {
                setCity('')
                return response.data
            }
        } catch (error: any) {
            setError(error.response.data?.message)
        }
    }, [http])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        getData().then(res => {
            setData(res)
            setLoading(false)
        })
    }

    useEffect(() => {
        setSimpleData(true)
        getData().then(res => {
            setData(res)
            setLoading(false)
        })
    }, [])

    return (
        <div className={styles.mineBlock_container}>
            {isLoading
                ? <Preloader/>
                : (<>
                    <Form city={city} onChange={setCity} onSubmit={handleSubmit}/>
                    {error && <h1 className={styles.error}>{error}</h1>}
                    {data && <CardWeather
                        data={data}
                        isSimpleData={isSimpleData}
                        onToggleData={toggleFormHandler}
                    />}
                </>)
            }
        </div>
    )
}