import Image from 'next/image';
import sampleImage from '@/public/assets/profile/imageCard.svg';
import React from 'react';
import { Global, Location, Timer1 } from 'iconsax-react';
import avatars from '@/public/assets/profile/avatars.svg';

const GridEventCard = () => {
  return (
    <div className="md:w-[285px] lg:w-[405px]  rounded-2xl bg-[#FEFEFE] overflow-hidden  shadow-md">
      <Image src={sampleImage} alt={''} className="w-full h-[180px] object-cover" />
      <div className="w-full p-4 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between text-primary-100 text-xs md:text-sm lg:text-base font-normal ">
            <span className="">Mon. Oct 30</span>
            <span className="px-3 py-1 bg-secondary-100">$100</span>
          </div>

          <h6 className="text-base md:text-xl lg:text-2xl font-semibold line-clamp-2 md:line-clamp-1 ">
            HNG Finalist Meetup
          </h6>

          <div className="font-medium text-xs md:text-sm text-[#868686] flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center">
              <Location size="16" color="#303030" />

              <span className="">Greenfield, IK</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Timer1 size="16" color="#303030" />

              <span className="">3:00PM WAT</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-x-2 text-[#3C3C3C] text-xs font-medium items-center w-fit">
            <Image src={avatars} alt={''} />
            <span className="md:flex hidden text-[10px] lg:text-base"> +32 People registered</span>
          </div>

          <div className="hidden lg:flex gap-x-1 items-center text-xs text-[#868686] font-medium">
            <Global size="12" color="#303030" /> Public
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridEventCard;
