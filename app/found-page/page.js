// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const FoundPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//       <div className="container mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">       
//        <h1 className="text-3xl font-bold mb-4">Report a Found Item</h1>
//         <form className="max-w-md mx-auto">
//           {/* What was found */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               What was found
//             </label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               placeholder="Item description"
//               required
//             />
//           </div>

//           {/* Color */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Color
//             </label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               placeholder="Color"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Category
//             </label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               placeholder="Category"
//               required
//             />
//           </div>

//           {/* Brand */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Brand
//             </label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               placeholder="Brand"
//               required
//             />
//           </div>

//           {/* Date found */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Date found
//             </label>
//             <input
//               type="date"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Time found */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Time found
//             </label>
//             <input
//               type="time"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               required
//             />
//           </div>

//           {/* Upload image */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Upload image
//             </label>
//             <input
//               type="file"
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               accept="image/*"
//               required
//             />
//           </div>

//           {/* Additional Information */}
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Additional Information
//             </label>
//             <textarea
//               className="w-full border border-gray-300 px-3 py-2 rounded-md"
//               placeholder="Additional information about the found item"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Report button */}
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
//           >
//             Report
//           </button>
//         </form>
//       </div></main>
//       <Footer />
//     </div>
//   );
// };

// export default FoundPage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Report a Found Item</h1>

          <form className="max-w-md mx-auto">
            {/* What was found */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                What was found
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Item description"
                required
              />
            </div>

            {/* Color */}
          {/* Color */}
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Color
  </label>
  <select
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
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
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
    required
  >
    <option value="">Select a category</option>
    <option value="electronics">Electronics</option>
    <option value="home-appliances">Home Appliances</option>
    <option value="clothing">Clothing</option>
    <option value="furniture">Furniture</option>
  </select>
</div>


            {/* Brand */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Brand
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Brand"
                required
              />
            </div>

            {/* Date found */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date found
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Time found */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time found
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Upload image */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Upload image
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                accept="image/*"
                required
              />
            </div>

            {/* Additional Information */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Additional information about the found item"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Report button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              Report
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoundPage;
