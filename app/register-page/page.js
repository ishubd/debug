// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">    <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-600">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div></main>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-200 flex-grow flex items-center justify-center">
        <div className="bg-gray-50 p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="reEnterPassword" className="block text-sm font-medium text-gray-600">
                Re-enter Password
              </label>
              <input
                type="password"
                id="reEnterPassword"
                name="reEnterPassword"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <Link href='/home-page'>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
            >
              Register
            </button>
            </Link>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

