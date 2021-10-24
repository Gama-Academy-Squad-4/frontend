import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LocalLineChart = (props) => {

    const data = props.data;

    const renderLineChart = (
        <ResponsiveContainer width="90%" height="80%">
            <LineChart  data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Total Consolidado (R$)" stroke="#07ea27" />
            </LineChart>
        </ResponsiveContainer>
        
      );

    return(
        renderLineChart
    )


}
export default LocalLineChart