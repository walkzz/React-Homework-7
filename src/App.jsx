// default template
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import NotFound from './components/NotFound';
import './App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<CountryDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
export default App;