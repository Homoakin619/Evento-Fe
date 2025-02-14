import React, { useEffect, useState } from 'react';
import NoEvent from './NoEvent';
import Events from './Events';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import FilterModal from './FilterModal';
import { eventType, getUserCreatedEvents } from '@/http/profileapi';
import { getUserEvents } from '@/http/dashBoard3api';

interface SwiperElement extends Element {
  swiper?: Swiper; // Define 'swiper' as a property of the Element
}
interface ProfileEventType {
  combinedEvents: eventType[];
  pastEvents: eventType[];
}

const ProfileEvent: React.FC<ProfileEventType> = ({ combinedEvents, pastEvents }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  const slideToCreateEvents = () => {
    const swiperContainer = document.querySelector<SwiperElement>('.swiper-container');
    if (swiperContainer?.swiper) {
      swiperContainer.swiper.slideTo(0);
      const createEventsButton = document.getElementById('create-events');
      const attendedEventsButton = document.getElementById('attended-events');
      if (createEventsButton && attendedEventsButton) {
        createEventsButton.classList.add('!border-primary-100');
        attendedEventsButton.classList.remove('!border-primary-100');
      }
    }
  };

  const slideToAttendedEvents = () => {
    const swiperContainer = document.querySelector<SwiperElement>('.swiper-container');
    if (swiperContainer?.swiper) {
      swiperContainer.swiper.slideTo(1);
      const createEventsButton = document.getElementById('create-events');
      const attendedEventsButton = document.getElementById('attended-events');
      if (createEventsButton && attendedEventsButton) {
        createEventsButton.classList.remove('!border-primary-100');
        attendedEventsButton.classList.add('!border-primary-100');
      }
    }
  };

  return (
    <div className="  w-[100%] lg:w-[906px]  relative flex flex-col  rounded-[12px] overflow-hidden ">
      {/* <div className="pagination w-full h-[3px] flex bg-[#C0C0C0] mb-[50px]">
        <div className="w-[50%] h-full " />
        <div className="w-[50%] h-full bg-primary-100 " />
      </div> */}
      <div className="swiper-container w-full relative">
        <div className="swiper-pagination w-full flex h-[60px] bg-[#F5F5F5] !relative mb-[32px] ">
          <div
            className="w-[50%] items-center justify-center flex font-bold text-base lg:text-xl cursor-pointer transition border-b-[3px] border-[#C0C0C0] !border-primary-100"
            id="create-events"
            onClick={slideToCreateEvents}
          >
            Upcoming Events
          </div>
          <div
            className="w-[50%] items-center justify-center flex font-bold text-base lg:text-xl cursor-pointer transition border-b-[3px] border-[#C0C0C0]"
            id="attended-events"
            onClick={slideToAttendedEvents}
          >
            Past Events
          </div>
        </div>
        <div className="swiper-wrapper w-full relative gap-x-2  ">
          <div className="swiper-slide createdCard" style={{ width: '100%' }}>
            {combinedEvents.length > 0 ? <Events past={false} events={combinedEvents} /> : <NoEvent type="create" />}
          </div>
          <div className="swiper-slide " id="attendedCards" style={{ width: '100%' }}>
            {pastEvents.length > 0 ? <Events past={true} events={pastEvents} /> : <NoEvent type="attend" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEvent;
