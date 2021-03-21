<template>
  <div class="text-center">
    <v-dialog
      v-model="show"
      id="dialogDiscuss"
    >
      <validation-observer
        ref="observer"
        v-slot="{ invalid }"
      >
        <form @submit.prevent="submit">
          <h2> Timeline Discuss </h2>
          <validation-provider
            name="time"
            rules="required"
          >
            <v-time-picker
              v-model="time"
              :allowed-minutes="allowedStep"
              class="mt-4"
              format="24hr"
            ></v-time-picker>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="title"
            :rules="{
              required: true
            }"
          >
            <v-text-field
              v-model="title"
              :error-messages="errors"
              label="Title"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Description"
          >
            <v-text-field
              v-model="content"
              :error-messages="errors"
              label="Description"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            name="image"
            rules="required"
          >
            <v-file-input
              v-model="image"
              color="deep-purple accent-4"
              counter
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
              accept="image/*"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </validation-provider>
          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
            @click="saveTimeline"
          >
            submit
          </v-btn>
          <v-btn class="mr-4" @click="clear">
            clear
          </v-btn>
          <v-btn class="mr-4" @click="show=false">
            close
          </v-btn>
          <v-btn @click="check">
            check
          </v-btn>
        </form>
      </validation-observer>
    </v-dialog>
    <v-alert
      dense
      text
      type="success"
      v-if="timelineCondition"
    >
      Create success timeline
    </v-alert>
  </div>
</template>

<script>
  import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import { mapActions, mapMutations, mapState } from 'vuex'
  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  export default {
    name: "DialogDiscuss",
    props: {
     value: Boolean
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          if (!value) {
            this.$emit('input', value)
          }
        }
      }
    },
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      time: '10:12',
      title: '',
      content: '',
      image: null,
      files: [],
      timelineCondition: false
    }),
    watch: {

    },
    methods: {
      ...mapActions(['postTimeline', 'getAllTimeline']),
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.time = ''
        this.title = ''
        this.content = ''
        this.image = null
        this.$refs.observer.reset()
      },
      allowedHours: v => v % 2,
      allowedMinutes: v => v >= 0 && v <= 59,
      allowedStep: m => m % 1 === 0,
      check () {
        let check = `time: ${this.time}, 
                     title: ${this.title}
                     content: ${this.content}
                     image: ${this.image[0].name}`
        console.log(check);
      },
      saveTimeline () {
        const req = {
          time: this.time,
          title: this.title,
          content: this.content,
          image: this.image[0].name
        };
        this.postTimeline(req);
        this.timelineCondition = true;
        this.show = false;
        this.getAllTimeline();
      }
    }
  }
</script>

<style scope lang="scss">
.v-dialog {
  width:50%;
  background-color: white;
  padding: 20px
}
.v-picker {
    text-align: center;
    float: left;
    margin-right: 15px;
}
</style>