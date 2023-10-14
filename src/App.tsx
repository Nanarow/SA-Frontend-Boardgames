import { Route, Routes } from 'react-router-dom';
import MyComponents from './components/__test__/MyComponents';
import BoardGames from './pages/BoardGames';
import Rooms from './pages/Rooms';
import Pricing from './pages/Pricing';
import NavBar from './components/NavBar';
import { useMemberContext } from './contexts/MemberProvider';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Loading from './pages/Loading';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from './components/custom/notify';

function App() {
  const { memberType } = useMemberContext()
  return (
    <main className=" h-screen m-0 w-full">
      <NavBar />
      {(memberType === "admin") ?
        <Routes>
          <Route path="/components" element={<MyComponents />} />
          <Route path="/boardgames" element={<BoardGames />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Auth form="login" />} />
          <Route path="/login" element={<Auth form="login" />} />
          <Route path="/register" element={<Auth form="register" />} />
          <Route path="/loading/:page" element={<Loading />} />
        </Routes> :
        <Routes>
          <Route path="/components" element={<MyComponents />} />
          <Route path="/boardgames" element={<BoardGames />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/*" element={<Auth form="login" />} />
          <Route path="/login" element={<Auth form="login" />} />
          <Route path="/register" element={<Auth form="register" />} />
          <Route path="/loading/:page" element={<Loading />} />
        </Routes>}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
    </main>
  );
}

export default App;
