import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyComponents from './components/MyComponents';
import BoardGames from './pages/BoardGames';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/components" element=<MyComponents /> />
        <Route path="/boardgames" element=<BoardGames /> />
        <Route path="/rooms" element=<div>rooms</div> />
        <Route path="/recent" element=<div>recent</div> />
        <Route path="/pricing" element=<div>pricing</div> />
        <Route path="/*" element=<div>No page</div> />
      </Routes>
    </Router >
  );
}

export default App;
