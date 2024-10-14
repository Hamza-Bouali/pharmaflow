import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Clipboard, TrendingUp, Package, DollarSign, Home } from 'lucide-react';
import Dropdown from './../componements/ui/dropdown';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Chart } from 'react-google-charts';

const Card = ({ title, value, icon: Icon, className }) => (
  <div className={`bg-white rounded-lg shadow p-6 flex items-center ${className}`}>
    <div className="mr-4">
      <Icon size={24} className="text-blue-500" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  </div>
);

const salesDataYearly = [
  { years: '2017', sales: 4000 },
  { years: '2018', sales: 3000 },
  { years: '2019', sales: 5000 },
  { years: '2020', sales: 4500 },
  { years: '2021', sales: 6000 },
  { years: '2022', sales: 5500 },
  { years: '2023', sales: 6500 },
  { years: '2024', sales: 7000 },
];

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
  { month: 'Jul', sales: 6500 },
  { month: 'Aug', sales: 7000 },
  { month: 'Sep', sales: 6000 },
  { month: 'Oct', sales: 8000 },
  { month: 'Nov', sales: 8000 },
  { month: 'Dec', sales: 9000 },
];

const SalesDataSeason=[
  {season: 'Winter', sales: 4000},
  {season: 'Spring', sales: 3000},
  {season: 'Summer', sales: 5000},
  {season: 'Fall', sales: 4500},

]

const productData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MonthlySales = ({ state ,n}) => {
  if (!state) return null;
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const YearlySales = ({ state ,n}) => {
  if (!state) return null;
  return (
    <div className={`bg-white rounded-lg shadow p-6 lg:col-span-${n}`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesDataYearly}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="years" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#20f885" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const SeasonSales = ({ state,n }) => {
  if (!state) return null;
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={SalesDataSeason}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="season" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#86438" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


const MapChart = () => {
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
  >
    
    </Chart>

  );
};

const ReportsPage = () => {
  const [topCity, setTopCity] = useState('New York');
  const [topProduct, setTopProduct] = useState('Dollyprane');
  const [periods, setPeriods] = useState({ year: 'all years', month: 'all months', season: 'all seasons' });
  const [visibleComponents, setVisibleComponents] = useState({ year: true, month: true, season: true });
  const [numb, setNumb] = useState(3);
  const years = [
    { label: 'all years', value: 'all years' },
    { label: '2025', value: 2025 },
    { label: '2024', value: 2024 },
    { label: '2023', value: 2023 },
    { label: '2022', value: 2022 },
    { label: '2021', value: 2021 },
    { label: '2020', value: 2020 },
    { label: '2019', value: 2019 },
    { label: '2018', value: 2018 },
    { label: '2017', value: 2017 },
    { label: '2016', value: 2016 },
  ];

  const months = [
    { label: 'all months', value: 'all months' },
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  const seasons = [
    { label: 'all seasons', value: 'all seasons' },
    { label: 'Winter', value: 'Winter' },
    { label: 'Spring', value: 'Spring' },
    { label: 'Summer', value: 'Summer' },
    { label: 'Fall', value: 'Fall' },
  ];

  const onPeriodChange = (period, type) => {
    setPeriods(prev => ({ ...prev, [type]: period }));
    setVisibleComponents(prev => ({ ...prev, [type]: period === `all ${type}s` }));
    visibleComponents.map((item) => {item ? setNumb(numb+1) : setNumb(numb-1)});
  };

  const channelSalesData = [
    { year: '2019', private: 4000, public: 2400 },
    { year: '2020', private: 3000, public: 1398 },
    { year: '2021', private: 2000, public: 9800 },
    { year: '2022', private: 2780, public: 3908 },
    { year: '2023', private: 1890, public: 4800 },
    { year: '2024', private: 2390, public: 3800 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex space-x-3">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Dropdown options={years} onSelect={(option) => onPeriodChange(option.value, 'year')} />
        <Dropdown options={months} onSelect={(option) => onPeriodChange(option.value, 'month')} />
        <Dropdown options={seasons} onSelect={(option) => onPeriodChange(option.value, 'season')} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Total Sales" value="$1,234,567" icon={DollarSign} />
        <Card title="Products Sold" value="12,345" icon={Package} />
        <Card title="Top Product" value={topProduct} icon={Clipboard} />
        <Card title="Top City" value={topCity} icon={Home} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <YearlySales state={visibleComponents.year}   n={numb} />
        <MonthlySales state={visibleComponents.month} n={numb}/>
        <SeasonSales state={visibleComponents.season} n={numb}/>
        <div className={`bg-white rounded-lg shadow p-6 lg:col-span-2`}>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Years & Channels</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="public" fill="#8884d8" />
              <Bar dataKey="private" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Global Sales Distribution</h2>
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;