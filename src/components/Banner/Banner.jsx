// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider1 from "../../../src/assets/images/27gp950-b-1-500x500-1-removebg-preview.png"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-[500px] pb-5 bg-yellow-500'>
        <div className='flex lg:flex-row md:flex-row flex-col-reverse'>
          <div className='flex-1 ml-10 md:ml-10 lg:ml-48 lg:mt-20 md:mt-20 space-y-3'>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>All knowing</p>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>intelligence</p>
             <button className='btn bg-yellow-200 border-0 font-bold'>Shop Now</button>
          </div>
          <div className='lg:mr-48'>
             <img className='' src={Slider1} alt="" />
          </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='h-[500px] pb-5 bg-blue-500'>
        <div className='flex lg:flex-row md:flex-row flex-col-reverse'>
          <div className='flex-1 ml-10 md:ml-10 lg:ml-48 lg:mt-24 md:mt-24 space-y-3'>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>Every time has</p>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>its story</p>
             <button className='btn bg-yellow-200 border-0 font-bold'>Shop Now</button>
          </div>
          
          <div className='lg:mr-48'>
             <img className='' src="https://i.ibb.co/ZmX18kD/Galaxy-Watch6-Gold-5232-removebg-preview.png" alt="" />
          </div>
        </div>
    </SwiperSlide>
            
      <SwiperSlide className='h-[800px] pb-5 bg-red-500'>
        <div className='flex lg:flex-row md:flex-row flex-col-reverse'>
          <div className='flex-1 ml-10 md:ml-10 lg:ml-48 lg:mt-24 md:mt-24 space-y-3'>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>Move with</p>
             <p className='lg:text-5xl md:text-4xl text-4xl text-white'>the music</p>
             <button className='btn bg-yellow-200 border-0 font-bold'>Shop Now</button>
          </div>
          <div className='lg:mr-48'>
             <img className='' src="https://i.ibb.co/1Zx1yxW/jabra-elite-85t-500x500-removebg-preview.png" alt="" />
          </div>
        </div>
    </SwiperSlide>
        
      </Swiper>
            
      
        
      
      
        </div>
    );
};

export default Banner;