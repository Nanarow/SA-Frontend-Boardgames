import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/boardgames" element=<div>boardgames</div> />
        <Route path="/rooms" element=<div>rooms</div> />
        <Route path="/recent" element=<div>recent</div> />
        <Route path="/pricing" element=<div>pricing</div> />
        <Route path="/*" element=<div>No page</div> />
      </Routes>
    </Router >
  );
}

export default App;
