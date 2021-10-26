import api from '../api';

const ListTransactions = () => {
    let url= `/transactions`
    
    return(
        api
        .get(url)
        .then((response) => {  
            return response.data          
        })
        .catch((err) => {
            console.log("erro getAlarmms: " + err);   
            return err         
        })
    )
    
}

export default ListTransactions