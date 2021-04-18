<template>
    <div> 
        <div class="envelope"><input class="envelope__check" type="checkbox" @click="getDataMailBox()"/>
		<div class="envelope__flap envelope__flap--inside"></div>
		<div class="envelope__flap"> 
			<div class="letter mt-5">
				<div class="">
					<p>Hey! 👋: {{ nameMailBox }} </p> 
				</div>
			</div> 
		</div>
		<div class="envelope__letter">
			<div class="letter">
				<div class="letter__content">
					<p>Hey! 👋</p>
					<ul v-for="item in dataMailBox" :key="item.id">
						<li :style=" item.type === 'praise' ? 'color: blue' : 'color: red' ">({{ new Date(item.updatedAt).getHours() + ":" + new Date(item.updatedAt).getMinutes() + " " + getDay() }})  {{ item.message }}  </li>
					</ul>
				</div>
			</div>
		</div>
		<div class="envelope__back"></div>
	</div>
    </div>
</template>

<script>
import axios from '../../store/axiosConfig'
import { mapActions, mapState } from 'vuex';
export default {
	name: "mailBox",
	data() {
		return {
			dataMailBox: {}
		}
	},
    props: {
      nameMailBox: String
	},
	computed: {
		...mapState(['mailbox'])
	},
	methods: {
		...mapActions(['getMailBox', 'getMailBoxByName']),
		async getDataMailBox() {
			const { data } = await axios.get(`mailbox?name=${this.nameMailBox}`);
			this.dataMailBox = data;
		},
		getDay() {
			const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			let d = new Date().getDay();
			return this.day = days[ d ];
		}
	}
}
</script>

<style scoped lang="scss">
* {
	box-sizing: border-box;
}

.envelope {
	width: 380px;
	height: 200px;
	background: #b49976;
	position: relative;
}
.envelope__check {
	height: 100%;
	width: 100%;
	z-index: 10;
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	margin: 0;
	cursor: pointer;
	&:checked {
		& ~ .envelope__flap {
			transition: transform 0.25s 0s, z-index 0s 0.25s;
			transform: rotateX(-180deg);
			z-index: 0;
		}
		& ~ .envelope__letter {
			transform: translateY(-110%);
			transition: transform 0.25s 0.25s, z-index 0s 0.5s;
			z-index: 5;
		}
	}
}
.envelope__check:checked ~ .envelope__letter .letter__content:nth-child(2),
.envelope__check:checked ~ .envelope__letter .letter__content:nth-child(3) {
	transition: transform 0.25s 0.5s;
	transform: rotateX(0deg);
}
.envelope__flap {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 75%;
	transition: transform 0.25s 0.5s, z-index 0s 0.5s;
	transform-origin: top center;
	backface-visibility: hidden;
	background: repeating-linear-gradient(-45deg, #c1ab8e, #c1ab8e 10px, #e74c3c 10px, #e74c3c 20px, #c1ab8e 20px, #c1ab8e 30px, #1e90ff 30px, #1e90ff 40px) 0 0/100% 5px no-repeat, #c1ab8e;
	z-index: 4;
	clip-path: polygon(5% 40%, 50% 100%, 95% 40%, 100% 0, 0 0);
}
.envelope__flap--inside {
	background: #c1ab8e;
	backface-visibility: visible;
}
.envelope__back {
	height: 100%;
	width: 100%;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	background: repeating-linear-gradient(-45deg, #cebda6, #cebda6 10px, #e74c3c 10px, #e74c3c 20px, #cebda6 20px, #cebda6 30px, #1e90ff 30px, #1e90ff 40px) 0 100%/100% 5px no-repeat, repeating-linear-gradient(-45deg, #cebda6, #cebda6 10px, #e74c3c 10px, #e74c3c 20px, #cebda6 20px, #cebda6 30px, #1e90ff 30px, #1e90ff 40px) 0 100%/5px 100% no-repeat, repeating-linear-gradient(-45deg, #cebda6, #cebda6 10px, #e74c3c 10px, #e74c3c 20px, #cebda6 20px, #cebda6 30px, #1e90ff 30px, #1e90ff 40px) 100% 100%/5px 100% no-repeat, #cebda6;
	clip-path: polygon(80% 40%, 100% 0, 100% 100%, 0 100%, 0 0, 20% 40%);
	&:after {
		height: 100%;
		width: 100%;
		background: repeating-linear-gradient(-45deg, #c7b49a, #c7b49a 10px, #e74c3c 10px, #e74c3c 20px, #c7b49a 20px, #c7b49a 30px, #1e90ff 30px, #1e90ff 40px) 0 100%/100% 5px no-repeat, #c7b49a;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		clip-path: polygon(70% 10%, 100% 100%, 0 100%, 30% 10%);
	}
}
.envelope__letter {
	height: 90%;
	width: 90%;
	z-index: 1;
	position: absolute;
	left: 5%;
	top: 5%;
	transition: transform 0.25s 0.25s, z-index 0s 0.25s;
	transform: translateY(0);
}
.letter__content {
	height: 100%;
	width: 100%;
	background-color: #fff;
	top: 0;
	left: 0;
	position: absolute;
	overflow-y: scroll;
	overflow-x: hidden; 
	padding: 14px;
	text-align: start;
	&:nth-child(3) {
		backface-visibility: hidden;
	}
}
.letter__content:nth-child(2),
.letter__content:nth-child(3) {
	transition: transform 0.25s;
	top: 100%;
	transform-origin: top center;
	transform: rotateX(180deg);
	backface-visibility: visible;
	z-index: 2;
	border-top: 1px solid #eee;
}
.sign-off {
	position: absolute;
	bottom: 12px;
	right: 12px;
	font-size: 20px;
	font-family: cursive;
	transform: skewX(-20deg);
}
</style>