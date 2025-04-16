import React from "react";


import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SliderImage1 from "@/assets/images/main-slider/1.png"
import { SliderWrapper, SwiperItemWrapper, SwiperSlideCustom ,} from "./Main.styles";

function Main(){
    return (
        <SliderWrapper >
            <Swiper
                // spaceBetween={50}
                // slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{clickable: true, }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlideCustom>
                    <SwiperItemWrapper>
                        <div className="container flex">
                            <div className="title">
                                <h1 className="swiper-main-title">Скидка 15% на все подвесные светильники  <span> до 5 февраля </span> </h1>
                            </div>
                            <div >
                                <img src={SliderImage1} alt="Lamp" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwiperSlideCustom>
                <SwiperSlideCustom>
                    <SwiperItemWrapper>
                        <div className="container flex">
                            <div className="title">
                                <h1 className="swiper-main-title">Скидка 15% на все подвесные светильники  <span> до 5 февраля </span> </h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamp" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwiperSlideCustom>
                <SwiperSlideCustom>
                    <SwiperItemWrapper>
                        <div className="container flex">
                            <div className="title">
                                <h1 className="swiper-main-title">Скидка 15% на все подвесные светильники  <span> до 5 февраля </span> </h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamp" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwiperSlideCustom><SwiperSlideCustom>
                    <SwiperItemWrapper>
                        <div className="container flex">
                            <div className="title">
                                <h1 className="swiper-main-title">Скидка 15% на все подвесные светильники  <span> до 5 февраля </span> </h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamp" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwiperSlideCustom><SwiperSlideCustom>
                    <SwiperItemWrapper>
                        <div className="container flex">
                            <div className="title">
                                <h1 className="swiper-main-title">Скидка 15% на все подвесные светильники  <span> до 5 февраля </span> </h1>
                            </div>
                            <div>
                                <img src={SliderImage1} alt="Lamp" />
                            </div>
                        </div>
                    </SwiperItemWrapper>
                </SwiperSlideCustom>
            </Swiper>
        </SliderWrapper>
    );
}

export default Main;