import api from '../api';

const ListTransactions = async () => {

    let url = `/transactions`;

    try {
        const response =  await api.get(url)
        return response.data
    }
    catch (err) {
        return []
    }
};

export default ListTransactions;
