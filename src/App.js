import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';
import EmpoloyeeList from './components/EmpoloyeeList';

function App() {
  return (
    //adding two component in a single return .
    //return error : adjacent jsx elements must be wrapped in an enclosing tag, so return can only have one parent
    //using <> we wrapped in an enclosing tag in the fragment of react.
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path = '/' element={<EmpoloyeeList />}></Route>
      <Route index element={<EmpoloyeeList />}></Route>
      <Route path = '/employeeList' element={<EmpoloyeeList />}></Route>
      <Route path='/addEmployee' element={<AddEmployee />}></Route>


    </Routes>
    </BrowserRouter>   
    </>
  );
}

export default App;
