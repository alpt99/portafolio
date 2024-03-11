import React from 'react';
import Image from 'next/image';

const ProjectCard = ({title, description, src_media, src_media2}) => {
  return (
    <div className="flex m-16 p-16">
      <div className="w-1/2">
        {/* Left column */}
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="w-1/2">
        {/* Right column */}
        {/* <img src={src_media} alt="Project image or video" className="w-full" /> */}
        <Image src={src_media} alt="Project image or video" width={500} height={300} />
        <Image src={src_media2} alt="Project image or video" width={500} height={300} />
      </div>
    </div>
  );
};

export default ProjectCard;