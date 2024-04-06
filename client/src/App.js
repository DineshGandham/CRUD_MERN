import './App.css';
import { lazy } from 'react';
import {Routes,Route} from 'react-router-dom';  
// import Home from './component/Home';
// import Register from './component/Register';
// import Edit from './component/Edit';
// import Details from './component/Details';
// import Pagenotfound from './component/Pagenotfound';
const Home = lazy(() => import('./component/Home'));
const Register = lazy(() => import('./component/Register'));
const Navbar = lazy(() => import('./component/Navbar'));
const Edit = lazy(() => import('./component/Edit'));
const Details = lazy(() => import('./component/Details'));
const Pagenotfound = lazy(() => import('./component/Pagenotfound'));

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
