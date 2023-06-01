/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from "styled-components"

function Header() {
  return (
  <Nav>
    <Logo src="/images/logo.svg"/>
    <NavMenu>
        <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
        </a>
        <a>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
        </a><a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
        </a>
        
        <UserImg />


    </NavMenu>
  </Nav>


  )
}

export default Header
const Nav = styled.nav`
height:70px;
background:#090b13;
display: flex;
align-items: center;
padding: 0 36px;


`
const Logo = styled.img`
height:50px;
widht:20px;

`
const NavMenu = styled.div`
display:flex;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items: center;
    padding:0 12px;
    cursor:pointer;

a:hover{
    filter: brightnesss(70%);
}
img{
    height:20px;
}
span{
    font-size: 13px;
    letter-spacing: 1.42px;
    position:relative;

    &:after {
        content: "";
        height: 2px;
        position: absolute;
        background:white;
        left:0;
        right:0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX();

    }

  
}
 &:hover{
    span:after{
        tranform:scaleX(1);
        opacity: 1;
    }
 }   
}
`
const UserImg = styled.img`
widht:40px;
height:40px;
border-radius;50%;

`