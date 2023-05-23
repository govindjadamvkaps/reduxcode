import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { devNumber, incNumber, multNumber } from './actions';
import { decNumber } from './actions';
import { Container } from 'react-bootstrap';


function App() {
  const dispatch = useDispatch()
  const myState = useSelector((state)=>
    state.changeTheNumber
  )

  const myState1 = useSelector((state)=>
  state.multTheNumber
)

  return (
   <>
   <Container className='mt-5'>
    <h3>Increment and Decrement</h3>
    <h4>using React and Redux</h4>

    <div>
      <button onClick={()=>dispatch(decNumber())}> Decrement</button>
      <input name='quantity' type="text" value={myState}/>
      <button onClick={()=>dispatch(incNumber(5))}> Increment</button>
    </div>
    </Container>

    <Container className='mt-5'>
    <h3>Multiplication and Division</h3>
    <h4>using React and Redux</h4>

    <div>
      <button onClick={()=>dispatch(devNumber(5))}> Division</button>
      <input name='quantity' type="text" value={myState1}/>
      <button onClick={()=>dispatch(multNumber(5))}> Multiplication</button>
    </div>
    </Container>
   </>
  );
}

export default App;
