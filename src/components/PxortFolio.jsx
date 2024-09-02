import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import PortfolioCard from "./PortfolioCard";
function PxortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="flex flex-wrap gap-x-6 my-5">
          <PortfolioCard
            imageUrl={
              "https://utfs.io/f/2e40caa1-cdd1-48de-8fff-288055c3ab07-hooezj.png"
            }
            title={"Movie Search App"}
            description={
              "A responsive and interactive movie search app designed using ReactJS. Leveraging the OMDB API, it showcases my skills in API integration, state management, and user-friendly interface design."
            }
            demoLink={"https://main--bespoke-pony-04c72f.netlify.app//"}
            projectLink={"https://github.com/UttkarrshhPal/Movie-App"}
          />
          <PortfolioCard
            imageUrl={
              "https://utfs.io/f/171b7c3c-6c0b-4e07-bf8f-dd6829515efc-hopmt2.png"
            }
            title={"Spotify Clone"}
            description={
              "A visually engaging Spotify clone that demonstrates my frontend development skills. Created using HTML, CSS, and JavaScript, this project features a custom-built music player interface, playlist management, and seamless transitions, reflecting the look and feel of the original platform.."
            }
            demoLink={"https://spotify-clone-utkarsh-pal.netlify.app/"}
            projectLink={"https://github.com/UttkarrshhPal/Spotify_Clone"}
          />
          <PortfolioCard
            imageUrl={
              "https://utfs.io/f/bca7e4a9-a7b7-408b-9d6a-55923b780283-hoodjr.png"
            }
            title={"Algorithm Visualiser"}
            description={
              "An engaging algorithm visualizer designed to make complex concepts accessible. Built with HTML, CSS, and JavaScript, this project showcases my ability to create educational tools with clear, real-time visual representations of sorting, searching, and graph algorithms."
            }
            demoLink={"https://splendorous-croquembouche-09ba47.netlify.app/"}
            projectLink={
              "https://github.com/UttkarrshhPal/Algorithm-Visualiser"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PxortFolio;
