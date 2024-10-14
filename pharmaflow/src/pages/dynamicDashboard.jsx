import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const Card = ({ children, title }) => (
  <div className="border rounded-lg shadow-md p-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

const Switch = ({ id, checked, onChange, label }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="w-4 h-4"
    />
    <label htmlFor={id} className="text-sm font-medium">
      {label}
    </label>
  </div>
);

const DynamicDashboard = () => {
  const [visibleComponents, setVisibleComponents] = useState({
    summary: true,
    chart: true,
    recentActivity: true,
  });

  const toggleComponent = (component) => {
    setVisibleComponents(prev => ({
      ...prev,
      [component]: !prev[component]
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Dashboard</h1>
      
      <div className="flex space-x-4 mb-4">
        <Switch 
          id="summary-switch"
          checked={visibleComponents.summary}
          onChange={() => toggleComponent('summary')}
          label="Summary"
        />
        <Switch 
          id="chart-switch"
          checked={visibleComponents.chart}
          onChange={() => toggleComponent('chart')}
          label="Chart"
        />
        <Switch 
          id="recent-activity-switch"
          checked={visibleComponents.recentActivity}
          onChange={() => toggleComponent('recentActivity')}
          label="Recent Activity"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleComponents.summary && (
          <Card title="Summary">
            <p>Total Sales: $10,000</p>
            <p>New Customers: 50</p>
            <p>Pending Orders: 25</p>
          </Card>
        )}

        {visibleComponents.chart && (
          <Card title="Monthly Sales">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        )}

        {visibleComponents.recentActivity && (
          <Card title="Recent Activity">
            <ul className="list-disc pl-5">
              <li>New order received from John Doe</li>
              <li>Product X is out of stock</li>
              <li>Customer support ticket resolved</li>
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DynamicDashboard;