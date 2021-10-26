import api from '../api';

const GetDashboard = async () => {

    let url = `/dashboards`;   
    try {
        const response =  await api.get(url)
        return response.data
    }
    catch (err) {
        return []
    }
};

export default GetDashboard;
