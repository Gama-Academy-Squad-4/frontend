import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBtc24h,
  setConsolidado,
  setDataChart,
  setTransactions,
  setSaldoSemana,
  setSaldoMes
  
} from '../../redux/modules/allInfo';
import { ListTransactions, GetDashboard } from '../API';



const Updates = () => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    const interval = setInterval(() => {
      try {

        let atualBTC = 0;

        GetDashboard()
          .then((res) => {      
            atualBTC =  parseInt(res.statistics.btcNow.valueNow).toFixed(2);         
            let btc24h1 = {
              atual: parseInt(res.statistics.btcNow.valueNow).toFixed(2),
              maximo: parseInt(res.statistics.btcNow.hight).toFixed(2),
              minimo: parseInt(res.statistics.btcNow.low).toFixed(2),
            };            
            dispatch(setBtc24h(btc24h1));

            let consolidado = {
              investido: parseInt(res.statistics.consolidate.totalInvested).toFixed(2),
              atual: parseInt(res.statistics.consolidate.totalBalance).toFixed(2),
              lucro: parseInt(res.statistics.consolidate.totalProfit).toFixed(2),
            };
            dispatch(setConsolidado(consolidado));

            let saldoSemana = {
              saldo: parseInt(res.statistics.totalWeek.totalBalance).toFixed(2),
              percent: parseInt(res.statistics.totalWeek.totalAvarage).toFixed(2),
            }
            dispatch(setSaldoSemana(saldoSemana))

            let saldoMes = {
              saldo: parseInt(res.statistics.totalMounth.totalBalance).toFixed(2),
              percent: parseInt(res.statistics.totalMounth.totalAvarage).toFixed(2),
            }
            dispatch(setSaldoMes(saldoMes))

            let dataChartList = []
            let auxDataChartList = res.statistics.consolidateWeek
            auxDataChartList.map((item) => {
              let dataChart = {
                date : new Date(item.transactionAt),
                value : item.totalValue,
              }
              dataChartList.push(dataChart)
              return item
            })            
            dispatch(setDataChart(dataChartList));


          })
          .catch((err) => {
            console.log(err);
          });


        ListTransactions()
          .then((res) => {            
            let listTransactions = res.transactions.transactions;
            let auxTransactions = [];
            if (listTransactions.length !== 0) {
              listTransactions.map((item) => {                
                let auxTransaction = {
                  date: new Date(item.transactionAt),
                  quantidade: item.amount,
                  compra: parseInt(item.value).toFixed(2),
                  atual: parseInt(atualBTC).toFixed(2),
                  variancia: parseInt(item.variationValue).toFixed(2),
                };                
                auxTransactions.push(auxTransaction);
                return item;
              });
            } else {
              dispatch(setTransactions([]));
            }
            dispatch(setTransactions(auxTransactions));
          })
          .catch((err) => {
            console.log(err);
          });


       
        
      } catch {
          console.log("datachart Error")
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return <></>;
};
export default Updates;
