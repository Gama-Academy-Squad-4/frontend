import * as S from './styled';
import { Navbar, Table } from '../../components'


const Details = (props) => {

    var rows = [
        {
            data: new Date(),
            quantidade: 0.255,
            compra: 125.00,
            atual: 25786.00,
            variancia: 53
        },
        {
            data: new Date(),
            quantidade: 0.255,
            compra: 125.00,
            atual: 25786.00,
            variancia: 53
        },
        {
            data: new Date(),
            quantidade: 0.255,
            compra: 125.00,
            atual: 25786.00,
            variancia: 53
        },
        {
            data: new Date(),
            quantidade: 0.255,
            compra: 125.00,
            atual: 25786.00,
            variancia: 53
        },
        {
            data: new Date(),
            quantidade: 0.255,
            compra: 125.00,
            atual: 25786.00,
            variancia: 53
        },
    ]

    return(
        <S.Container>
            <Navbar                 
                active = 'detalhes'
            />
            <S.Section1>
                <S.Title>Controle de Transações</S.Title>
                <Table
                    rows = {rows}
                />
            </S.Section1>
        </S.Container>
    )

}
export default Details