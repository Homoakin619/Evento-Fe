import React from 'react';
import HomeLayout from '@/layout/Homelayout';
import { Montserrat, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import FrameA from 'public/Home/homev31.svg';
import top from '../../public/landpageimage.svg';
import HeroImg from 'public/Home/homev32.svg';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight2 } from 'iconsax-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function Home() {
  const btnText = `Explore other events`;
  return (
    <div className={`${montserrat.className} flex justify-between mb-10 max-w-[1240px] mx-auto`}>
      <div>
        <div className="flex mt-24 items-center flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:pr-8">
            <Link href={'/explore'}>
              <Button
                styles={
                  ' w-[250px] h-auto py-4 rounded-lg item-center bg-white-100 justify-center font-semibold border border-primary-100 flex gap-2 text-primary-100'
                }
                title={''}
              >
                {btnText}
                <ArrowRight2 size="22" color="#E0580C" />
              </Button>
            </Link>
            <h1 className="text-[3.25rem] font-bold text-Grey-G700 tracking-[-0.125rem]">
              Crafting Experiences <br /> One <span className="text-primary-100">Event</span> at a Time
            </h1>
            <p className="text-Grey-G100 sm:w-[70%]">
              Bring your events to life effortlessly. Evento empowers you to create, organize, and manage your events
              easily
            </p>
            <Button type="button" title="upload-button" styles="text-white-N0 font-bold text-sm mt-10 px-5 py-4">
              Create an Event
            </Button>
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2">
            <Image src={top} alt="" width={730} height={726} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
