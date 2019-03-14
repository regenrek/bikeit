<template>
  <div>
    <form v-show="!isSubmitted" @submit.prevent="validate">
      <div class="form-group">
        <label name="Name">Name</label>
        <input
          id="name"
          v-model.trim.lazy="name"
          class="form-control form-control-lg"
          type="text"
          @input="$v.name.$touch()"
          @focus="focusedElement = 'name'"
          @blur="foucsedElement = ''"
          placeholder="Bikepark, Trailcenter, ..."
        >
        <span
          v-show="$v.name.$error"
          class="text-sm self-start  mb-4 text-red-light"
        >Name muss mind. 4 Zeichen lang sein</span>
      </div>
      <div class="form-group">
        <label
                for="Bundesland"
                class=""
        >Bundesland</label>
        <v-select label="stateName" v-model="bundesland" :options="state"></v-select>
          <span
                  v-show="$v.bundesland.$error"
                  class="text-sm self-start  mb-4 text-red-light"
          >Wählen Sie ein Bundesland aus.</span>
      </div>

      <div class="form-group">
        <label
          for="email"
          class=""
        >E-Mail</label>
        <input
          id="email"
          v-model.trim.lazy="email"
          class="form-control form-control-lg"
          type="email"
          @input="$v.email.$touch()"
          @focus="focusedElement = 'email'"
          @blur="foucsedElement = ''"
          placeholder="E-Mail Adresse eingeben"
        >
        <span
          v-show="$v.email.$error"
          class="text-sm self-start  mb-4 text-red-light"
        >Bitte eine korrekte E-Mail Adresse angeben.</span>
      </div>

      <div class="mb-3">
        <p-check name="checkDSGVO" color="success" v-model="checkDSGVO">Ja, ich hab die <nuxt-link to="datenschutzerklaerung">Datenschutzerklärung</nuxt-link> gelesen.</p-check>
          <span
                  v-show="$v.checkDSGVO.$error"
                  class="text-sm self-start  mb-4 text-red-light"
          >Bitte Datenschutzerklärung akzeptieren.</span>
          <p-check name="checkNl" color="success" v-model="checkNl">Ja, ich würde gerne über Neuigkeiten per E-Mail informiert bleiben.</p-check>
      </div>

      <button
        :disabled="submitting"
        class="btn btn-lg btn-primary btn-block mb-2"
        type="submit"
      >
        Anfrage senden
      </button>
    </form>

    <div
      v-show="isSubmitted"
      class="text-2xl text-developmint"
    >
      Vielen Dank für die Nachricht!
    </div>
    <div
      v-if="error"
      class="text-2xl text-red-dark"
    >
      Ein Fehler ist aufgetreten!
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate/src/index'
  import { email, minLength, required } from 'vuelidate/src/validators'
  import vSelect from 'vue-select'
  import pCheck from 'pretty-checkbox-vue/check'

  export default {
    mixins: [validationMixin],
    data() {
      return {
        bundesland: '',
        focusedElement: '',
        name: '',
        email: '',
        msg: '',
        submitting: false,
        isSubmitted: false,
        error: false,
        checkNl: false,
        checkDSGVO: false,
        state: [
          {
            stateCode: 'noe',
            stateName: 'Niederösterreich'
          },
          {
            stateCode: 'wien',
            stateName: 'Wien'
          },
          {
            stateCode: 'bur',
            stateName: 'Burgenland'
          },
          {
            stateCode: 'st',
            stateName: 'Steiermark'
          },
          {
            stateCode: 'kaer',
            stateName: 'Kärnten'
          },
          {
            stateCode: 'oe',
            stateName: 'Oberösterreich'
          },
          {
            stateCode: 'sal',
            stateName: 'Salzburg'
          },
          {
            stateCode: 'ti',
            stateName: 'Tirol'
          },
          {
            stateCode: 'vo',
            stateName: 'Vorarlberg'
          }
        ]
      }
    },
    components: {
      vSelect,
      pCheck
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      bundesland: {
        required
      },
      checkDSGVO: {
        required
      }
    },
    mounted() {
      window.addEventListener('keyup', this.onKeyUp)
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.onKeyUp)
    },
    methods: {
      onKeyUp(event) {
        if (event.keyCode === 27) {
          this.$emit('close')
        }
      },
      validate() {
        if (this.$v.$error || this.submitting) {
          return
        }
        this.submitForm()
      },
      async submitForm() {
        this.submitting = true
        //this.$ga.event('submit', 'form',
        //
        // this.$i18n.locale)
        this.error = false
        try {
          await this.$axios.$post('/api/contact', {
            name: this.name,
            email: this.email,
            bundesland: this.bundesland.stateCode,
            checkDSGVO: this.checkDSGVO,
            checkNl: this.checkNl
          })
          this.submitting = false
          this.isSubmitted = true
          await new Promise(resolve => setTimeout(resolve, 2500))
          this.$emit('close')
        } catch (e) {
          this.submitting = false
          this.error = true
          console.error(e)
        }
      }
    }
  }
</script>
<style>
  .dropdown-toggle::after {
    display: none;
    content: "";
  }
  .v-select .vs__actions {
    padding-right: 24px
  }
.text-red-light {
 font-size: 0.8em;
    color: #ff4500;
}
</style>
