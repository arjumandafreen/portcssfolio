"use client";
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
    { path: "/images/ts.jpg", name: "TypeScript Logo"},
    { path: "/images/bootstrap.jpg", name: "Bootstrap Logo"},
    { path: "/images/js.jpg", name: "JavaScript Logo"},
    { path: "/images/tailwind.jpg", name: "Tailwind Logo"},
    { path: "/images/nextjs.jpg", name: "Next.js Logo"},
    { path: "/images/html.jpg", name: "HTML Logo"},
    { path: "/images/css.jpg", name: "CSS Logo "},
];

 const ImageSlider: React.FC = () => {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
            <SwiperSlide key={index}>
                <Image
                src={image.path}
                alt={image.name}
                width={200}
                height={200}
                className="image-slider" 
/>
            </SwiperSlide>
      ))
        }

      </Swiper>
  );
};

export default ImageSlider;
