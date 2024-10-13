import Nav from './componements/navbar/nav';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';
import StockForecasting from './pages/StockForecasting';
import UserManagement from './pages/UserManagement';
import React,{useState} from 'react';
import OrderManagement from './pages/OrderManagement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinancialReportsPage from './pages/Reports';

import RegisterPage from './pages/LoginRegister';
const App=()=>{
    let [page,setPage]=useState('Login');
    let [state,setState]=useState(false);
    
    


    return (
        <>
        <Router>
        <Nav setPage={setPage}/>
        
        <div className="px-20  max-w-10xl mx-auto">
          <Routes>
          
            <Route path="/" element={<RegisterPage setPage={setState}/>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/forecast" element={<StockForecasting />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/reports" element={<FinancialReportsPage />} />
            <Route path="/settings" element={<UserManagement />} />
          
          </Routes>
          </div>
        </Router>
    
    </>        
    )
    
}
export default App;