<template>
<div>
<small>Enter message (optional) and click button "Send"</small>
<div class="wrapper centered">
  <article class="letter">
    <div class="side">
      <h1>Contact us</h1>
      <p>
        <textarea placeholder="message"></textarea>
        <textarea placeholder="Your message"></textarea>
      </p>
    </div>
    <div class="side">
      <p>
        <input type="text" placeholder="Your name" >
      </p>
      <p>
        <input type="email" placeholder="Your email" >
      </p>
      <p>
        <button id="sendLetter">Send</button>
      </p>
    </div>
  </article>
  
  <div class="envelope front"></div>
  <div class="envelope back"></div>
  
</div>
<p class="result-message centered">Thank you for your message</p>
<button @click="toggleClassSent()"> Send </button>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4032 3024"><defs><style>.cls-1,.cls-10,.cls-11,.cls-13,.cls-17{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#bccdd8;}.cls-4,.cls-8{fill:#9eadb8;}.cls-5{fill:#e0e7ed;}.cls-6{fill:#8a9caa;}.cls-7{fill:#96a7b2;}.cls-8{opacity:0.34;}.cls-9{fill:#2c3a4a;}.cls-11,.cls-12,.cls-13,.cls-9{stroke:#000;}.cls-10,.cls-11,.cls-12,.cls-14,.cls-15,.cls-16,.cls-9{stroke-miterlimit:10;}.cls-11,.cls-12,.cls-9{stroke-width:20px;}.cls-10{stroke:#b3f1ff;stroke-width:15px;}.cls-12{fill:#fcb4cb;}.cls-13,.cls-17{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:36px;}.cls-14,.cls-15,.cls-16{fill:#b3f1ff;stroke:#2dc6ff;stroke-width:18px;}.cls-15{opacity:0.66;}.cls-16{opacity:0.5;}.cls-17{stroke:#100a2e;stroke-width:37px;}</style><clipPath id="clip-path"><path class="cls-1" d="M2836.53,1254.14a130.24,130.24,0,0,0-17.71-66c-4-6.84-14.43-3.91-14.4,4v.3c0,49-36.74,88.71-82.06,88.71s-82.06-39.72-82.06-88.71v-.3c0-7.94-10.39-10.87-14.41-4a130.24,130.24,0,0,0-17.7,66c0,48.25,25.61,90,62.93,110.32l-20.12-2.32s-54,127.29-185.14,119.57c-79.68-4.68-145.62-3.28-201.52,11.89,5.13-62.91,8.38-106.2,8.38-111.5L2224.15,1319s34-208.84,19.43-417.68-170-286.55-349.69-286.55c-18.72,0-36.48.27-53.43.9L1848,413.8a80.37,80.37,0,1,0-59.35-2.21l-15.75,209.25c-64.76,8.22-117.33,26.22-168.12,62.63-32.93,23.61-65.12,55-99.41,96.39-114.66,138.55-36.64,582.55-34.06,597l-4.79.36-82.57,72.86s8.61,60.78,20.93,147.33c-47.31-8.5-135.7-15.84-208,27-104.15,61.71-119.57,138.86-119.57,138.86l2.49,1.83a114.6,114.6,0,0,0-33.38-3.81c-59.54,2-107.82,50.29-109.8,109.83,0,.32,0,.63,0,.95a4,4,0,0,0,7.52,2,92.86,92.86,0,0,1,80.79-48.36c51.19-.41,93.46,41.35,93.64,92.55a92.37,92.37,0,0,1-12.7,47.26,4,4,0,0,0,5.61,5.39,113.81,113.81,0,0,0,38.48-150.83c-1.09-2-2.25-3.92-3.46-5.82l4.11,3s6.12-77.6,115.72-115.72c57-19.81,118.13-4.65,154.65,8.75,24.62,172.56,54.32,379.53,65,448.87,19.43,126.27,274.29,142.26,436.08,117.1,173.57-27,268.16-73.39,287.58-209.38,1.13-7.86,2.33-17,3.6-27.35.43-.64.85-1.24,1.26-1.79l-1.06.17c11.23-91.55,27.64-270.2,40.36-418,68.75-39.48,155-41.76,270-41.76,192.86,0,227.58-204.43,227.58-204.43l-.36,0C2800.16,1360,2836.53,1311.64,2836.53,1254.14Z"/></clipPath></defs><title>bot</title><g id="Layer_3" data-name="Layer 3"><g class="cls-2"><rect class="cls-3" x="348.36" y="-479.64" width="3291.43" height="3538.29"/><rect class="cls-4" x="818.29" y="1269.57" width="590.14" height="810" transform="translate(-229.48 177.73) rotate(-8.28)"/><circle class="cls-5" cx="1794.43" cy="320.29" r="23.14"/><rect class="cls-6" x="1291.14" y="1517.71" width="113.14" height="288" rx="26.12" transform="translate(-269.46 260.87) rotate(-10.06)"/><path class="cls-4" d="M1989.57,1412.29l135-34.72,113.79-61.71,21.21-310.5s-32.51,178.07-82.93,254.57C2120.71,1344.79,2074.43,1375.64,1989.57,1412.29Z"/><polygon class="cls-4" points="1854.57 1520.29 1911.14 2183.71 1954.86 2179.86 1889.29 1516.43 1854.57 1520.29"/></g><path class="cls-5" d="M1520.93,858.79c5.87,24.21,104.14-13.5,169.71-48.22,74.26-39.31,104.56-71,106.18-106.93,1.61-35.66-58-47.35-148.61,2.79C1545.43,763.29,1515.91,838.12,1520.93,858.79Z"/><path class="cls-7" d="M2620.21,1412.29s23.15,73.28,108,46.28l34.72-69.43,11.57-19.28-46.29,7.71-57.09-13.11-37.41-19.67Z"/><path class="cls-7" d="M1962.57,1676.5s-4.49,23,1.93,38.57c13.5,32.79,54,37.19,71.36,17.36,13.5-15.43,13.5-36.64,11.57-55.93l-32.79,34.71Z"/><path class="cls-7" d="M1992.43,1973.5s13.53,52.07,50.18,46.29c30.12-4.76,32.75-28.93,30.82-48.22l-28.93,25.07Z"/><ellipse class="cls-5" cx="1997.29" cy="1665.25" rx="10.61" ry="6.75" transform="translate(-515.2 994.7) rotate(-24.88)"/><ellipse class="cls-5" cx="2027.29" cy="1955.25" rx="10.61" ry="6.75" transform="translate(-634.41 1034.22) rotate(-24.88)"/><path class="cls-5" d="M2232.57,1548.57c0,15.43,51-4.71,107.14-15,45.53-8.34,91.72,3.43,94.29-14.57s-75-18.86-116.14-8.57S2232.57,1530.57,2232.57,1548.57Z"/><path class="cls-4" d="M2161.21,1639.86l32.79,25.07,52.07-32.79,75.22-28.93s77.14-13.5,84.85-13.5h82.93s-160.07-11.57-248.78,5.79-88.72,30.86-88.72,30.86Z"/><path class="cls-5" d="M1687.34,2279.77l-89.29-61.36c-19.56-13.45-36.68-40.58-42.83-67.88L1400,1461.07c-10.14-45,13.26-69.22,45.54-47l89.29,61.37c19.57,13.44,36.69,40.57,42.83,67.88l155.24,689.46C1743,2277.78,1719.62,2302,1687.34,2279.77Z"/><polygon class="cls-8" points="1474 2165.71 1517.71 2232.57 1612.86 2281.43 1862.29 2302 2055.14 2260.86 2176 2194 2212 2101.43 2224.86 2047.43 2183.71 2080.86 2109.14 2132.29 1911.14 2183.71 1702.86 2196.57 1485.92 2159.19 1474 2165.71"/><path class="cls-8" d="M2233.86,1322.29l47.57,52.71-50.14,37.29-126,60.42S1938.14,1510,1933,1511.29s-180,2.57-183.86,5.14-159.43-14.14-165.85-12.86S1438,1463.71,1431.57,1465s-47.64-14.9-47.64-14.9,24.5-36.53,29.64-39.1,47.57-36,47.57-36l61.72,24.43,132.43,23.14s178.71,6.43,174.85,7.72,96.43-7.72,96.43-7.72l120.86-25.71,111.86-34.72Z"/></g><g id="Layer_5" data-name="Layer 5"><path class="cls-9" d="M1545.62,1153.83h380.66c30.71,0,49.52,33.85,33.13,59.82-36.49,57.78-112.89,135.76-257.79,129.6-114.08-4.86-168.79-76.17-193.93-129.87C1494.7,1185.65,1515,1153.83,1545.62,1153.83Z"/><polyline class="cls-10" points="1519.18 1239.55 1654.16 1240.78 1684.37 1271.29 1725.93 1204 1757.71 1242.58 1831.07 1242.91 1935.57 1244.63"/></g><g id="Layer_2" data-name="Layer 2"><line class="cls-11" x1="1791.57" y1="423.57" x2="1774.47" y2="619.59"/><line class="cls-11" x1="1852.18" y1="420.46" x2="1842.47" y2="614.73"/><path class="cls-11" d="M1473.35,1377.24s-82.56-456.53,34-597.38c34.29-41.43,66.48-72.78,99.41-96.39,79-56.64,162.3-68.74,289.13-68.74,179.7,0,335.12,77.71,349.69,286.55S2226.15,1319,2226.15,1319s-140.84,116.57-432.25,106.85S1473.35,1377.24,1473.35,1377.24Z"/><path class="cls-11" d="M2255.79,1619.29c-14.25,165.66-33.16,370.27-44.21,447.62-19.42,136-114,182.38-287.58,209.38-161.79,25.16-416.65,9.17-436.08-117.1s-102-709.09-102-709.09l82.57-72.86"/><path class="cls-11" d="M2226.15,1319l48.57,63.14c0,5.14-3.06,46-7.93,105.9"/><path class="cls-11" d="M1545.62,1153.83h380.66c30.71,0,49.52,33.85,33.13,59.82-36.49,57.78-112.89,135.76-257.79,129.6-114.08-4.86-168.79-76.17-193.93-129.87C1494.7,1185.65,1515,1153.83,1545.62,1153.83Z"/><ellipse class="cls-12" cx="2007.54" cy="1054.52" rx="80.14" ry="40.07" transform="translate(-22.82 44.63) rotate(-1.27)"/><ellipse class="cls-12" cx="1463.68" cy="1065.33" rx="63.14" ry="31.57" transform="translate(-23.19 32.61) rotate(-1.27)"/><path class="cls-11" d="M1385.93,1450.1s222.87,86.63,495.39,63.13c281.7-24.28,393.4-131.13,393.4-131.13"/><line class="cls-11" x1="1889.29" y1="1516.43" x2="1951" y2="2176"/><path class="cls-11" d="M1487.92,2159.19s220.32,60.39,422.54,24.28c272-48.57,291.41-126.28,306-145.7"/><circle class="cls-11" cx="2002.74" cy="1675.94" r="36.43"/><circle class="cls-11" cx="2034.31" cy="1964.91" r="31.57"/><path class="cls-11" d="M2653,1362.14s-54,127.29-185.14,119.57c-149.53-8.79-250.72,3.86-327.86,88.72,0,0,0,19.28,11.57,50.14s46.29,46.29,46.29,46.29c77.14-84.86,178.07-88.72,327.85-88.72,192.86,0,227.58-204.43,227.58-204.43"/><circle class="cls-11" cx="1819.86" cy="340" r="84.86"/><path class="cls-11" d="M1152.57,1817.29s6.12-77.6,115.72-115.72c88.71-30.86,154.28,19.29,154.28,19.29"/><path class="cls-11" d="M1079.29,1763.29s15.42-77.15,119.57-138.86,208.28-23.14,208.28-23.14"/><path class="cls-13" d="M1505.43,970.43s15.43-27,54-30.86,78.71,27,78.71,27"/><path class="cls-13" d="M1806.29,962.71s30.09-38.57,69.42-38.57C1945.14,924.14,1976,955,1976,955"/><path class="cls-11" d="M2820.82,1188.1c-4-6.84-14.43-3.91-14.4,4v.3c0,49-36.74,88.71-82.06,88.71s-82.06-39.72-82.06-88.71v-.3c0-7.94-10.39-10.87-14.41-4a130.24,130.24,0,0,0-17.7,66c0,68.17,51.11,123.43,114.17,123.43s114.17-55.26,114.17-123.43A130.24,130.24,0,0,0,2820.82,1188.1Z"/><path class="cls-11" d="M1048.4,1761.31c-59.54,2-107.82,50.29-109.8,109.83l0,.95a4,4,0,0,0,7.53,2,92.86,92.86,0,0,1,80.79-48.36c51.19-.41,93.46,41.35,93.64,92.55a92.37,92.37,0,0,1-12.7,47.26,4,4,0,0,0,5.61,5.39,113.75,113.75,0,0,0-65-209.6Z"/><ellipse class="cls-14" cx="1925.36" cy="2399.93" rx="290.57" ry="56.57" transform="translate(-143.54 122.58) rotate(-3.52)"/><ellipse class="cls-15" cx="1966.5" cy="2549.86" rx="220.01" ry="42.83" transform="translate(-152.66 125.38) rotate(-3.52)"/><ellipse class="cls-16" cx="2012.79" cy="2679.57" rx="158.97" ry="30.95" transform="translate(-160.52 128.47) rotate(-3.52)"/></g><g id="Layer_4" data-name="Layer 4"><path class="cls-17" d="M2848.53,1254.14a140.47,140.47,0,0,0-19.08-71.1,17.74,17.74,0,0,0-33,9.18v.21c0,43.4-32.33,78.71-72.06,78.71s-72.06-35.31-72.06-78.71v-.27a17.74,17.74,0,0,0-33-9.12,140.37,140.37,0,0,0-19.08,71.1c0,43.54,19.5,82.27,49.62,106.64l-6-2.55c-.13.3-13.41,31-41.84,60.12-37.47,38.43-82.39,56.39-133.52,53.38-83.47-4.91-142.58-2.19-191,8.82,4.47-55.29,7.29-93.21,7.29-98.45v-3.4l-48-62.44c4.71-31.06,32.2-224.51,18.87-415.68-7-101-46.43-178.08-117-229-31.47-22.7-69-39.89-111.67-51.12-39.66-10.44-83.72-15.73-130.95-15.73-15.29,0-29.54.18-42.94.55l9-180.3a94.85,94.85,0,1,0-80.7,1.66L1765.09,612c-11.83,1.69-23,3.7-33.82,6.05-49.39,10.72-90.8,28.91-130.34,57.26-33.2,23.8-66.33,55.9-101.28,98.14-27.79,33.57-46.87,86.66-56.69,157.76a888.31,888.31,0,0,0-7.49,95.93c-27.2,6.51-45.31,21.63-44.91,39.76.28,12.42,9,23.33,24.71,30.73a91.75,91.75,0,0,0,20.34,6.64q.41,13.55,1,27.52c5,109.59,20.33,208.13,25.29,238l-.06-.06-86.6,76.41.75,5.34c.25,1.78,8,56.77,19.3,135.9a275.51,275.51,0,0,0-52.78-7.67c-37-1.83-92.86,3-148.79,36.1-87.62,51.92-114.68,114.38-121.93,136.94a125.94,125.94,0,0,0-23.77-1.45c-64.83,2.16-117.3,54.65-119.45,119.48l0,1a14,14,0,0,0,26.29,7,82.91,82.91,0,1,1,144.33,81.59,14,14,0,0,0,19.62,18.88,124,124,0,0,0,43.45-161.24l.27,0c0-.17,1.76-18.11,15.9-40.08,18.79-29.19,51-52.37,93.13-67,34.44-12,69.21-12.68,103.35-2.08,21.8,6.77,36.41,16.25,40.44,19,24.17,169.31,52.4,365.91,62.68,432.72,4.59,29.81,21.25,55.43,49.52,76.13,50.48,36.95,128.46,50.92,185,56.13,24.48,2.26,50.28,3.37,76.46,3.37a905.45,905.45,0,0,0,136.54-10.17c97.23-15.13,160.65-35.29,205.62-65.39,51.71-34.61,80.41-83.05,90.32-152.46,11.09-77.57,29.14-275.55,38.92-386.65,1.65-18.78,3.28-37.42,4.85-55.69,65.26-35.51,147.51-37.84,260.46-37.84,45.91,0,87-11.26,122.26-33.48,28.12-17.74,52.44-42.42,72.27-73.33a320.38,320.38,0,0,0,41.72-100C2812.1,1364.15,2848.53,1313.64,2848.53,1254.14Z"/></g></svg>
</div>
   
</template>

<script>

export default {
    name: "Mail",
    methods: {
        toggleClassSent() {
            document.body.classList.contains('sent') ? document.body.classList.remove("sent") : document.body.classList.add("sent");
        },
    }
}
</script>

<style lang="scss" scoped>

@import url(https://fonts.googleapis.com/css?family=Dancing+Script:400,700);
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #c8e7d8;
  color: #4e5e72;
  text-align: center;
  font-family: monospace;
  overflow: hidden;
}
h1, p {
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 2rem;
  font-family: 'Dancing Script';
}
small {
  display: block;
  padding: 1rem 0;
  font-size: 0.8rem;
  transition: opacity 0.33s;
}
textarea, input, button {
  line-height: 1.5rem;
  border: 0;
  outline: none;
  font-family: inherit;
  appearance: none;
}
textarea, input {
  color: #4e5e72;
  background-color: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>");
}
textarea {
 width: 100%;
 height: 8rem;
 resize: none;
}
input {
 width: 50%;
 margin-bottom: 1rem;
  &[type=text]:invalid, [type=email]:invalid {
    box-shadow: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(240, 132, 114, 0.5)' x='0' y='23' width='10' height='1'/></svg>");
  }
}
button {
 padding: 0.5rem 1rem;
 border-radius: 0.25rem;
 background-color: rgba(78, 94, 114, 0.9);
 color: white;
 font-size: 1rem;
 transition: background-color 0.2s;
  &:hover,:focus {
    outline: none;
    background-color: rgba(78, 94, 114, 1);
  }
}
input[type=text]:focus,
input[type=email]:focus,
textarea:focus {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgba(78, 94, 114, 0.3)' x='0' y='23' width='10' height='1'/></svg>");
  outline: none;
}
.wrapper {
  width: 35rem;
  background-color: white;
}
.letter {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 30rem;
  margin: auto;
  perspective: 60rem;
}
.side {
  height: 12rem;
  background-color: #fcfcf8;
  outline: 1px solid transparent;
  &:nth-of-type(1) {
    padding: 2rem 2rem 0;
    border-radius: 1rem 1rem 0 0;
    box-shadow: inset 0 0.75rem 2rem rgba(229, 225, 187, 0.5);
  }
  &.side:nth-of-type(2) {
    padding: 2rem;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.05), inset 0 -0.57rem 2rem rgba(229, 225, 187, 0.5);
    text-align: right;
  }
}
.envelope {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
}
.envelope.front {
  width: 10rem;
  height: 6rem;
  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
  z-index: 9999;
  opacity: 0;
}
.envelope.front::before, .envelope.front::after {
  position: absolute;
  display: block;
  width: 12rem;
  height: 6rem;
  background-color: #e9dc9d;
  transform: rotate(30deg);
  transform-origin: 0 0;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  content: '';
}
.envelope.front::after{
  right: 0;
  transform: rotate(-30deg);
  transform-origin: 100% 0;
}
.envelope.back {
  top: -4rem;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  z-index: -9998;
  opacity: 0;
  transform: translateY(-6rem);
  &::before {
    display: block;
    width: 10rem;
    height: 10rem;
    background-color: #e9dc9d;
    border-radius: 1rem;
    content: '';
    transform: scaleY(0.6) rotate(45deg)
  }
}
.result-message {
  opacity: 0;
  transition: all 0.3s 2s;
  transform: translateY(9rem);
  z-index: -9999;
}
.sent {
  & .letter {
    animation: scaleLetter 1s forwards ease-in /*,
               pushLetter 0.5s 1.33s forwards ease-out*/ ;
  }
  & .side:nth-of-type(1) {
    transform-origin: 0 100%;
    animation: closeLetter 0.66s forwards ease-in;
  }
  & .side:nth-of-type(1) h1, .side:nth-of-type(1) textarea {
    animation: fadeOutText 0.66s forwards linear;
  }
  & button {
    background-color: rgba(78, 94, 114, 0.2);
  }
  & .envelope {
    animation: fadeInEnvelope 0.5s 1.33s forwards ease-out;
  }
  & .result-message {
    opacity: 1;
    transform: translateY(12rem);
  }
  & small {
    opacity: 0;
  }
}
.centered {
  position: absolute;
  left: 0;
  right: 0;
  margin: 1rem auto;
}
@keyframes closeLetter {
   50% {transform: rotateX(-90deg);}
   100% {transform: rotateX(-180deg);}
}
@keyframes fadeOutText {
   49% {opacity: 1;}
   50% {opacity: 0;}
   100% {opacity: 0;}
}
@keyframes fadeInEnvelope {
  0% {opacity: 0; transform: translateY(8rem);}
  /*90% {opacity: 1; transform: translateY(4rem);}*/
  100% {opacity: 1; transform: translateY(4.5rem);}
}
@keyframes scaleLetter {
  66% {transform: translateY(-8rem) scale(0.5, 0.5);}
  75% {transform: translateY(-8rem) scale(0.5, 0.5);}
  90% {transform: translateY(-8rem) scale(0.3, 0.5);}
  97% {transform: translateY(-8rem) scale(0.33, 0.5);}
  100%{transform: translateY(-8rem) scale(0.3, 0.5);}
}

/*
@keyframes pushLetter {
  0% {transform: translateY(-8rem) scale(0.3, 0.5);}
  50% {transform: translateY(-8rem) scale(0.3, 0.5);}
  90% {transform: translateY(-8.5rem) scale(0.3, 0.5);}
  100% {transform: translateY(-8rem) scale(0.3, 0.5);}
}
*/


</style>