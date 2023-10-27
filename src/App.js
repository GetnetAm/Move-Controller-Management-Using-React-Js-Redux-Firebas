
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">


        <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />

          </Routes>
        </main>
        
        </BrowserRouter>

     

    

    
    </div>
  );
}

export default App;
