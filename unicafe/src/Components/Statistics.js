import React, {useState} from 'react'

const Statistics = ({feedback}) => {

    const {good, neutral, bad} = feedback;

    const [all, setAll] = useState(0);
    const [avg, setAvg] = useState(0);
    const [pveAvg, setPveAvg] = useState(0);

    React.useEffect(() => {
        let _all = good + neutral + bad;
        setAll(_all);
        setAvg(((good * 1) + (bad * -1))/_all);
        setPveAvg(good / _all * 100);
    }, [good, neutral, bad])

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Good</td>
                        <td>{good}</td>
                    </tr>
                    <tr>
                        <td>Neutral</td>
                        <td>{neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad</td>
                        <td>{bad}</td>
                    </tr>

                    <tr>
                        <td>all</td>
                        <td>{all}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{avg}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{pveAvg}</td>
                    </tr>
                </tbody>
            </table>
        </>
        
    );
};

export default Statistics;