import './App.css';
import {Routes,Route} from 'react-router-dom';  
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';
import Pagenotfound from './component/Pagenotfound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/edit/:id' element={<Edit/>}/>
        <Route exact path='/view/:id' element={<Details/>}/>
        <Route exact path='*' element={<Pagenotfound/>}/>
      </Routes>
    </>
  );
}

export default App;
