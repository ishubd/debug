'use client'
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Link from 'next/link';
// import axios from 'axios';
// import { useRouter } from 'next/navigation'



// const TestPage = () => {
  
  

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="bg-gray-200 flex-grow flex items-center justify-center">
//         <div className="max-w-full w-full p-10 bg-gray-50 rounded-md shadow-md">
        
//             <h1 className="text-2xl font-bold mb-4">Search Results</h1>

       

//             <div className="bg-white p-4 rounded-md shadow-md flex items-center">
//       {/* Image on the left */}
//       <img
//         src="path/to/your/image.jpg"
//         alt="Item Image   "
//         className="w-16 h-16 rounded-full mr-4"
//       />

//       {/* Details on the right */}
//       <div>
//         <p className="text-lg font-bold">Result 1</p>
//         <p>Color: Blue</p>
//         <p>Category: Electronics</p>
//         <p>Brand: XYZ</p>
//         <p>Date Lost: 2023-01-01</p>
//         <p>Time Lost: 12:00 PM</p>

//         {/* User's name and phone numbers */}
//         <p>Founder's Name: Ishub Dhungana</p>
//         <p>Phone Number: +977-9865457541</p>
//       </div>
//     </div>
//               <br></br>
              
//               <div className="bg-white p-4 rounded-md shadow-md flex items-center">
//       {/* Image on the left */}
//       <img
//         src="path/to/your/image.jpg"
//         alt="Item Image   "
//         className="w-16 h-16 rounded-full mr-4"
//       />

//       {/* Details on the right */}
//       <div>
//         <p className="text-lg font-bold">Result 2</p>
//         <p>Color: Blue</p>
//         <p>Category: Electronics</p>
//         <p>Brand: XYZ</p>
//         <p>Date Lost: 2023-01-01</p>
//         <p>Time Lost: 12:00 PM</p>

//         {/* User's name and phone numbers */}
//         <p>Founder's Name: Rukshan Raut</p>
//         <p>Phone Number: +977-9856478547</p>
//       </div>
//     </div>
//     <br></br>

//     <div className="bg-white p-4 rounded-md shadow-md flex items-center">
//       {/* Image on the left */}
//       <img
//         src="path/to/your/image.jpg"
//         alt="Item Image   "
//         className="w-16 h-16 rounded-full mr-4"
//       />

//       {/* Details on the right */}
//       <div>
//         <p className="text-lg font-bold">Result 3</p>
//         <p>Color: Blue</p>
//         <p>Category: Electronics</p>
//         <p>Brand: XYZ</p>
//         <p>Date Lost: 2023-01-01</p>
//         <p>Time Lost: 12:00 PM</p>

//         {/* User's name and phone numbers */}
//         <p>Founder's Name: Reejan Neupane</p>
//         <p>Phone Number: +977-9865874578</p>
//       </div>
//     </div>

//         </div>
      
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default TestPage;


// pages/test-page.js
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import axios from 'axios';

// const TestPage = () => {
//   const [results, setResults] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/lostitems');
//         setResults(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="bg-gray-200 flex-grow flex items-center justify-center">
//         <div className="max-w-full w-full p-10 bg-gray-50 rounded-md shadow-md">

//           <h1 className="text-2xl font-bold mb-4">Search Results</h1>

//           {results.map((item) => (
//             <div key={item.id} className="bg-white p-4 rounded-md shadow-md flex items-center">
//               {/* Image on the left */}
//               <img
//                 src={item.image} // Update this with the actual image field from your data
//                 alt={`Item Image - ${item.name}`}
//                 className="w-16 h-16 rounded-full mr-4"
//               />

//               {/* Details on the right */}
//               <div>
//                 <p className="text-lg font-bold">{item.name}</p>
//                 <p>Color: {item.color}</p>
//                 <p>Category: {item.category}</p>
//                 <p>Brand: {item.brand}</p>
//                 <p>Date Lost: {item.date}</p>
//                 <p>Time Lost: {item.time}</p>

//                 {/* User's name and phone numbers */}
//                 <p>Founder's Name: {item.founderName}</p>
//                 <p>Phone Number: {item.phoneNumber}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default TestPage;
// 
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const TestPage = () => {
  const [recentLostItems, setRecentLostItems] = useState([]);

  useEffect(() => {
    const fetchRecentLostItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lostitems/recent');
        setRecentLostItems(response.data);
      } catch (error) {
        console.error('Error fetching recent lost items:', error);
      }
    };

    fetchRecentLostItems();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-200 flex-grow flex items-center justify-center">
        <div className="max-w-full w-full p-10 bg-gray-50 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Recent Lost Items with Similarity Results</h1>

          {recentLostItems.map(({ lostItem, similarityResults }) => (
            <div key={lostItem._id} className="bg-white p-4 rounded-md shadow-md mb-4">
              {/* Display lost item details */}
              <p className="text-lg font-bold">{lostItem.name}</p>
              <p>Color: {lostItem.color}</p>
              <p>Category: {lostItem.category}</p>
              <p>Brand: {lostItem.brand}</p>
              <p>Date Lost: {lostItem.date}</p>
              <p>Description: {lostItem.description}</p>

              {/* Display similarity results */}
              <h2 className="text-xl font-bold mt-4">Similarity Results</h2>
              {similarityResults.map(({ foundItem, similarity }) => (
                <div key={foundItem._id} className="mt-2">
                  <p>
                    Cosine Similarity with Found Item ({foundItem.name}): {similarity}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
