import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBtc24h, setConsolidado, setDataChart } from '../../redux/modules/allInfo'

const Updates = () => {

    const dispatch = useDispatch(); 

    useEffect ( () => {
        const interval = setInterval(() => {
            try{

                let btc24h = {
                    atual : Math.floor(Math.random() * 1000),
                    maximo : Math.floor(Math.random() * 1000),
                    minimo : Math.floor(Math.random() * 1000)
                }
                dispatch(setBtc24h(btc24h))

                let consolidado = {
                    investido : Math.floor(Math.random() * 1000),
                    atual : Math.floor(Math.random() * 1000),
                    lucro : Math.floor(Math.random() * 1000)
                }
                dispatch(setConsolidado(consolidado))

                let date = new Date()

                let dataChart = [
                    {
                        date: new Date(date.setDate(date.getDate() + Math.floor(Math.random() * 10))),
                        value: Math.floor(Math.random() * 1000)
                    },
                    {
                        date: new Date(date.setDate(date.getDate() + Math.floor(Math.random() * 10))),
                        value: Math.floor(Math.random() * 1000)
                    }
                    , {
                        date: new Date(date.setDate(date.getDate() + Math.floor(Math.random() * 10))),
                        value: Math.floor(Math.random() * 1000)
                    }
                ]
                dispatch(setDataChart(dataChart))

            }
            catch {}
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        </>
    )

}
export default Updates