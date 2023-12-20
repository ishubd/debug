// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo on the left */}
//         <div className="text-2xl font-bold">
//           <Link href="/home-page">
//           <Image src="/lofoLogo.png" alt="Logo" width={100} height={50} />
//           </Link>
//         </div>

//         {/* Navigation links on the right */}
//         <nav className="flex space-x-4">
//           <Link href="/home-page">
//             Home
//           </Link>
//           <Link href="/about-page">
//             About
//           </Link>
//           <Link href="/contact-page">
//             Contact
//           </Link>
//           <div className="relative group">
//             <Link href="/login-page">
//               User
//             </Link>
//             <ul className="hidden bg-white text-gray-800 border border-gray-300 rounded-md space-y-2 group-hover:block absolute top-full left-0">
//     <li>
//                 <Link href="/login-page">
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/register-page">
//                   Register
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* Add more links as needed */}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-blue-700  text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <Link href="/home-page">
          <span className="text-4xl font-bold mb-4 ml-10">LoFo</span>
          </Link>
        </div>

        {/* Navigation links on the right */}
        <nav className="flex ml-auto space-x-4 ml-2 mr-8">
          <Link href="/home-page" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about-page" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact-page" className="hover:text-gray-300">
            Contact
          </Link>
          <div className="relative group">
            <Link href="/login-page" className="hover:text-gray-300">
              User
            </Link>
            <ul className="hidden bg-white text-gray-800 border border-gray-300 rounded-md space-y-1 group-hover:block absolute top-full left-0">
              <li>
                <Link href="/login-page" className="block px-2 py-2 hover:bg-gray-100">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register-page" className="block px-2 py-2 hover:bg-gray-100">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          {/* Add more links as needed */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


