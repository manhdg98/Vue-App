<template>
    <div> 
        <div class="envelope"><input class="envelope__check"  :disabled="openMailbox" type="checkbox"/>
		<div class="envelope__flap envelope__flap--inside"></div>
		<div class="envelope__flap"> 
			<div class="letter mt-5">
				<div class="">
					<p>Hey! 👋: {{ nameMailBox }} </p> 
				</div>
			</div> 
		</div>
		<v-dialog
			v-model="dialog"
			persistent
			max-width="600"
			>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
				color="primary"
				dark
				v-bind="attrs"
				v-on="on"
				:style="openMailbox === false ? 'z-index: -1' : 'z-index: 10; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)'"
				>
					Enter Password
				</v-btn>
			</template>
			<v-card>
				<v-card-title class="headline">
					Please enter password to access mailbox
				</v-card-title>
				<v-card-text style="max-width: 320px; margin: 0 auto">
					<v-text-field
						v-model="password"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required, rules.min]"
						:type="show1 ? 'text' : 'password'"
						name="input-10-1"
						label=""
						hint="At least 8 characters"
						counter
						@click:append="show1 = !show1"
						style="font-size: 24px"
					></v-text-field>
				</v-card-text>
				<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="green"
					text
					@click="submitAccessMail()"
				>
					Agree
				</v-btn>
				<v-btn
					color="black"
					text
					@click="dialog = false"
				>
					Disagree
				</v-btn>
				</v-card-actions>
			</v-card>
			<v-snackbar
				v-model="snackbar"
				top
				>
				Please enter correct password

				<template v-slot:action="{ attrs }">
					<v-btn
					color="pink"
					text
					v-bind="attrs"
					@click="snackbar = false"
					>
					Close
					</v-btn>
				</template>
			</v-snackbar>
		</v-dialog>
		<div class="envelope__letter">
			<div class="letter">
				<div class="letter__content">
					<span>Hey {{ nameMailBox }}! 👋</span> 
					<div class="switch" style="float:right">
						<v-switch
							v-model="switch1"	
						> </v-switch>
						<v-btn
							v-if="openMailbox === false"
							color="white"
							style="max-width: 30px !important; box-shadow: 0 !important;"
							@click="loadData()"
						>
							<img style="border-radius: 50%; width: 30px; height: 30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flat_restart_icon.svg/1200px-Flat_restart_icon.svg.png" alt="">
						</v-btn>
					</div>
					
					<ul v-for="item in dataMailBox" :key="item.id">
						<li v-if="item.type === 'praise' && switch1===true" style="color: blue; word-break: break-word" >({{ new Date(item.updatedAt).getHours() + ":" + new Date(item.updatedAt).getMinutes() + " " + getDay() }})  {{ item.message }}  </li>
						<li v-if="item.type === 'suggest' && switch1===false" style="color: red; word-break: break-word">({{ new Date(item.updatedAt).getHours() + ":" + new Date(item.updatedAt).getMinutes() + " " + getDay() }})  {{ item.message }}  </li>
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
			dataMailBox: {},
			show1: false,
			rules: {
				required: value => !!value || 'Required.',
				min: v =>  v.length >= 8 ? '' : 'Min 8 characters',
				emailMatch: () => (`The email and password you entered don't match`),
			},
			password: '',
			dialog: false,
			openMailbox: true,
			snackbar: false,
			switch1: true,
		}
	},
    props: {
	  nameMailBox: String,
	  passwordUser: String
	},
	watch: {
		switch1() {
			console.log(this.switch1)
		}
	},
	computed: {
		...mapState(['mailbox'])
	},
	methods: {
		...mapActions(['getMailBox', 'getMailBoxByName']),
		getDay() {
			const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			let d = new Date().getDay();
			return this.day = days[ d ];
		},
		async submitAccessMail() {
			if (this.password === this.passwordUser) {
				const { data } = await axios.get(`mailbox?name=${this.nameMailBox}`);
				this.dataMailBox = data;
				this.dialog = false;
				this.openMailbox = false;
			} else {
				this.snackbar = true;
			}
		},
		async loadData() {
			const { data } = await axios.get(`mailbox?name=${this.nameMailBox}`);
			this.dataMailBox = data;
		}
	}
}
</script>

<style scoped lang="scss">
* {
	box-sizing: border-box;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    min-width: 39px;
    padding: 0 16px;
    box-shadow: none;
}
.none {
	display: none;
	opacity: 1;
}
.envelope {
	width: 100%;
	height: 250px;
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