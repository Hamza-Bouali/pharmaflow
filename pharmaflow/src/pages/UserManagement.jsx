import React, { useState } from 'react';
import { Save, Bell, Shield, Database, Printer } from 'lucide-react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [lowStockAlert, setLowStockAlert] = useState(10);
  const [backupFrequency, setBackupFrequency] = useState('daily');
  const [twoFactor, setTwoFactor] = useState(false);
  const [printerName, setPrinterName] = useState('');

  const handleSave = () => {
    // Here you would typically save the settings to your backend
    console.log('Settings saved:', { notifications, lowStockAlert, backupFrequency, twoFactor, printerName });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Bell size={20} />
          <h2 className="text-xl">Notifications</h2>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span>Enable notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div>
          <label htmlFor="lowStockAlert" className="block mb-2">Low stock alert threshold</label>
          <input
            id="lowStockAlert"
            type="number"
            value={lowStockAlert}
            onChange={(e) => setLowStockAlert(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Database size={20} />
          <h2 className="text-xl">Data Management</h2>
        </div>
        <div>
          <label htmlFor="backupFrequency" className="block mb-2">Backup frequency</label>
          <select
            id="backupFrequency"
            value={backupFrequency}
            onChange={(e) => setBackupFrequency(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} />
          <h2 className="text-xl">Security</h2>
        </div>
        <div className="flex items-center justify-between">
          <span>Enable two-factor authentication</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Printer size={20} />
          <h2 className="text-xl">Printing</h2>
        </div>
        <div>
          <label htmlFor="printerName" className="block mb-2">Default printer name</label>
          <input
            id="printerName"
            value={printerName}
            onChange={(e) => setPrinterName(e.target.value)}
            placeholder="Enter printer name"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button 
        onClick={handleSave} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      >
        <Save className="mr-2 h-4 w-4" /> Save Settings
      </button>
    </div>
  );
};

export default SettingsPage;