<template>
  <modal name="models" height="auto" :scrollable="true">
    <button class="popup-close" @click="$modal.hide('models')"><img src="../assets/images/close.png" alt="Софатекс обратная свзяь"></button>
    <div v-if="formSend" class="popup-wrap">
      <h2 class="popup-title">Заполните форму <br> и скачате презентацию</h2>
      <form>
        <label class="popup-label" v-bind:class="{valid: this.validName}">
          <span>Ваше имя</span>
          <input @input="validInput" v-model="name" ref="name" type="text" placeholder="НАПРИМЕР: ИВАНОВ ИВАН" required>
        </label>
        <label class="popup-label" v-bind:class="{valid: this.validTel}">
          <span>Ваш телефон</span>
          <masked-input @input="validInput" ref="tel" type="tel" v-model="tel" mask="\+\375 (11) 111-11-11" placeholder="НАПРИМЕР: +375 (29) 555 55 55" />
        </label>
        <label class="popup-label" v-bind:class="{valid: this.validMail}">
          <span>Ваш e-mail</span>
          <input @input="validInput" ref="mail" v-model="mail" type="email" placeholder="НАПРИМЕР: INFO@YANDEX.RU" required>
        </label>
        <p class="popup-text">Я даю свое <a href="#">согласие на обработку персональных данных</a></p>
        <button class="popup-btn btn" type="submit" @click="submitForm">
          <span v-if="load" class="loader"></span>
          <span v-else>Скачать презентацию</span>
        </button>
      </form>
    </div>
    <div v-else class="popup-send">
      <h2 class="popup-title">Спасибо! <br> Ваша заявка успешно отправлена!</h2>
      <a href="/presentation.pdf" download>Можете скачать презентацию</a>
    </div>
  </modal>
</template>

<script>
import axios from 'axios'
import MaskedInput from 'vue-masked-input'
export default {
  name: "models",
  data() {
    return {
      name: '',
      validName: false,
      tel: '',
      validTel: false,
      mail: '',
      validMail: false,
      load: false,
      formSend: true
    }
  },
  methods: {
    openModal () {
      this.$modal.show('models',{
        width: 300,
        height: 300,
        classes: 'popup'
      })
    },
     beforeOpen (event) {
      console.log('event')
    },
    validInput(event){
      let type = event.target ? event.target.type : event;
      switch(type){
        case 'text':
          event.target.value.length >= 3 ? this.validName = true : this.validName = false;
          break;
        case 'email':
          var val = /\S+@\S+\.\S+/
          if (event.target.value.length >= 3 && val.test(event.target.value)){
            this.validMail = true
          } else {
            this.validMail = false
          }
          break;
        default: 
          var val = /^\+375\s\(((29)|(44)|(25)|(33))\)\s[1-9]{1}[0-9\-]{8}/
          val.test(event) ? this.validTel = true : this.validTel = false
      }
    },
    submitForm(event){
      event.preventDefault();
      let message = `Заявка с сайта ${window.location.hostname}%0A <b>Форма</b>: Заказать звонок%0A <b>Имя</b>: ${this.name}%0A <b>Телефон</b>: ${this.tel}%0A <b>Mail</b>: ${this.mail}`

      if (this.validName){
        if (this.validTel){
          if (this.validMail){
            this.load = true

            axios.get(`https://api.telegram.org/bot465765796:AAHA5-w2EGDhAtllvFcn6ng6izCYsJg9aqA/sendMessage?chat_id=-303313856&text=${message}&parse_mode=HTML`)
              .then(res => {
                if (res.status == 200){
                  console.log('Заявка успешно отправлена')
                  this.name = ''
                  this.validName = false
                  this.tel = ''
                  this.validTel = false
                  this.mail = ''
                  this.validMail = false
                  this.load = false
                  this.formSend = false
                  setTimeout(() => {
                    this.formSend = true
                  }, 5000)
                }
              })
              .catch(err => {
                  console.log(err);
              });
          } else { this.$refs.mail.focus() }
        } else { document.querySelector('input[type="tel"]').focus() }
      } else { this.$refs.name.focus() }
    }
  },
  components: {
    MaskedInput
  }
}
</script>

