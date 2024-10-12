import Nav from './componements/navbar/nav';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';
import StockForecasting from './pages/StockForecasting';
import UserManagement from './pages/UserManagement';
import React,{useState} from 'react';
import OrderManagement from './pages/OrderManagement';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Reports from './pages/Reports';
import LoginPage from './pages/LoginRegister';
const App=()=>{
    let [page,setPage]=useState('Login');
    let [state,setState]=useState('login');
    
    


    return (
        <>
        <Router>
        <Nav setPage={setPage}/>
        
        
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/forecast" element={<StockForecasting />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<UserManagement />} />
          </Routes>
        </Router>
    
    </>        
    )
    
}
export default App;