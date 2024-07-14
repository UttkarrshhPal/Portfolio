import React from "react";

//import pic from "../assets/photo.avif";
import pic from "../assets/upload.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            {/* <p className="text-sm md:text-md text-justify">
              I'm a web developer passionate about competitive programming and
              mastering data structures. My skill set includes C, C++, and
              Python for languages, along with HTML, CSS, JavaScript, and React
              JS for frontend development. I also work proficiently with Django,
              which I use to build robust web applications. You can find my
              projects and contributions on GitHub at
              <link rel="stylesheet" href="https://github.com/UttkarrshhPal"/>,

              and I actively share knowledge and solutions on Geeks for Geeks
              under the username dankrishu.
            </p> */}
            <p className="text-sm md:text-md text-justify">
              I'm a web developer passionate about competitive programming and
              mastering data structures. My skill set includes C, C++, and
              Python for languages, along with HTML, CSS, JavaScript, and React
              JS for frontend development. I also work proficiently with Django,
              which I use to build robust web applications. You can find my
              projects and contributions on
              <a
                href="https://github.com/UttkarrshhPal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "red" }}
              >
                {" "}
                GitHub
              </a>
              , and I actively share knowledge and solutions on Geeks for Geeks
              under the username{" "}
              <a
                href="https://auth.geeksforgeeks.org/user/dankrishu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "red" }}
              >
                GFG Profile
              </a>
              .
            </p>

            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://leetcode.com/u/slowADsteady/"
                      target="_blank"
                    >
                      <SiLeetcode className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/user/dankrishu/"
                      target="_blank"
                    >
                      <SiGeeksforgeeks className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/utkarsh-pal-/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-2xl md:w-[900px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
// import React from "react";
// import pic from "../assets/photo.avif";
// import { FaLinkedin } from "react-icons/fa";
// import { SiMongodb, SiExpress, FaReact, FaNodeJs } from "react-icons/si";
// import { ReactTyped } from "react-typed";
// import { FaGithub, FaLeetcode } from "react-icons/fa"; // Import GitHub and LeetCode icons

// function Home() {
//   return (
//     <>
//       <div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//             <span className="text-xl">Welcome In My Feed</span>
//             <div className="flex space-x-1 text-2xl md:text-4xl">
//               <h1>Hello, I'm a</h1>
//               <ReactTyped
//                 className="text-red-700 font-bold"
//                 strings={["Developer", "Programmer", "Coder"]}
//                 typeSpeed={40}
//                 backSpeed={50}
//                 loop={true}
//               />
//             </div>
//             <br />
//             <p className="text-sm md:text-md text-justify">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//               Quisquam, recusandae consequatur. Accusamus sint libero eligendi
//               laborum fuga repudiandae? Asperiores tempore eos animi dolores
//               corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
//               cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
//             </p>
//             <br />
//             {/* social media icons */}
//             <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//               <div className="  space-y-2">
//                 <h1 className="font-bold text-center ">Available on</h1>
//                 <ul className="flex space-x-5">
//                   <li>
//                     <a href="https://www.linkedin.com/in/utkarsh-pal-/" target="_blank">
//                       <FaLinkedin className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://leetcode.com/" target="_blank">
//                       <FaLeetcode className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://github.com/" target="_blank">
//                       <FaGithub className="text-2xl cursor-pointer" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className=" space-y-2">
//                 <h1 className="font-bold text-center">Currently working on</h1>
//                 <div className="flex space-x-5">
//                   <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                   <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
//             <img
//               src={pic}
//               className="rounded-full md:w-[450px] md:h-[450px]"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>

//       <hr />
//     </>
//   );
// }

// export default Home;
