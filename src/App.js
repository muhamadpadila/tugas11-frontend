import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layout from './Layouts/Layout';
import { useState } from 'react';
import DataMovies from './utils/constants/DataMovie'
import GlobalStyle from './components/Global/GlobalStyle';



function App() {

const [data, setData] = useState(DataMovies)


  return (
   <>
   <GlobalStyle /> 
   <Layout>
      <Routes> 
        <Route path='/' element={<Home item={data} setItem={setData}/>}/>
        <Route path='/bebek' element={<Popular/>}/>
        <Route path='/ayam' element={<Add item={data} setItem={setData}/>}/>
      </Routes>
    </Layout>
   
   </>
  )
}

export default App;
