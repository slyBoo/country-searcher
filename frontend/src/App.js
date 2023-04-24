// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/appbar';
import StickyFooter from './components/stickyfooter';
import PageNotFound from './components/404';
import SearchForm from './components/searchcountries';
import SingleCountry from './components/viewsinglecountry';

function App() {
  return (
    <div className="App">
        <BrowserRouter >
          <DrawerAppBar />
          <Routes>
            <Route path="/" element={<SearchForm />}></Route>
            <Route path="/:id" element={<SingleCountry />}></Route>
            <Route path="/notfound" element={<PageNotFound />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <StickyFooter />
        </BrowserRouter>
    </div>
  );
}

export default App;
