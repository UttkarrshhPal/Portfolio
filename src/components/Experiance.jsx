import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import cpp from "../assets/cpp.png";
import react from "../assets/react.png";
//import springBoot from "../assets/springBoot.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: cpp,
      name: "C++",
    },

    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: react,
      name: "React",
    },
    {
      id: 4,
      logo: oracle,
      name: "SQL",
    },
    {
      id: 5,
      logo: css,
      name: "CSS",
    },

    // {
    //   id: 6,
    //   logo: java,
    //   name: "Java",
    // },
    // {
    //   id: 7,
    //   logo: springBoot,
    //   name: "Spring Boot",
    // },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">I've have in experiance in below technologies.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[120px] " alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
