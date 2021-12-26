import {useState} from 'react';
import Controls from './Components/Controls';
import Statistics from './Components/Statistics';

function App() {

  const [feedback, setFeedback] = useState(null);

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Controls setFeedback={setFeedback}/>
      {feedback !== null ? <Statistics feedback={feedback}/> : <h2>No feedback given</h2>}
    </div>
  );
}

export default App;
