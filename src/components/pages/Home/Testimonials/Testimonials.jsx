import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import icon from "../../../../assets/Vector.png";
import icon1 from "../../../../assets/Vector1.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  //   for salid
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperRef}
        // slidesPerView={3}
        centeredSlides={true}
        // spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="mt-10 mb-20 md:h-60 h-[400px] w-96 md:ml-0 ml-6 bg-white border p-10 md:w-[500px] ">
              <div>
                <div className="flex  flex-col-reverse md:flex-row items-center justify-between gap-20">
                  <div className="flex flex-col space-x-4 md:flex-row items-center justify-center">
                    <img
                      className="h-20 w-20 -mt-14 md:mt-0 rounded-full"
                      src={review.image}
                      alt=""
                    />
                    <div className="text-center sm:text-left">
                      <h2 className="text-xl font-semibold">{review.name}</h2>
                      <p className="font-serif ">{review.profession}</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <img className="h-10" src={icon} alt="" />
                    <img className="h-10" src={icon1} alt="" />
                  </div>
                </div>
                <p className="mt-4 text-justify">{review.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
