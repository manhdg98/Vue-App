<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="50%"
    >
      <v-card
        dark
        flat
      >
        <v-btn
          @click="info"
          absolute
          bottom
          color="pink"
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-title class="pa-2 purple lighten-3">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <h3 class="title font-weight-light text-center grow">
            Introduce yourself
          </h3>
          <v-avatar>
            <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
          </v-avatar>
        </v-card-title>
        <v-img
          id="imageBanner"
          src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="display-4 font-weight-regular mr-6">{{ new Date().getDate() }}</strong>
              <v-row justify="end">
                <div class="headline font-weight-light">
                  {{ getDay() }}
                </div>
                <div class="text-uppercase font-weight-light">
                  {{ getMonth() }} {{ getYears() }}
                </div>
              </v-row>
            </v-row>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            color="pink"
            small
            v-for="item in timeline"
            :key="item.id"
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>{{ item.time }}</strong>
              </v-col>
              <v-col cols="7">
                <strong>{{ item.title }}</strong>
                <div class="caption">
                  {{ item.content }}
                </div>
              </v-col>
              <v-col cols="2"> 
                <v-icon @click="editTimelineItem(item._id)">{{ iconEdit }}</v-icon>
                <v-icon @click="deleteTimelineItem(item._id)">{{ iconDelete }}</v-icon>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
    <DialogDiscuss v-model="showdialog"/>
    <DialogEditDiscuss :timelineObj="timelineObj" v-model="editDialog"/>
  </div>
</template>

<script>
import DialogDiscuss from './DialogDiscuss.vue';
import DialogEditDiscuss from './EditDialog.vue';
import { mapMutations, mapActions, mapState } from 'vuex';
import { mdiPencil, mdiDelete } from '@mdi/js'
export default {
  name: 'Discuss',
  components: {
    DialogDiscuss,
    DialogEditDiscuss
  },
  data() {
    return {
      day: 1,
      month: 1,
      years: 1990,
      showdialog: false,
      editDialog: false,
      iconEdit: mdiPencil,
      iconDelete: mdiDelete,
      timelineObj: {}
    }
  },
  computed: {
    ...mapState(['timeline'])
  },
  beforeCreate() {
    
  },
  methods: {
    ...mapActions(['getAllTimeline','deleteTimeline']),
    getDay() {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let d = new Date().getDay();
        return this.day = days[ d ];
    },
    getMonth() {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let m = new Date().getMonth();
        return this.month = months[ m ];
    },
    getYears() {
        return this.years = new Date().getFullYear();
    },
    info() { 
      this.showdialog = true;
      console.log("data", this.timeline);
    },
    editTimelineItem(id) {
      this.timelineObj = this.timeline.find( item => item._id === id);
      this.editDialog = true;
      console.log(this.editDialog)
    },
    async deleteTimelineItem(id) {
      if(confirm("Do you really want to delete?")){
        await this.deleteTimeline(id);
        this.getAllTimeline();
      }
    }
  },
  mounted() {
    this.getAllTimeline()
  }
}
</script>


<style>
#imageBanner {
    max-height: 200px;
    padding: 15px;
}
.v-timeline-item .col {
  padding-top : 0;
}
</style>