import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBtc24h, setConsolidado, setDataChart, setTransactions } from '../../redux/modules/allInfo';
import { ListTransactions } from '../API'

const Updates = () => {

    const {
        btc24h,
        consolidado,
        saldoSemana,
        saldoMes,
        dataChart,
        transactions
    } = useSelector((state) => state.allInfo)

    

    const dispatch = useDispatch(); 

    useEffect ( () => {
        const interval = setInterval(() => {
            try{                
                ListTransactions()
                    .then((res) => {                        
                        console.log(res.transactions.transactions)
                        let listTransactions = res.transactions.transactions;
                        let auxTransactions = []
                        if(listTransactions.length !== 0){                            
                            listTransactions.map((item) => {
                                console.log(item)
                                let auxTransaction = {
                                    date: new Date(item.transactionAt),
                                    quantidade: item.amount,
                                    compra: parseInt(item.value).toFixed(2),
                                    atual: parseInt(btc24h.atual).toFixed(2),
                                    variancia: parseInt(item.variationValue).toFixed(2)
                                }
                                console.log(item.transactionAt)
                                console.log(new Date(item.transactionAt))
                                auxTransactions.push(auxTransaction)
                                return item
                            })
                        }
                        else {
                            dispatch(setTransactions([]))
                        }                        
                        dispatch(setTransactions(auxTransactions))
                    })
                    .catch((err) => {
                        console.log(err)                        
                    }) 

                let btc24h1 = {
                    atual : Math.floor(Math.random() * 1000),
                    maximo : Math.floor(Math.random() * 1000),
                    minimo : Math.floor(Math.random() * 1000)
                }
                dispatch(setBtc24h(btc24h1))

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
        }, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        </>
    )

}
export default Updates