'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'



const TestPage = () => {
  
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-200 flex-grow flex items-center justify-center">
        <div className="max-w-full w-full p-10 bg-gray-50 rounded-md shadow-md">
        
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>

       

            <div className="bg-white p-4 rounded-md shadow-md flex items-center">
      {/* Image on the left */}
      <img
        src="path/to/your/image.jpg"
        alt="Item Image   "
        className="w-16 h-16 rounded-full mr-4"
      />

      {/* Details on the right */}
      <div>
        <p className="text-lg font-bold">Result 1</p>
        <p>Color: Blue</p>
        <p>Category: Electronics</p>
        <p>Brand: XYZ</p>
        <p>Date Lost: 2023-01-01</p>
        <p>Time Lost: 12:00 PM</p>

        {/* User's name and phone numbers */}
        <p>Founder's Name: Ishub Dhungana</p>
        <p>Phone Number: +977-9865457541</p>
      </div>
    </div>
              <br></br>
              
              <div className="bg-white p-4 rounded-md shadow-md flex items-center">
      {/* Image on the left */}
      <img
        src="path/to/your/image.jpg"
        alt="Item Image   "
        className="w-16 h-16 rounded-full mr-4"
      />

      {/* Details on the right */}
      <div>
        <p className="text-lg font-bold">Result 2</p>
        <p>Color: Blue</p>
        <p>Category: Electronics</p>
        <p>Brand: XYZ</p>
        <p>Date Lost: 2023-01-01</p>
        <p>Time Lost: 12:00 PM</p>

        {/* User's name and phone numbers */}
        <p>Founder's Name: Rukshan Raut</p>
        <p>Phone Number: +977-9856478547</p>
      </div>
    </div>
    <br></br>

    <div className="bg-white p-4 rounded-md shadow-md flex items-center">
      {/* Image on the left */}
      <img
        src="path/to/your/image.jpg"
        alt="Item Image   "
        className="w-16 h-16 rounded-full mr-4"
      />

      {/* Details on the right */}
      <div>
        <p className="text-lg font-bold">Result 3</p>
        <p>Color: Blue</p>
        <p>Category: Electronics</p>
        <p>Brand: XYZ</p>
        <p>Date Lost: 2023-01-01</p>
        <p>Time Lost: 12:00 PM</p>

        {/* User's name and phone numbers */}
        <p>Founder's Name: Reejan Neupane</p>
        <p>Phone Number: +977-9865874578</p>
      </div>
    </div>

        </div>
      
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
