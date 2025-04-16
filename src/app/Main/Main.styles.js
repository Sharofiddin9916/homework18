import styled from "styled-components";
import { colors } from "../../styles/theme";
import { SwiperSlide } from "swiper/react";

export const SliderWrapper = styled.div`
    margin-bottom: 100px;

    .swiper-paginaton{
        right: 100px !important;
        left: auto;
        bottom: 40px !important;
        width: fit-content;

    }
`;

export const SwiperItemWrapper = styled.div`
    background-color:  ${colors.light};
    border-radius: 50px;
    width: 100%;
    max-width: 1700xp;
    margin: 0 auto;

    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px)  {
            flex-direction: column;
            /* gap: 32px; */
            /* padding: 0 20px; */
        }
        
        .swiper-main-title{
            max-width: 500px;
            order: 2;
        }
        .title{
            @media (max-width: 768px)  {
                order: 2;
            }
        }
    }
    
`;

export const SwiperSlideCustom = styled(SwiperSlide)`
    padding: 0 20px;
`;