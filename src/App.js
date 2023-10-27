
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';



function App() {
  return (
    <div className="App">


        <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />

          </Routes>
        </main>
        
        </BrowserRouter>

     

    

    
    </div>
  );
}

export default App;
