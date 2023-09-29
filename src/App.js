import './App.css';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';

function App() {
  return (
    //adding two component in a single return .
    //return error : adjacent jsx elements must be wrapped in an enclosing tag, so return can only have one parent
    //using <> we wrapped in an enclosing tag in the fragment of react.
    <>    
    <NavBar/>
    <AddEmployee/>
    </>
    
  );
}

export default App;
