import React from 'react';
import Image from 'next/image';

const ProjectCard = ({title, description, src_media, src_media2}) => {
  return (
    <div className="flex m-10 p-10">
      <div className="w-1/2 my-20 mx-10">
        {/* Left column */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className=" text-justify">{description}</p>
      </div>
      <div className="mx-4 divide-x-2">
        {/* Right column */}
        {/* <img src={src_media} alt="Project image or video" className="w-full" /> */}
        <Image src={src_media} alt="Project image or video" width={500} height={300} />
        <Image src={src_media2} alt="Project image or video" width={500} height={300} />
      </div>
    </div>
  );
};

export default ProjectCard;
