import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-64 bg-gray-800 text-white">
        Sidebar
      </div>

     <div className="flex-1 p-6 bg-gray-100 flex flex-col space-y-6">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Dashboard</h2>
    <div className="flex space-x-4 text-gray-600 text-xl">
      <span className="cursor-pointer hover:text-gray-800">🔔</span>
      <span className="cursor-pointer hover:text-gray-800">⚙️</span>
    </div>
  </div>

  {/* Dashboard Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <p className="text-gray-500">Projects</p>
      <h3 className="text-2xl font-bold">12</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <p className="text-gray-500">Tasks Completed</p>
      <h3 className="text-2xl font-bold">34</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <p className="text-gray-500">Notifications</p>
      <h3 className="text-2xl font-bold">5</h3>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <p className="text-gray-500">Team Members</p>
      <h3 className="text-2xl font-bold">7</h3>
    </div>
  </div>

  {/* Main Area */}
  <div className="flex-1 flex flex-col lg:flex-row gap-6">
    {/* Task Progress */}
    <div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold mb-4">Task Progress</h3>

      {/* Tasks */}
      <div className="space-y-4">
        {/* Completed */}
        <div>
          <p className="text-gray-500 mb-1">Completed</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-60"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">34 tasks</p>
        </div>

        {/* In Progress */}
        <div>
          <p className="text-gray-500 mb-1">In Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full w-40"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">12 tasks</p>
        </div>

        {/* Not Started */}
        <div>
          <p className="text-gray-500 mb-1">Not Started</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-20"></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">6 tasks</p>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <ul className="space-y-3 text-gray-700">
        <li>✔ Completed "Design Homepage"</li>
        <li>⚙ Started "Build Sidebar"</li>
        <li>⏳ Not Started "Setup Database"</li>
        <li>✔ Completed "Login Form"</li>
        <li>⚙ Started "Task Progress Section"</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default App

