import * as S from './styled';
import { LocalLineChart, Navbar, Panel1, Panel2 } from '../../components'


const Dashboard = (props) => {

    const panel1A = [
        {
            label: 'Atual:',
            value: '150.255,21'
        },
        {
            label: 'Máximo:',
            value: '150.255,21'
        },
        {
            label: 'Mínimo:',
            value: '90.255,21'
        }
    ]

    const panel1B = [
        {
            label: 'Investido:',
            value: '150.255,21'
        },
        {
            label: 'Atual:',
            value: '150.255,21'
        },
        {
            label: 'Lucro:',
            value: '90.255,21'
        }
    ]

    const panel2A = [
        {
            label: 'Saldo:',
            value: 'R$ 150.255,21'
        },
        {
            label: 'Percentual:',
            value: '-2.5 %'
        }
    ]

    const panel2B = [
        {
            label: 'Saldo:',
            value: 'R$ 150.255,21'
        },
        {
            label: 'Percentual:',
            value: '-2.5 %'
        }
    ]

    var date = new Date()
    var date2 = new Date(date.setDate(date.getDate() + 1));
    var date3 = new Date(date.setDate(date.getDate() + 2));

    const dataChart = [
        {
            data: date,
            'Total Consolidado (R$)': 100.00            
        },
        {
            data: date2,
            'Total Consolidado (R$)': 200.00
        },
        {
            data: date3,
            'Total Consolidado (R$)': 300.00
        }
    ]



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
                    data={dataChart}
                />
            </S.Section2>
        </S.Container>
    )

}
export default Dashboard