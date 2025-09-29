import Image from "next/image";
import React from "react";

interface TeamProps {
  name: string;
  role: string;
  show?: boolean;
  imgSrc: string;
}

const Team: React.FC<TeamProps> = ({ imgSrc, name, role, show }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        alt="Our Team"
        width={300}
        height={500}
        className="mt-8 rounded-lg shadow-lg h-[300px] w-[280px] object-cover"
      />
      <div className="bg-gray-100 p-4 space-y-3">
        {show ? (
          <>
            <h3 className="font-black"> {name}</h3>
            <h5 className="text-grayText text-sm text-center font-bold">
              {role}
            </h5>
            <h5 className="text-grayText text-sm text-center font-bold ">
              Adentan Constituency
            </h5>
          </>
        ) : (
          <div className="bg-gray-100 p-4 space-y-3">
            <h3 className="font-black text-center">{name}</h3>
            <h5 className="text-grayText text-sm bg-secondary  py-2 px-4 shadow-md text-center">
              {role}
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
