/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import  Styled from 'styled-components'
import ImgSlider from "./ImgSlider"
function Home() {
  return (
   <Container>
      home
      </Container>
  )
}

export default Home

const Container = Styled.main`
min-height: calc(100vh - 70px);
position: relative;

&:before {
  background: url("/home/vboxuser/clone/public/images") center center cover no-repeat fixed;
  content:"";
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:  -1;
}



`