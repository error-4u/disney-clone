/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Styled, { styled } from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function ImgSlider() {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true

  };
  return (
    <Carousel {...settings}> 
<Wrap>

<img src="/images/slider-badging.jpg"/>
</Wrap>
<Wrap>

<img src="/images/slider-badag.jpg"/>
</Wrap>


    </Carousel>
  )




  }


export default ImgSlider

const Carousel = styled(Slider)`
margin-top: 10px;
.slick-list{
   overflow: visible;
}

`
const Wrap = styled.div`
img{
  width: 100%;
  height:100;
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
  rgba( 0 0 0 / 73%) 0px 16px 10px -10px;

 
}
`