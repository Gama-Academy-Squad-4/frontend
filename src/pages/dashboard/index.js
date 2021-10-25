import * as S from './styled';
import { useSelector } from 'react-redux';
import { LocalLineChart, Navbar, Panel1, Panel2 } from '../../components'


const Dashboard = (props) => {

    const {
        btc24h,
        consolidado,
        saldoSemana,
        saldoMes,
        dataChart
    } = useSelector((state) => state.allInfo)
   

    const panel1A = [
        {
            label: 'Atual:',
            value: btc24h.atual
        },
        {
            label: 'Máximo:',
            value: btc24h.maximo
        },
        {
            label: 'Mínimo:',
            value: btc24h.minimo
        }
    ]

    const panel1B = [
        {
            label: 'Investido:',
            value: consolidado.investido
        },
        {
            label: 'Atual:',
            value: consolidado.atual
        },
        {
            label: 'Lucro:',
            value: consolidado.lucro
        }
    ]

    const panel2A = [
        {
            label: 'Saldo:',
            value: saldoSemana.saldo
        },
        {
            label: 'Percentual:',
            value: `${saldoSemana.percent} %`
        }
    ]

    const panel2B = [
        {
            label: 'Saldo:',
            value: saldoMes.saldo
        },
        {
            label: 'Percentual:',
            value: `${saldoMes.percent} %`
        }
    ]


    var localDataChart = []
   

    dataChart.map ((item) => {
        let auxData = `${item.date.getDate()}/${item.date.getMonth() +1}/${item.date.getFullYear()}`
        let auxChart = {
            data: auxData,
            'Total Consolidado (R$)': item.value           
        }
        localDataChart.push(auxChart)
        return item
    })

    



    return(
        <S.Container>
            <Navbar                 
                active = 'dashboard'
            />
            <S.Section1>
                <S.Title>Indicadores</S.Title>
                <S.PanelContainer>
                    <Panel1
                        title="BTC / R$ (24h)"
                        data={panel1A}
                    />
                    <Panel1
                        title="Consolidado"
                        data={panel1B}                   
                    />
                    <Panel2
                        title="Saldo - Semana"
                        data={panel2A}                   
                    />

                    <Panel2
                        title="Saldo - Mês"
                        data={panel2B}                   
                    />  
                </S.PanelContainer>
                
            </S.Section1>
            <S.Section2>
                <S.Title>Posição Consolidada na Semana</S.Title>
                <LocalLineChart
                    data={localDataChart}
                />
            </S.Section2>
        </S.Container>
    )

}
export default Dashboard