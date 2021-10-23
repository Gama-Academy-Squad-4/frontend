import * as S from './styled';
import { Navbar } from '../../components'


const Dashboard = (props) => {

    return(
        <S.Container>
            <Navbar                 
                active = 'Dashboard'
            />
        </S.Container>
    )

}
export default Dashboard