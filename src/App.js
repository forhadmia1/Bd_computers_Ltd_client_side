import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddReviews from './Pages/Dashboard/AddReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import PurchaseHardware from './Pages/Home/PurchaseHardware';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/hardware/:id' element={
          <RequireAuth>
            <PurchaseHardware />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<MyOrders />} />
          <Route path='addReviews' element={<AddReviews />} />
          <Route path='myProfile' element={<MyProfile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
