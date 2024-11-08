import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
       <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center item start m-12">
          <h1 className="text-[40px] font-bold w-[496px] h-[189px] landing-[65.8px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-3xl font-medium">
            An example of intricate workmanship and detail, elegant
            necklaces and long and short chains form a part of
            our desirable collection.
          </p>
          <br />
          <button className="bg-[#A29875] text-startp-10 text-[#FFFFFF] gap-10 rounded-[10px]
          w-[288px] h-[58px] font-medium text-[30px]">
            Explore Now
          </button>
        </div>
        <div className="w-[490px] h-[667px] flex justify-center items-center">
           <Image 
           src={"/images/figma_image.png"}
           alt="hero image"
           width={442}
           height={611} 
           />
        </div>
      </div>
    </div>
  );
};

