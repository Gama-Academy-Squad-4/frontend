import * as S from './styled';
import { Navbar, ConfigForm, SearchForm} from '../../components'

const Config = (props) => {

    return(
        <S.Container>
            <Navbar                 
                active = 'cadastro'
            />
            <S.Section1>
                <S.Title>Cadastro de Transações</S.Title>  
                <ConfigForm/>              
            </S.Section1>
            <S.Section2>
                <S.Title>Edição de Transações (Consulta por data)</S.Title>
                <SearchForm/>
            </S.Section2>
        </S.Container>
    )

}
export default Config