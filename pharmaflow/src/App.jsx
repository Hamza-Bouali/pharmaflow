import Nav from './componements/navbar/nav';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';
import StockForecasting from './pages/StockForecasting';
import UserManagement from './pages/UserManagement';
import React,{useState} from 'react';
import OrderManagement from './pages/OrderManagement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinancialReportsPage from './pages/Reports';
import LoginPage from './pages/Login';
import DashboardDropdown from './componements/ui/dropdown';
import RegisterPage from './pages/Register';
import DynamicDashboard from './pages/dynamicDashboard';
const App=()=>{
    
    let [state,setState]=useState(false);
    
    


    return (
        <>
        <Router>
        <Nav />
        
        <div className="max-w-10xl mx-auto">
          <Routes>
          
            <Route path="/" element={state ? <LoginPage setState={setState}/> : <RegisterPage setState={setState}/>} />
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