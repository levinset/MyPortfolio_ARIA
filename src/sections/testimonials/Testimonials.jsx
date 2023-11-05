// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import testimonials from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className=" pb-0 " id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          //navigation
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={true}
          className=" h-fit pb-[9rem] pt-[1rem] "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
