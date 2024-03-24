import {useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Header} from './components/global';
import {Home} from './components/pages';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Shree
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  useEffect(() => {
    console.log('App Loaded');
  });

  return (
    <div
      className="appContainer"
    >
      <Header />
      <BrowserRouter>
        <div className="pageContainer">
          <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}
            {/* <Route element={<PageNotFound />} /> */}
          </Routes>
        </div>
        {/* <Header /> */}
      </BrowserRouter>

    </div>
  );
};

export default App;
