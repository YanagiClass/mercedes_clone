import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header_Wrapper>
        <Header1>
          <Logo>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="11.661%"
                    x2="88.339%"
                    y1="17.891%"
                    y2="82.109%"
                  >
                    <stop offset="0%" stop-color="#FFF"></stop>
                    <stop offset="10%" stop-color="#E7E8E6"></stop>
                    <stop offset="10%" stop-color="#CDD0D0"></stop>
                    <stop offset="20%" stop-color="#B5BBBD"></stop>
                    <stop offset="20%" stop-color="#A5ACAF"></stop>
                    <stop offset="30%" stop-color="#9BA3A7"></stop>
                    <stop offset="30%" stop-color="#98A0A4"></stop>
                    <stop offset="40%" stop-color="#828A8F"></stop>
                    <stop offset="50%" stop-color="#667075"></stop>
                    <stop offset="60%" stop-color="#535C63"></stop>
                    <stop offset="70%" stop-color="#475158"></stop>
                    <stop offset="80%" stop-color="#434D54"></stop>
                    <stop offset="100%" stop-color="#475157"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="11.735%"
                    x2="88.265%"
                    y1="17.857%"
                    y2="82.143%"
                  >
                    <stop offset="0%" stop-color="#0B1F2A"></stop>
                    <stop offset="20%" stop-color="#333F47"></stop>
                    <stop offset="50%" stop-color="#777F84"></stop>
                    <stop offset="50%" stop-color="#81898D"></stop>
                    <stop offset="70%" stop-color="#B3B8B8"></stop>
                    <stop offset="80%" stop-color="#D2D5D3"></stop>
                    <stop offset="80%" stop-color="#DEE0DD"></stop>
                    <stop offset="100%" stop-color="#FBFBFB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="67.145%"
                    x2="32.926%"
                    y1="97.042%"
                    y2="2.98%"
                  >
                    <stop offset="0%" stop-color="#E1E3E1"></stop>
                    <stop offset="10%" stop-color="#C1C5C4"></stop>
                    <stop offset="30%" stop-color="#9BA1A2"></stop>
                    <stop offset="50%" stop-color="#7D8487"></stop>
                    <stop
                      offset="70%"
                      stop-color="#687074"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#5B6469"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="#576065"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="25%"
                    x2="75%"
                    y1="6.703%"
                    y2="93.297%"
                  >
                    <stop offset="0%" stop-color="#E1E3E1"></stop>
                    <stop offset="10%" stop-color="#C1C5C4"></stop>
                    <stop offset="30%" stop-color="#9BA1A2"></stop>
                    <stop offset="50%" stop-color="#7D8487"></stop>
                    <stop
                      offset="70%"
                      stop-color="#687074"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#5B6469"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="#576065"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="50.41%"
                    x2="43.443%"
                    y1="49.319%"
                    y2="55.931%"
                  >
                    <stop offset="0%" stop-color="#27343C"></stop>
                    <stop
                      offset="100%"
                      stop-color="#00111E"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="f"
                    x1="52.917%"
                    x2="51.315%"
                    y1="91.144%"
                    y2="74.539%"
                  >
                    <stop offset="10%" stop-color="#02131F"></stop>
                    <stop
                      offset="90%"
                      stop-color="#02131F"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="g"
                    x1="100.407%"
                    x2="83.333%"
                    y1="42.264%"
                    y2="45.063%"
                  >
                    <stop offset="20%" stop-color="#02131F"></stop>
                    <stop
                      offset="90%"
                      stop-color="#02131F"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="h"
                    x1="53.165%"
                    x2="50.633%"
                    y1="54.992%"
                    y2="51.331%"
                  >
                    <stop offset="0%" stop-color="#02131F"></stop>
                    <stop offset="10%" stop-color="#02131F"></stop>
                    <stop
                      offset="100%"
                      stop-color="#02131F"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="i"
                    x1="50.819%"
                    x2="48.756%"
                    y1="48.512%"
                    y2="49.95%"
                  >
                    <stop offset="30%" stop-color="#02131F"></stop>
                    <stop offset="30%" stop-color="#02131F"></stop>
                    <stop
                      offset="80%"
                      stop-color="#02131F"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="j"
                    x1="50.88%"
                    x2="49.484%"
                    y1="48.153%"
                    y2="49.231%"
                  >
                    <stop offset="40%" stop-color="#27343C"></stop>
                    <stop
                      offset="100%"
                      stop-color="#3B474E"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="k"
                    x1="33.18%"
                    x2="71.489%"
                    y1="32.01%"
                    y2="71.96%"
                  >
                    <stop
                      offset="0%"
                      stop-color="#24303A"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0%"
                      stop-color="#25323B"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="10%" stop-color="#27343C"></stop>
                  </linearGradient>
                  <linearGradient
                    id="l"
                    x1="55%"
                    x2="55%"
                    y1="102.109%"
                    y2=".874%"
                  >
                    <stop offset="30%" stop-color="#A5ABAF"></stop>
                    <stop
                      offset="100%"
                      stop-color="#A5ABAF"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="m"
                    x1="50.16%"
                    x2="50.16%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#DEE0DD"></stop>
                    <stop offset="0%" stop-color="#C5C9C7"></stop>
                    <stop offset="0%" stop-color="#9EA4A5"></stop>
                    <stop offset="0%" stop-color="#82898C"></stop>
                    <stop offset="0%" stop-color="#71797D"></stop>
                    <stop offset="0%" stop-color="#6B7378"></stop>
                    <stop offset="20%" stop-color="#333F47"></stop>
                    <stop offset="50%" stop-color="#27343C"></stop>
                    <stop offset="80%" stop-color="#333F47"></stop>
                    <stop offset="100%" stop-color="#434D54"></stop>
                  </linearGradient>
                  <linearGradient id="n" x1="45%" x2="45%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#DEE0DD"></stop>
                    <stop offset="0%" stop-color="#C5C9C7"></stop>
                    <stop offset="0%" stop-color="#9EA4A5"></stop>
                    <stop offset="0%" stop-color="#82898C"></stop>
                    <stop offset="0%" stop-color="#71797D"></stop>
                    <stop offset="0%" stop-color="#6B7378"></stop>
                    <stop offset="20%" stop-color="#333F47"></stop>
                    <stop offset="50%" stop-color="#27343C"></stop>
                    <stop offset="80%" stop-color="#333F47"></stop>
                    <stop offset="100%" stop-color="#434D54"></stop>
                  </linearGradient>
                  <linearGradient
                    id="o"
                    x1="64.364%"
                    x2="43.066%"
                    y1="12.225%"
                    y2="60.636%"
                  >
                    <stop offset="70%" stop-color="#27343C"></stop>
                    <stop offset="70%" stop-color="#2B373F"></stop>
                    <stop offset="70%" stop-color="#36424A"></stop>
                    <stop offset="70%" stop-color="#49545B"></stop>
                    <stop
                      offset="80%"
                      stop-color="#646D73"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#868D92"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#B0B5B8"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#E1E3E4"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="80%"
                      stop-color="#FFF"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <g fill="none">
                  <path
                    fill="url(#a)"
                    d="M63.3,32 C63.3,49.3 49.3,63.3 32,63.3 C14.7,63.3 0.7,49.3 0.7,32 C0.7,14.7 14.7,0.7 32,0.7 C49.3,0.7 63.3,14.7 63.3,32 Z M32,2.6 C15.7,2.6 2.6,15.7 2.6,32 C2.6,48.3 15.8,61.4 32,61.4 C48.3,61.4 61.4,48.2 61.4,32 C61.4,15.7 48.3,2.6 32,2.6 Z"
                  ></path>
                  <path
                    fill="url(#b)"
                    d="M32,2.6 C15.7,2.6 2.6,15.7 2.6,32 C2.6,48.3 15.8,61.4 32,61.4 C48.3,61.4 61.4,48.2 61.4,32 C61.4,15.7 48.3,2.6 32,2.6 Z M32,59.5 C16.8,59.5 4.5,47.2 4.5,32 C4.5,16.8 16.8,4.5 32,4.5 C47.2,4.5 59.5,16.8 59.5,32 C59.5,47.2 47.2,59.5 32,59.5 Z"
                  ></path>
                  <path
                    fill="url(#c)"
                    d="M32,63.3 C49.3,63.3 63.3,49.3 63.3,32 C63.3,14.7 49.3,0.7 32,0.7 C14.7,0.7 0.7,14.7 0.7,32 C0.7,49.3 14.7,63.3 32,63.3 L32,63.3 Z M32,0 C49.6,0 64,14.4 64,32 C64,49.6 49.6,64 32,64 C14.4,64 0,49.6 0,32 C0,14.4 14.4,0 32,0 L32,0 Z"
                    opacity=".4"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M2.2,32.1 C2.2,15.7 15.5,2.2 32,2.2 L32,2.2 C48.5,2.2 61.8,15.6 61.8,32.1 L61.8,32.1 C61.8,48.5 48.5,61.8 32,61.8 L32,61.8 C15.5,61.8 2.2,48.5 2.2,32.1 L2.2,32.1 Z M11.5,11.5 C6.2,16.8 2.9,24.1 2.9,32.1 L2.9,32.1 C2.9,40.1 6.2,47.4 11.4,52.6 L11.4,52.6 C16.7,57.8 24,61.1 32,61.1 L32,61.1 C40,61.1 47.3,57.9 52.5,52.6 L52.5,52.6 C57.8,47.4 61,40.1 61,32.1 L61,32.1 C61,24.1 57.7,16.8 52.5,11.5 L52.5,11.5 C47.3,6.2 40,2.9 32,2.9 L32,2.9 C24,2.9 16.7,6.2 11.5,11.5 L11.5,11.5 Z"
                  ></path>
                  <path
                    fill="url(#d)"
                    d="M32,59.6 C24.6,59.6 17.7,56.7 12.5,51.5 C7.3,46.3 4.4,39.4 4.4,32 C4.4,24.6 7.3,17.7 12.5,12.5 C17.7,7.3 24.6,4.4 32,4.4 C39.4,4.4 46.3,7.3 51.5,12.5 C56.7,17.7 59.6,24.6 59.6,32 C59.6,39.4 56.7,46.3 51.5,51.5 C46.3,56.7 39.4,59.6 32,59.6 L32,59.6 Z M32,58.8 C39.1,58.8 45.9,56 50.9,51 C56,45.9 58.7,39.2 58.7,32.1 C58.7,25 55.9,18.2 50.9,13.2 C45.8,8.1 39.1,5.4 32,5.4 C24.9,5.4 18.1,8.2 13.1,13.2 C8,18.1 5.2,24.9 5.2,32 C5.2,39.1 8,45.9 13,50.9 C18.1,56 24.9,58.8 32,58.8 L32,58.8 Z"
                    opacity=".4"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M56.3,45 C55.8,44.6 36.5,29.3 36.5,29.3 L32,3.6 C31.7,3.7 31.3,4 31.1,4.4 L27.9,29.4 L8,44.7 C8,44.7 7.6,45.2 7.4,45.5 C7.3,45.7 7.3,46 7.3,46.3 C7.3,46.3 7.3,46.3 7.3,46.3 L31.9,36.2 L56.5,46.3 C56.5,46.3 56.5,46.3 56.5,46.3 C56.7,45.8 56.5,45.3 56.3,45 Z"
                  ></path>
                  <path
                    fill="#565F64"
                    d="M32.2,32.8 L32,37.4 L54.6,46.5 C55.4,46.9 56,46.7 56.6,46.3 L32.5,32.7 C32.4,32.6 32.2,32.7 32.2,32.8 Z"
                  ></path>
                  <path
                    fill="url(#e)"
                    d="M32.2,32.8 C32.2,32.8 33.5,35.1 35,36.7 C37.1,39 39.9,40.6 39.9,40.6 L54.6,46.5 C55.4,46.9 56,46.7 56.6,46.3 L32.5,32.7 C32.4,32.6 32.2,32.7 32.2,32.8 Z"
                  ></path>
                  <path
                    fill="#A4AAAE"
                    fill-opacity=".6"
                    d="M56.5,45.4 C56.5,45.3 56.4,45.2 56.3,45 L35.7,29.9 L32.9,31.7 C32.9,31.7 33.1,31.8 33.2,31.7 C33.5,31.6 34.1,31.5 34.7,31.7 C35.2,31.9 56.5,45.5 56.5,45.5 C56.5,45.5 56.5,45.5 56.5,45.4 Z"
                  ></path>
                  <path
                    fill="#333E46"
                    d="M55.8,44.5 L36.6,29.3 L36.6,29.3 L35.7,29.9 L56.3,45.1 C56.2,44.9 56,44.7 55.8,44.5 Z"
                  ></path>
                  <path
                    fill="#565F64"
                    d="M32.5,31.3 C32.4,31.4 32.4,31.4 32.4,31.4 C32.4,31.4 32.4,31.6 32.6,31.5 C32.7,31.4 35.6,29.9 36.6,29.3 L33.1,5.3 C33,4.4 32.6,4 31.9,3.7 L32.3,31.5 L32.5,31.3 Z"
                  ></path>
                  <path
                    fill="#A4AAAE"
                    fill-opacity=".6"
                    d="M30.8 5.3 30.8 6.6 28.6 28.7C28.6 29 28.7 29.3 29 29.5L30.3 30.5 31.2 6.1 31.3 4.2C31 4.4 30.9 4.8 30.8 5.3ZM29.6 30.9 28.4 29.9 8.1 44.6C8.1 44.6 7.5 45 7.4 45.4L7.4 45.4C7.4 45.4 7.4 45.4 7.4 45.4L7.4 45.4 8.1 45 8.1 45 29.4 31.6C29.8 31.4 29.9 31.2 29.6 30.9Z"
                  ></path>
                  <path
                    fill="#565F64"
                    d="M31.7,32.8 C31.7,32.7 31.6,32.6 31.5,32.7 L7.3,46.4 C7.9,46.8 8.5,46.9 9.3,46.6 L31.9,37.5 L31.7,32.8 Z"
                  ></path>
                  <path
                    fill="url(#f)"
                    d="M32.4,31.4 L32.5,31.3 C32.4,31.4 32.4,31.4 32.4,31.4 L32.4,31.4 C32.4,31.4 32.4,31.5 32.5,31.5 C32.5,31.5 32.6,31.5 32.6,31.5 C32.7,31.4 35.6,29.9 36.6,29.3 L36.2,26.4 L36.2,26.4 L33.1,5.3 C33.1,4.9 33,4.6 32.8,4.4 C32.8,4.4 34.3,24.6 34.3,26.8 C34.3,29.7 32.4,31.4 32.4,31.4 Z"
                  ></path>
                  <path
                    fill="url(#g)"
                    fill-opacity=".8"
                    d="M31.7,32.8 C31.7,32.7 31.6,32.6 31.5,32.7 L7.3,46.4 C7.9,46.8 8.5,46.9 9.3,46.6 L31.9,37.5 L31.7,32.8 Z"
                  ></path>
                  <path
                    fill="url(#h)"
                    d="M9.3,46.5 L31.9,37.4 L31.7,33 C31.3,34.2 30.6,35.5 28.7,36.5 C28.7,36.5 28.7,36.5 28.7,36.5 C27.3,37.3 13.9,43.9 9.1,46.2 C8.8,46.4 8.4,46.5 8.2,46.6 C8.6,46.8 8.9,46.7 9.3,46.5 Z"
                    opacity=".8"
                  ></path>
                  <path
                    fill="url(#i)"
                    d="M32.5,31.3 C32.4,31.4 32.4,31.4 32.4,31.4 C32.4,31.4 32.4,31.6 32.6,31.5 C32.7,31.4 35.6,29.9 36.6,29.3 L33.1,5.3 C33,4.4 32.6,4 31.9,3.7 L32.3,31.5 L32.5,31.3 Z"
                  ></path>
                  <path
                    fill="url(#j)"
                    d="M32.5,31.3 C32.4,31.4 32.4,31.4 32.4,31.4 C32.4,31.4 32.4,31.6 32.6,31.5 C32.7,31.4 35.6,29.9 36.6,29.3 L33.1,5.3 C33,4.4 32.6,4 31.9,3.7 L32.3,31.5 L32.5,31.3 Z"
                  ></path>
                  <path
                    fill="url(#k)"
                    d="M5.1,44.4 C4.4,42.8 0.4,35 4.8,20 L3.1,20 C2.2,23 1.5,24.8 1.1,27.5 C1.1,27.5 0.9,28.5 0.8,29.6 C0.7,30.7 0.7,31.3 0.7,32 C0.7,38 2.2,41.5 2.2,41.5 C3.8,46.5 6.6,51 10.4,54.4 C13.7,57.3 18.8,59.5 23,60.3 C22.3,60.2 10.3,55.1 5.1,44.4 Z"
                  ></path>
                  <path
                    fill="url(#l)"
                    d="M32.4,32.6 L31.5,32.6 L31.5,32.6 C31.6,32.6 31.7,32.6 31.7,32.7 L31.9,37.3 L31.9,37.3 L32,37.3 L32.2,32.7 C32.2,32.6 32.3,32.5 32.4,32.6 L32.4,32.6 L32.4,32.6 Z"
                  ></path>
                  <path
                    fill="url(#m)"
                    d="M42,2.3 C52.5,6.3 62.4,17.3 62.4,31.2 C62.4,48 49,61.7 32,61.7 L32,63.3 C49,63.3 63.3,49.3 63.3,32 C63.3,18.2 54.5,6.6 42,2.3 Z"
                  ></path>
                  <path
                    fill="url(#n)"
                    d="M32.3,0.7 C32.2,0.7 32.1,0.7 32,0.7 C32.1,0.7 32.2,0.7 32.3,0.7 C32.3,0.7 32.3,0.7 32.3,0.7 Z"
                  ></path>
                  <path
                    fill="url(#o)"
                    d="M58.8,20.2 C51.8,4.1 36,3.2 35.1,3.1 C35.1,3.1 35.1,3.1 35,3.1 L35,3.1 C47.1,5.3 54.8,13.2 57.5,21.5 C57.5,21.5 57.5,21.6 57.5,21.6 C58.7,24.8 59.3,28.2 59.4,31.9 C59.5,35.4 58.7,39.3 57.2,42.9 C57.1,43.4 57,44 56.9,44 L58.5,44 C63.3,35 61.2,25.9 58.8,20.2 Z"
                  ></path>
                  <path
                    fill="#FBFBFB"
                    d="M2.2,32.1 C2.2,15.7 15.5,2.2 32,2.2 L32,2.2 C48.5,2.2 61.8,15.6 61.8,32.1 L61.8,32.1 C61.8,48.5 48.5,61.8 32,61.8 L32,61.8 C15.5,61.8 2.2,48.5 2.2,32.1 L2.2,32.1 Z M11.5,11.5 C6.2,16.8 2.9,24.1 2.9,32.1 L2.9,32.1 C2.9,40.1 6.2,47.4 11.4,52.6 L11.4,52.6 C16.7,57.8 24,61.1 32,61.1 L32,61.1 C40,61.1 47.3,57.9 52.5,52.6 L52.5,52.6 C57.8,47.4 61,40.1 61,32.1 L61,32.1 C61,24.1 57.7,16.8 52.5,11.5 L52.5,11.5 C47.3,6.2 40,2.9 32,2.9 L32,2.9 C24,2.9 16.7,6.2 11.5,11.5 L11.5,11.5 Z"
                  ></path>
                  <path
                    fill="#333F47"
                    d="M7.9,44.8 L7.9,44.8 L28.3,30.1 C29.4,30.7 31.2,31.5 31.4,31.5 C31.6,31.6 31.6,31.4 31.6,31.4 L29.1,29.3 C28.8,29.1 28.7,28.8 28.7,28.5 L31.1,4.4 C31,4.5 31,4.7 30.9,4.8 C30.8,5 30.8,5.1 30.8,5.3 L27.3,29.4 L8.1,44.5 C8,44.6 7.9,44.7 7.9,44.8 Z"
                  ></path>
                </g>
              </svg>
            </div>
            <div style={{ alignSelf: "flex-end", marginLeft: 64 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="13"
                viewBox="0 0 111 13"
              >
                <g fill="#FFF" transform="translate(.1 .3)">
                  <rect width="4.1" height="1" x="70.8" y="7.1"></rect>
                  <path d="M2.5,1.3 L2.1,10.8 L2.1,11 C2.1,11.8 2.3,12 3.6,12.1 L3.6,12.5 C2.7,12.4 2.3,12.4 1.8,12.4 C1.3,12.4 0.9,12.4 0,12.5 L0,12.1 C1.3,12 1.5,11.9 1.5,10.9 L1.9,1.9 L1.9,1.8 C1.9,1 1.6,0.8 0.4,0.7 L0.4,0.2 C1.1,0.3 1.4,0.3 1.9,0.3 C2.6,0.3 2.9,0.3 3.6,0.2 L7,9.5 L10.5,0.2 C11.3,0.3 11.7,0.3 12.3,0.3 C12.8,0.3 13.1,0.3 13.8,0.2 L13.8,0.7 C12.6,0.8 12.3,1 12.3,1.8 L12.3,1.9 L12.5,10.9 C12.5,11.9 12.7,12 14,12.1 L14,12.5 C12.8,12.4 12.4,12.4 11.7,12.4 C11,12.4 10.6,12.4 9.4,12.5 L9.4,12.1 C10.6,12 10.9,11.8 10.9,11 L10.9,10.9 L10.7,1.4 L7.6,9.5 L7.4,10.1 L7.1,10.8 L6.9,11.5 L6.7,12.1 L6.4,12.1 L6.2,11.5 L5.9,10.8 L5.7,10.1 L5.5,9.4 L2.5,1.3 Z M18.7,12.1 C17,12.1 16.3,10.8 16.3,7.9 L21.8,7.9 C21.8,5.1 20.6,3.6 18.4,3.6 C16.2,3.6 14.8,5.4 14.8,8.2 C14.8,11 16.2,12.7 18.5,12.7 C20.3,12.7 21.5,11.6 21.7,9.7 L21,9.7 C20.8,11.2 20,12.1 18.7,12.1 M16.3,7.2 C16.5,5.1 17.2,4 18.4,4 C19.6,4 20.2,5 20.3,7.2 L16.3,7.2 Z M22.8,4.2 L22.8,3.9 C23.8,3.8 24.5,3.7 25.2,3.5 C25.3,4.2 25.3,4.5 25.4,5 L25.4,5.2 C25.8,4.2 26.6,3.5 27.5,3.5 C28.4,3.5 29.1,4.1 29.1,5 C29.1,5.5 28.8,5.9 28.3,5.9 C27.9,5.9 27.5,5.6 27.5,5.3 C27.5,5.3 27.5,5.2 27.5,5.1 L27.5,4.9 L27.5,4.8 C27.5,4.5 27.3,4.4 26.9,4.4 C25.9,4.4 25.3,5.6 25.3,7.4 L25.3,11.2 C25.3,12 25.5,12.1 26.6,12.2 L26.6,12.6 C25.6,12.5 25.2,12.5 24.6,12.5 C23.9,12.5 23.6,12.5 22.5,12.6 L22.5,12.2 C23.6,12.1 23.8,12 23.8,11.2 L23.8,5.4 L23.8,5.1 C23.8,4.3 23.7,4.2 22.7,4.2 L22.8,4.2 L22.8,4.2 Z M36.2,3.4 L36.2,6.4 L35.8,6.4 C35.5,4.8 34.8,4 33.7,4 C32.3,4 31.5,5.5 31.5,8.1 C31.5,10.7 32.2,12 33.6,12 C34.7,12 35.4,11.2 35.6,9.6 L36.4,9.6 C36.2,11.6 35.1,12.6 33.5,12.6 C31.4,12.6 29.9,10.8 29.9,8.1 C29.9,5.4 31.4,3.5 33.5,3.5 C34.3,3.5 34.8,3.7 35.4,4.3 L35.9,3.4 L36.2,3.4 L36.2,3.4 Z M41.6,12.1 C39.9,12.1 39.2,10.8 39.2,7.9 L44.7,7.9 C44.7,5.1 43.5,3.6 41.3,3.6 C39.1,3.6 37.7,5.4 37.7,8.2 C37.7,11 39.1,12.7 41.4,12.7 C43.2,12.7 44.4,11.6 44.6,9.7 L43.9,9.7 C43.7,11.2 42.9,12.1 41.6,12.1 M39.2,7.2 C39.4,5.1 40.1,4 41.3,4 C42.5,4 43.1,5 43.2,7.2 L39.2,7.2 Z M53.2,10.6 L53.2,0 C52.3,0.2 51.5,0.4 50.4,0.5 L50.4,0.8 C51.6,0.8 51.7,0.9 51.7,1.9 L51.7,5.1 C51,4 50.5,3.7 49.5,3.7 C47.5,3.7 46.2,5.6 46.2,8.2 C46.2,10.8 47.6,12.7 49.6,12.7 C50.6,12.7 51.4,12.2 51.9,11.2 C52,11.9 52,12 52.2,12.7 C53,12.5 53.3,12.4 54.3,12.3 L54.6,12.3 L54.6,12 C53.3,11.8 53.2,11.7 53.2,10.6 M49.7,12.2 C48.4,12.2 47.7,10.8 47.7,8.2 C47.7,5.5 48.3,4.2 49.7,4.2 C51.1,4.2 51.8,5.6 51.8,8.3 C51.7,10.8 51,12.2 49.7,12.2 M59.1,12.1 C57.4,12.1 56.7,10.8 56.7,7.9 L62.2,7.9 C62.2,5.1 61,3.6 58.8,3.6 C56.6,3.6 55.2,5.4 55.2,8.2 C55.2,11 56.6,12.7 58.9,12.7 C60.7,12.7 61.9,11.6 62.1,9.7 L61.4,9.7 C61.2,11.2 60.4,12.1 59.1,12.1 M56.7,7.2 C56.9,5.1 57.6,4 58.8,4 C60,4 60.6,5 60.7,7.2 L56.7,7.2 Z M63.7,12.7 L63.7,9.6 L64.1,9.6 C64.4,11.3 65.2,12.1 66.5,12.1 C67.6,12.1 68.4,11.4 68.4,10.4 C68.4,9.8 68.1,9.4 67.2,8.9 L66.5,8.6 L65.6,8.3 C64.3,7.7 63.8,7.2 63.8,6.1 C63.8,4.6 64.9,3.7 66.6,3.7 C67.3,3.7 67.8,3.9 68.5,4.3 L68.8,3.5 L69.1,3.5 L69.1,6.3 L68.7,6.3 C68.5,4.8 67.9,4.1 66.8,4.1 C65.8,4.1 65.1,4.8 65.1,5.6 C65.1,6.3 65.4,6.6 67,7.3 L67.8,7.6 C69.2,8.2 69.7,8.8 69.7,9.9 C69.7,11.4 68.5,12.5 66.7,12.5 C65.9,12.5 65.2,12.3 64.5,11.7 L64.1,12.5 L63.7,12.5 L63.7,12.7 L63.7,12.7 Z M83.5,3.2 C83.5,2.2 83.1,1.4 82.4,0.9 C81.8,0.4 81.1,0.2 79.9,0.2 L75.1,0.2 L75.1,0.7 C76.4,0.8 76.6,0.9 76.6,1.9 L76.6,10.8 C76.6,11.8 76.5,11.9 75.1,12 L75.1,12.4 L79.7,12.4 C81.1,12.4 81.8,12.2 82.6,11.8 C83.5,11.2 84.1,10.1 84.1,8.9 C84.1,7.9 83.7,7 83,6.5 C82.6,6.2 82.2,6 81.5,5.9 C82.8,5.4 83.5,4.5 83.5,3.2 M78.1,0.8 L79.7,0.8 C81.2,0.8 81.9,1.6 81.9,3.3 C81.9,4.1 81.7,4.8 81.3,5.2 C80.9,5.7 80.4,5.8 79.4,5.8 L78.1,5.8 L78.1,0.8 Z M79.9,6.3 C80.9,6.3 81.4,6.5 81.8,6.9 C82.2,7.3 82.5,8.1 82.5,9 C82.5,10.8 81.6,11.9 79.9,11.9 L79.2,11.9 C78.2,11.9 78.1,11.8 78.1,10.9 L78.1,6.3 L79.9,6.3 Z M89.5,12.1 C87.8,12.1 87.1,10.8 87.1,7.9 L92.6,7.9 C92.6,5.1 91.4,3.6 89.2,3.6 C87,3.6 85.6,5.4 85.6,8.2 C85.6,11 87,12.7 89.3,12.7 C91.1,12.7 92.3,11.6 92.5,9.7 L91.8,9.7 C91.6,11.2 90.8,12.1 89.5,12.1 M87.1,7.2 C87.3,5.1 88,4 89.2,4 C90.4,4 91,5 91.1,7.2 L87.1,7.2 Z M93.5,4.3 L93.5,4 C94.6,3.9 95.2,3.7 95.9,3.4 C96,3.8 96,4.3 96.1,5 C96.8,4 97.5,3.6 98.6,3.6 C99.7,3.6 100.7,4.2 101,5.1 C101.2,5.5 101.3,6.1 101.3,6.8 L101.3,11.2 C101.3,12 101.5,12.1 102.6,12.2 L102.6,12.6 C101.6,12.5 101.3,12.5 100.6,12.5 C99.9,12.5 99.6,12.5 98.6,12.6 L98.6,12.2 C99.6,12.2 99.8,12 99.8,11.2 L99.8,6.7 C99.8,5.1 99.3,4.5 98.1,4.5 C96.9,4.5 96.2,5.3 96.2,6.8 L96.2,11.2 C96.2,11.9 96.4,12.1 97.4,12.2 L97.4,12.6 C96.4,12.5 96.1,12.5 95.4,12.5 C94.8,12.5 94.4,12.5 93.4,12.6 L93.4,12.2 C94.5,12.1 94.7,12 94.7,11.2 L94.7,5.5 L94.7,5.2 C94.7,4.4 94.6,4.3 93.7,4.3 C93.7,4.3 93.6,4.3 93.5,4.3 M103.3,12.5 L108.3,4.3 L106,4.3 C104.8,4.3 104.5,4.6 103.9,6.2 L103.5,6.2 L103.9,3.8 L110.2,3.8 L105.2,12 L107.3,12 C108.5,12 109.1,11.5 109.6,9.8 L110,9.8 L109.5,12.4 L103.3,12.5 C103.3,12.4 103.3,12.5 103.3,12.5 Z"></path>
                </g>
              </svg>
            </div>
          </Logo>
          <Logo2>
            <div>
              <p style={{ color: "rgb(187,187,187" }}>
                ©2022 메르세데스-벤츠 코리아㈜
              </p>
            </div>
          </Logo2>
        </Header1>
        <Header2>
          <Menu1>모델</Menu1>
          <Menu2>프로모션</Menu2>
          <Menu3>서비스 및 차량 관리</Menu3>
          <Menu4>디자털연동서비스</Menu4>
          <Menu5>메르세데스-벤츠 스토어</Menu5>
          <Menu6>메르세데스 월드</Menu6>
        </Header2>
      </Header_Wrapper>
      <Banner>
        <FontWrapper>
          <Font>This is for New Dimensions.</Font>
          <Font></Font>
          <Font>The new EQB</Font>
        </FontWrapper>
        <Button_Wrapper></Button_Wrapper>
      </Banner>
    </Container>
  );
}
const Container = styled.div`
  flex: 1;
`;
const Header1 = styled.div`
  height: 96px;
  width: 100%;
  border-bottom: solid rgb(38, 38, 38);
  display: flex;
  justify-content: space-between;
`;
const Header_Wrapper = styled.div`
  background-color: black;
  height: 161px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 10%;
`;
const Logo2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10%;
`;
const Header2 = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  margin-left: 10%;
  align-items: center;
`;
const Menu = styled.div`
  height: 64px;
  color: rgb(187, 187, 187);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  &:hover {
    color: white;
`;
const Menu1 = styled(Menu)`
  width: 96px;

  }
`;
const Menu2 = styled(Menu)`
  width: 96px;
`;
const Menu3 = styled(Menu)`
  width: 170px;
`;
const Menu4 = styled(Menu)`
  width: 157px;
`;
const Menu5 = styled(Menu)`
  width: 200px;
`;
const Menu6 = styled(Menu)`
  width: 141px;
`;
const Banner = styled.div`
  background-color: black;
  height: 1000px;
  width: 100%;
  background: linear-gradient(
      to left,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    ),
    url("https://www.mercedes-benz.co.kr/content/south-korea/ko/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3315015892583.jpg/EQB_KV_2560.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  background-position: center;
  font-family: "MBCorpo Title", "DaimlerCAC-Regular", "DaimlerCACArab-Regular",
    serif;
`;
const Font = styled.h1`
  font-size: 64px;
  color: white;
`;
const FontWrapper = styled.div`
  margin-left: 10%;
`;
const Button_Wrapper = styled.div`
  display: flex;
`;
const Button = styled.div`
  border: solid white;
`;
export default App;
