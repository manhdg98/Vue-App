<template>
    <div>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="mailbox-viewport">
                <div class="mailbox-wrapper">

                    <div class="mailbox-top-wrapper">

                        <div class="mailbox-flag">
                            <div class="mailbox-flag-part red"></div>
                            <div class="mailbox-flag-part red"></div>
                            <div class="mailbox-flag-part black"></div>
                        </div>

                        <div class="mailbox-top red">
                            <div class="mailbox-top-part black texture-1"></div>
                            <div class="mailbox-top-part black texture-1"></div>
                            <div class="mailbox-top-part black texture-1"></div>
                            <div class="mailbox-top-part black texture-1"></div>
                            <div class="mailbox-top-part black texture-1"></div>
                        </div>

                    </div>

                    <div class="mailbox-caps-wrapper">

                        <div class="mailbox-cap front">

                            <div class="mailbox-text">
                                <p>{{ nameMailBox }}</p>
                            </div>

                            <div class="mailbox-mailhole">
                                <div class="mailbox-mailhole-top red"></div>
                                <div class="mailbox-mailhole-side red"></div>
                                <div class="mailbox-mailhole-side red"></div>
                            </div>

                            <div class="cap-top">
                                <div class="cap-top-part black"></div>
                                <div class="cap-top-part black"></div>
                                <div class="cap-top-part black"></div>
                                <div class="cap-top-part black"></div>
                                <div class="cap-top-part black"></div>
                            </div>
                            <div class="cap-bottom black"></div>
                        </div>

                        <div class="mailbox-cap back">
                            <div class="cap-top">
                                <div class="cap-top-part black texture-2"></div>
                                <div class="cap-top-part black texture-2"></div>
                                <div class="cap-top-part black texture-2"></div>
                                <div class="cap-top-part black texture-2"></div>
                                <div class="cap-top-part black texture-2"></div>
                            </div>
                            <div class="cap-bottom black texture-2"></div>
                        </div>

                    </div>

                    <div class="mailbox-side-wrapper">
                        <div class="mailbox-side left black texture-1"></div>
                        <div class="mailbox-side right black texture-1"></div>
                    </div>

                    <div class="mailbox-bottom black texture-1"></div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "mailBox",
    props: {
      nameMailBox: String
    }
}
</script>

<style scoped>


/*-----------------------------*\
	VIEWPORT
\*-----------------------------*/
.mailbox-viewport {
	width: 300px;
	height: 300px;
	position: relative;
 margin: 0 auto;

	perspective: 800px;
}

.mailbox-viewport * {
	position: absolute;
	transform-style: preserve-3d;
}

/*-----------------------------*\
	GLOBAL
\*-----------------------------*/
.hidden {
	display: none;
}

.red {
	background-color: #c4442d;
}

.yellow {
	background-color: #ffcc00;
}

.black {
	background-color: #262626;
}

/*-----------------------------*\
	WRAPPER
\*-----------------------------*/
.mailbox-wrapper {
	width: 120px;
	height: 180px;

	transform-origin: 50% 50%;
	transform: translate3d(90px, 130px, 0) rotateX(70deg) rotateZ(210deg);
	transition: transform .6s;
	animation: wrapper 2s;
}

.mailbox-wrapper:hover {
	transform: translate3d(120px, 100px, 0) rotateX(80deg) rotateZ(230deg);
}

@keyframes wrapper {
 0%{transform: translate3d(90px, 130px, 0) rotateX(70deg) rotateZ(210deg);}
 100%{transform: translate3d(90px, 130px, 0) rotateX(70deg) rotateZ(570deg);}
}

/*-- bottom --*\
\*-----------------------------*/
.mailbox-bottom {
	width: 120px;
	height: 180px;
}

/*-- side --*\
\*-----------------------------*/
.mailbox-side {
	width: 80px;
	height: 180px;

	transform-origin: 0 50%;
	transform: rotateY(-90deg);
}

.mailbox-side:first-child {	
	background-position: 100px 0;

	transform: rotateY(90deg) translate3d(-80px, 0, 0);
}

.mailbox-side:last-child {	
	transform: rotateY(-90deg) translate3d(0, 0, -120px);
}

/*-- top --*\
\*-----------------------------*/
.mailbox-top {
	transform: translate3d(0, 0, 80px) rotateX(-90deg);
}

/*-- parts of the top --*/
.mailbox-top-part {
	height: 180px;
	width: 30px;

	transform-origin: 0 0;
	transform: rotateX(90deg);
}

.mailbox-top-part:first-child {
	background-position: 130px 0;

	transform: translate3d(12px, -28px, 0) rotateX(90deg) rotateY(-245deg);
}

.mailbox-top-part:nth-child(2) {
	background-position: 160px 0;

	transform: translate3d(37.5px, -44.5px, 0) rotateX(90deg) rotateY(-215deg);
}

.mailbox-top-part:nth-child(3) {
	width: 44px;
	background-position: 204px 0;

	transform: translate3d(82px, -44px, 0) rotateX(-90deg) rotateZ(180deg);
}

.mailbox-top-part:nth-child(4) {
	background-position: 234px 0;

	transform: translate3d(107px, -27px, 0) rotateX(90deg) rotateY(-145deg);
}

.mailbox-top-part:last-child {
	background-position: 264px 0;

	transform: translate3d(120px, 0, 0) rotateX(90deg) rotateY(-115deg);
}

/*-- caps --*\
\*-----------------------------*/

/*-- cap's top part --*/
.cap-top-part {
	width: 30px;
	height: 55px;
}

.mailbox-cap.back .cap-top {
	transform: translate3d(0, -28px, 0);
}

.mailbox-cap.front .cap-top {
	transform: translate3d(0, -27px, 0);
}

.mailbox-cap.front {
	transition: transform 1.4s .6s;
}

.mailbox-wrapper:hover .mailbox-cap.front {
	transform: rotateX(90deg);
}

.mailbox-cap.back {
	transform: translate3d(0, 180px, 0);
}

.cap-top-part:first-child {
	background-position: -40px -30px;

	transform: translate3d(16px, 0, 82.5px) rotateX(-90deg) rotateZ(-65deg);
}

.cap-top-part:nth-child(2) {
	background-position: -40px -10px;

	transform: translate3d(25px, -1px, 93px) rotateX(-90deg) rotateZ(-35deg);
}

.cap-top-part:nth-child(3) {
	width: 47px;
	background-position: -60px -10px;

	transform: translate3d(37px, 0, 97px) rotateX(-90deg);
}

.cap-top-part:nth-child(4) {
	background-position: -50px -30px;

	transform: translate3d(65px, -1px, 93px) rotateX(-90deg) rotateZ(35deg);
}

.cap-top-part:last-child {
	background-position: -70px -20px;

	transform: translate3d(74px, 0, 82.5px) rotateX(-90deg) rotateZ(65deg);
}

/*-- cap's bottom part --*/
.cap-bottom {
	width: 120px;
	height: 80px;
	background-position: -60px -30px;

	transform-origin: 50% 0%;
	transform: translate3d(0, 0, 80px) rotateX(-90deg);
}

/*-- mailhole --*\
\*-----------------------------*/
.mailbox-mailhole-top {
	width: 80px;
	height: 12px;

	transform: translate3d(20px, -12px, 50px);
}

.mailbox-mailhole-side {
	width: 12px;
	height: 12px;
}

.mailbox-mailhole-side:nth-child(2) {
	transform: translate3d(94px, -12px, 44px) rotateX(90deg) rotateY(90deg);

}

.mailbox-mailhole-side:last-child {
	transform: translate3d(14px, -12px, 44px) rotateX(90deg) rotateY(90deg);

}

/*-- mailflag --*\
\*-----------------------------*/
.mailbox-flag {
	height: 120px;
	width: 10px;

	transform-origin: 0 31px 46px;
	transform: rotateX(-90deg);
	transition: transform .6s .6s;
	animation: .4s infinite;
}

.mailbox-wrapper:hover .mailbox-flag {
	transform: rotateX(0deg);
}


.mailbox-flag-part:first-child {
	width: 10px;
	height: 120px;

	transform-origin: 50% 0%;
	transform: translate3d(-6px, 30px, 40px) rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}

.mailbox-flag-part:nth-child(2) {
	width: 40px;
	height: 20px;

	transform-origin: 50% 0%;
	transform: translate3d(-21px, 46px, 140px) rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}

.mailbox-flag-part:last-child {
	width: 8px;
	height: 8px;
	border-radius: 100%;

	transform-origin: 50% 0%;
	transform: translate3d(-6px, 31px, 42px) rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}

/*-- mailtext --*\
\*-----------------------------*/
.mailbox-text {
	color: #b8b8b8;
	font-family: 'Lucida Grande', 'Trebuchet MS', 'Verdana', sans-serif;
	font-size: 18px;
	font-weight: bold; 

	transform: translate3d(80px, -2px, 100px) rotateX(-90deg) rotateY(180deg);
}
</style>