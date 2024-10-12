import React, { useState, useEffect } from 'react';
import { PlusCircle, Search, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // Simulated API call to fetch orders
    const fetchOrders = async () => {
      // In a real app, this would be an API call
      const mockOrders = [
        { id: 1, customer: 'John Doe', date: '2024-10-01', total: 150.00, status: 'pending' },
        { id: 2, customer: 'Jane Smith', date: '2024-10-02', total: 250.50, status: 'processing' },
        { id: 3, customer: 'Bob Johnson', date: '2024-10-03', total: 75.25, status: 'shipped' },
        { id: 4, customer: 'Alice Brown', date: '2024-10-04', total: 320.00, status: 'delivered' },
        { id: 5, customer: 'Charlie Davis', date: '2024-10-05', total: 180.75, status: 'pending' },
      ];
      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const results = orders.filter(order =>
      (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
       order.id.toString().includes(searchTerm)) &&
      (statusFilter === 'all' || order.status === statusFilter)
    );
    setFilteredOrders(results);
  }, [searchTerm, statusFilter, orders]);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-200 text-yellow-800';
      case 'processing': return 'bg-blue-200 text-blue-800';
      case 'shipped': return 'bg-purple-200 text-purple-800';
      case 'delivered': return 'bg-green-200 text-green-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          <PlusCircle size={20} className="mr-2" />
          New Order
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900 mr-3">
                    <Trash2 size={18} />
                  </button>
                  {order.status !== 'delivered' && (
                    <button 
                      className="text-green-600 hover:text-green-900"
                      onClick={() => handleStatusChange(order.id, 'delivered')}
                    >
                      <CheckCircle size={18} />
                    </button>
                  )}
                  {order.status === 'delivered' && (
                    <button 
                      className="text-yellow-600 hover:text-yellow-900"
                      onClick={() => handleStatusChange(order.id, 'pending')}
                    >
                      <XCircle size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;