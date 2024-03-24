import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Header} from './components/global';
import {Home, Test} from './components/pages';
import './App.css';

const App = () => {
  return (
    <div
      className="appContainer"
    >
      <Header />
      <BrowserRouter>
        <div className="pageContainer">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/test' element={<Test/>} />
            {/* <Route path='/' element={<Test/>} />
            <Route path='/test' element={<Home/>} /> */}
          </Routes>
        </div>
        {/* <Header /> */}
      </BrowserRouter>

    </div>
  );
};

export default App;
