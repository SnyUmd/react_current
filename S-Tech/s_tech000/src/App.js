// import logo from './logo.svg';
import './App.css';
import CyberCtrlSysHome from './pages/CyberCtrlSysHome';
import CyberCtrlSysMesurement001 from './pages/CyberCtrlSysMesurement001';
import { BrowserRouter, Route, Switch, Routes} from 'react-router-dom';

function App() {

  const Routers = () => {
    return (
        <BrowserRouter>
          <div  className="App">
            <Routes>
              <Route exact path='/' Component={CyberCtrlSysHome}/>
              <Route exact path='/pages/CyberCtrlSysMesurement001' Component={CyberCtrlSysMesurement001}/>
            </Routes>
          </div>
        </BrowserRouter>
    )
  }

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App
