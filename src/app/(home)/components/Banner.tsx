import Image from "next/image";
import React from "react";
import photo2 from "../../../app/photo2.jpg";
import photo1 from "../../../app/photo1.jpg";
import photo3 from "../../../app/photo3.jpeg";
function Banner() {
  return (
    <div className="mx-auto max-w-7xl py-10">
      <div className="relative">
        <Image
          src={photo3}
          alt="bilboard"
          className="h-72 w-full rounded-lg "
          height={0}
          width={0}
          sizes="100vw"
        />
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30" />
          <Image
            src={photo2}
            alt="bilboard"
            className="absolute bottom-20 right-5"
            height={0}
            width={0}
            sizes="100vw"
            style={{width:'auto',height:'5rem'}}
          />
          <h3 className="absolute left-10 top-1/2 w-full max-w-3xl  text-white font-semibold tacking-tight  -translate-y-1/2 text-5xl">Connect,share and Trade your Favorite etc.......</h3>
      
      </div>
    </div>
  );
}

export default Banner;
