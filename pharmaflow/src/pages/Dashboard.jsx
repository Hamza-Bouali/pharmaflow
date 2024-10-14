import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Clipboard, TrendingUp, Package, DollarSign, Car, TvIcon, PanelTopIcon, HomeIcon } from 'lucide-react';
import { useState } from 'react';
import  Dropdown from './../componements/ui/dropdown'
import { PureComponent } from 'react';
import {Chart} from 'react-google-charts';

import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart() {
  const geoUrl="https://raw.githubusercontent.com/mledoze/countries/442472de98e80f4a44f1028960dbb0dfb1d942fe/data/deu.topo.json";
  
  const data = [
     ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ]
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
      height="100%"
      data={data}
    />
  )
}

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

const productData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {

  const data = [
    {
      year: '2019',
      private: 4000,
      public: 2400,
      amt: 2400,
    },
    {
      year: '2020',
      private: 3000,
      public: 1398,
      amt: 2210,
    },
    {
      year: '2021',
      private: 2000,
      public: 9800,
      amt: 2290,
    },
    {
      year: '2022',
      private: 2780,
      public: 3908,
      amt: 2000,
    },
    {
      year: '2023',
      private: 1890,
      public: 4800,
      amt: 2181,
    },
    {
      year: '2024',
      private: 2390,
      public: 3800,
      amt: 2500,
    },
    
  ];
  
  const years=[
    {label:'all years',value:'all years'},
    {label:'2025',value:2025},
    {label:'2023',value:2023},
    {label:'2022',value:2022},
    {label:'2021',value:2021},
    {label:'2020',value:2020},
    {label:'2019',value:2019},
    {label:'2018',value:2018},
    {label:'2017',value:2017},
    {label:'2016',value:2016},
  ]
  const months=
  [
    {label:'all months',value:'all months'},
    {label:'January',value:'January'},
    {label:'February',value:'February'},
    {label:'March',value:'March'},
    {label:'April',value:'April'},
    {label:'May',value:'May'},
    {label:'June',value:'June'},
    {label:'July',value:'July'},
    {label:'August',value:'August'},
    {label:'September',value:'September'},
    {label:'October',value:'October'},
    {label:'November',value:'November'},
    {label:'December',value:'December'},
  ]
  const seasons=[
    {label:'all seasons',value:'all seasons'},
    {label:'Winter',value:'Winter'},
    {label:'Spring',value:'Spring'},
    {label:'Summer',value:'Summer'},
    {label:'Fall',value:'Fall'},
  ]

  let [TopCity,setTopCity]=useState('New York');
  let [TopProduct,setTopProduct]=useState('Dollyprane');
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex space-x-3">
            <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white-500 bg-white border border-white-300 rounded-lg hover:bg-white-100 hover:text-white-700 dark:bg-white-800 dark:border-white-700 dark:text-white-400 dark:hover:bg-white-700 bg-white-100 dark:hover:text-white">
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
            </a>
            <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white-500 bg-white border border-white-300 rounded-lg hover:bg-white-100 hover:text-white-700 dark:bg-white-800 dark:border-white-700 dark:text-white-400 dark:hover:bg-white-700 bg-white-100 dark:hover:text-gray">
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Dropdown options={years} onSelect={(option) => console.log(option)} />
          <Dropdown options={months} onSelect={(option) => console.log(option)} />
          <Dropdown options={seasons} onSelect={(option) => console.log(option)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card title="Total Sales" value="$1,234,567" icon={DollarSign} />
          <Card title="Products Sold" value="12,345" icon={Package} />
          <Card title="Top Product" value={TopProduct} icon={Clipboard} />
          <Card title="Top City" value={TopCity} icon={HomeIcon} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
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
          <div className="bg-white rounded-lg shadow p-6">
            <div id="countries_div" height={300} width={"100%"}></div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Years & Channels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart width={500} height={300} data={data}>
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
            <div className="flex items-center justify-center">
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
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <MapChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPage;