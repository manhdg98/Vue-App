<template>
<div id="containerAll">
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
  <div class="container" >
      <a href="#">
        <div class="button">
          <div class="star"></div>
          <div class="star s2"></div>
          <div class=" star s3"></div>
        <span><a @click="toggleClassSent()"> Send </a></span>
        </div>
        <div class="moon"></div>
      </a>
  </div>

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

@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

.container, .button, .moon,.sml, .button span{
	position: absolute;
}

#containerAll {
  width: 100%;
  height: 100%;
  background-image: url("https://wallpapercave.com/wp/wp2570965.jpg");
  background-size: contain;
  background-size: 100% 100%;
}

.container{
	margin: auto;
	top: 10%;
	right: 10%;
	/*background: linear-gradient(#ff0066 , #cc0052);*/
}

.moon{
	width: 85px;
	height: 85px;
	background: #eee;
	border-radius: 50%;
	left: 175px;
	top:2px;
	transition:all 1s ease-in-out;
	z-index: 2;
}
.moon:before{
	position: absolute;
	content: '';
	width: 20px;
	height: 22px;
	border-radius: 50%;
	background: #ccc;
  top: 25px;
  left:12px;
  box-shadow: 10px -20px 0 -4px #ccc, 4px 18px 0 -6px #ccc;
}


a:hover .moon{
	left: 215px;
	top: -35px;
	box-shadow: 0px 0px 10px #f2f2f2;
	transition: all 1s ease-in-out;
}


.button{
	width: 250px;
	height: 100px;
	background: #173356 ;
	box-shadow: 0px 0px 10px #fff;
	border-radius: 2px;
	z-index: 4;
  top:45px;
  left:-20px;
	transition: all 1s ease-in-out;
   
}
a:hover .button{
	transition: all 1s ease-in-out;
	box-shadow: 0px 2px 18px #eee;
}
a:hover .star{
	animation: twinkle 1s infinite;
}
.star{
	position: absolute;
	width: 2px;
	height: 2px;
	background: #fff;
	border-radius: 50%;
	z-index: 2;
	opacity: 0.1;
	top: 5px;
	left: 10px;
	box-shadow: 30px 20px 0px #fff, 
				40px 60px 0px #fff
				,40px 60px 0px #fff,
				80px 50px 0px #fff,
				120px 20px 0px #fff,
				110px 60px 0px #fff,
				120px 5px 0px #fff,
				200px 5px 0px #fff,
				210px 25px 0px #fff,
				230px 50px 0px #fff,
				170px 90px 0px #fff,
				190px 74px 0px #fff,
				140px 80px 0px #fff,
				20px 90px 0px #fff,
				40px 760px 0px #fff,
				60px 70px 0px #fff,
				80px 80px 0px #fff,
				160px 20px 0px #fff;
}
.s2 {
	position: absolute;
	height: 3px ;
	width: 3px;
	border-radius: 50%;
	background: #fff;
	animation-delay: 0.5s;
	box-shadow: 60px 5px 0px #fff, 
				40px 30px 0px #fff,
				10px 40px 0px #fff,
				90px 40px 0px #fff,
				100px 10px 0px #fff,
				110px 5px 0px #fff,
				7px 20px 0px #fff,
				200px 50px 0px #fff,
				180px 80px 0px #fff,
				190px 15px 0px #fff;
	top: 10px;
}
.s3{
	position: absolute;
	height: 1px ;
	width: 1px;
	border-radius: 50%;
	background: #fff;
	animation-delay: 0.9s;
	box-shadow: 30px 10px 0px #fff,
				 80px -20px 0px #fff
				,120px 10px 0px #fff,
				12px 50px 0px #fff,
				25px 190px 0px #fff,
				65px 840px 0px #fff,
				125px 70px 0px #fff,
				160px 20px 0px #fff,
				160px -7px 0px #fff,
				200px -18px 0px #fff,
				225px -38px 0px #fff,
				240px -40px 0px #fff;
	top: 30px;
}
@keyframes twinkle{
	50%{
		opacity: 1;
	}
}
.button span{
	text-align:center;
  font-weight:bold;
	font-family:  "Sacramento", cursive;
	font-size: 50px;
	left: 60px;
	line-height: 70px;
	margin: 15px auto;
	transition: all 1px ease-in-out;
	background: -webkit-linear-gradient(#d9d9d9,  #cccccc);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	font-weight: bold;
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