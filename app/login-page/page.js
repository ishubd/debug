// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const HomePage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow"><div className="min-h-screen flex items-center justify-center">
//       <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold mb-6">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-gray-600">
//           Don't have an account?{' '}
//           <span
//             className="text-blue-500 cursor-pointer"
//             // onClick={handleRegisterClick}
//           >
//             Register here
//           </span>
//         </p>
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

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-200 flex-grow flex items-center justify-center">
        <div className="max-w-md w-full p-10 bg-gray-50 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <Link href='/home-page'>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
            </Link>
          </form>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?{' '}
            <Link href="/register-page" style={{ color: 'blue' }}>
              Register here
            </Link>  
                    </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
