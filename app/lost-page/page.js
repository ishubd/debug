
'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'


const LostPage = () => {

  const router = useRouter()

  function handleSubmit(event){
    event.preventDefault()

axios.post("http://localhost:8000/api/lostitems", {
        "name": event.target.itemName.value,
        "color": event.target.color.value,
        "category": event.target.category.value,
        "brand": event.target.itemBrand.value,
        "date": event.target.itemDate.value,
        "time": event.target.itemTime.value,
        "description": event.target.additionalInfo.value,
      
    }).then(res => {
  
      router.push("/test-page")
      console.log(res.data.lostItem)
  })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-8 text-center">Submit a Lost Item</h1>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                What was lost?
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Item description"
                required
              />
            </div>

            {/* Color */}
            <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Color
  </label>
  <select
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" name='color'
    required
  >
    <option value="" disabled selected>Select a color</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="yellow">Yellow</option>
    <option value="pink">Pink</option>
    <option value="black">Black</option>
    <option value="white">White</option>
    {/* Add more color options as needed */}
  </select>
</div>



            {/* Category */}
            <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Category
  </label>
  <select
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" name='category'
    required
  >
    <option value="">Select a category</option>
    <option value="electronics">Electronics</option>
    <option value="home-appliances">Home Appliances</option>
    <option value="clothing">Clothing</option>
    <option value="furniture">Furniture</option>
  </select>
</div>


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemBrand">
                Brand
              </label>
              <input
                type="text"
                id="itemBrand"
                name="itemBrand"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"  placeholder="Brand name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDate">
                Date Lost
              </label>
              <input
                type="date"
                id="itemDate"
                name="itemDate"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemTime">
                Time Lost
              </label>
              <input
                type="time"
                id="itemTime"
                name="itemTime"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemImage">
                Upload Image
              </label>
              <input type="file" id="itemImage" name="itemImage" accept="image/*" className="py-2" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
                Description
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
            
        
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LostPage;
