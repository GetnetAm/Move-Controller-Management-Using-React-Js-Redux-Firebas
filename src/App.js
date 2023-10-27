
import { Route, Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from '../public/videos/Detail';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <switch>
          <Route path='/detail'>
            <Detail />

          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </switch>
      </Router>
    

    
    </div>
  );
}

export default App;
