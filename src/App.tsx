import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyComponents from './components/MyComponents';
import BoardGames from './pages/BoardGames';
import Rooms from './pages/Rooms';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/components" element=<MyComponents /> />
        <Route path="/boardgames" element=<BoardGames /> />
        <Route path="/rooms" element=<Rooms /> />
        <Route path="/recent" element=<div>recent</div> />
        <Route path="/pricing" element=<Pricing /> />
        <Route path="/*" element=<div>No page</div> />
      </Routes>
    </Router >
  );
}

export default App;
