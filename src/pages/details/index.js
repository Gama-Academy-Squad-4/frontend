import * as S from './styled';
import { Navbar, Table } from '../../components';
import { useSelector } from 'react-redux';



const Details = (props) => {

    

    const {
        transactions
    } = useSelector((state) => state.allInfo)

    var rows = [] 

    transactions.map ((item) => {        
        let auxItem = {
            data: item.date,
            quantidade: item.quantidade,
            compra: item.compra,
            atual: item.atual,
            variancia: item.variancia
        }
        rows.push(auxItem)
        return item
    })

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