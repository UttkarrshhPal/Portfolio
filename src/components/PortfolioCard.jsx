import React from "react";

const PortfolioCard = ({ title, description, imageUrl,demoLink, projectLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 space-x-3 ">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          View Project
        </a>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
