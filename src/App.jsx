import logo from './logo.svg';
import './css/sb-admin-2.min.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateUser from './CreateUser';
import Login from "./Login";
import Portal from "./Portal";
import CreateProduct from './CreateProduct';
import Products from './Products';



function App() {
    return (
      <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="products" element={<Products />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
  
        </Routes>
  
  
      </BrowserRouter>
    );
  }
  
  
  export default App;
