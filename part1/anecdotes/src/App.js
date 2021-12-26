import React, {useState, useEffect} from 'react';

const App = () => {
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
     
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState({});
    const [maxVoted, setMaxVoted] = useState(null);

    useEffect(() => {
        let max = 0, _key = 0;
        Object.keys(votes).forEach(key => {
            if(max < votes[key]){
                _key = key;
                max = votes[key];
            }   
        }
        )
        setMaxVoted(_key);
    }, [votes])


    const onClick = () => {
        let max = anecdotes.length, min = 0;
        const RANDOM = Math.round(Math.random(min, max) * (max - min) + min);
        if(RANDOM === selected || (RANDOM < 0 && RANDOM > anecdotes.length - 1)){
            onClick()
        }else{
            setSelected(RANDOM);
        }
    }

    const handleVoteClick = () => {
        setVotes( prev => {
            let _ = {...prev};
            if(!_.hasOwnProperty(selected)){
                _[selected] = 1;
            }else{
                _[selected] = _[selected] + 1;
            }
            return _;
        });
    }
  
    return (
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <div>
            {`has ${votes && votes[selected] ? votes[selected] : 0} votes`}
        </div>
        <div>
            <button onClick={handleVoteClick}>Vote</button>
            <button onClick={onClick}>Give me another one!</button>
        </div>
        <div>
            <h1>Anecdote with most votes</h1>
            <div>
                {anecdotes[maxVoted]}
            </div>
        </div>
      </div>
    )
  }
  

export default App;