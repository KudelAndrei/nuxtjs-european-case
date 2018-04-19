<template>
  <modal name="models" height="auto" :scrollable="true" @before-open="beforeOpen" @before-close="beforeClose">
    <button class="popup-close" @click="$modal.hide('models')"><img src="../assets/images/close.png" alt="Софатекс обратная свзяь"></button>
    <div v-if="formSend" class="popup-wrap">
      <h2 v-if="this.title.includes('Договор')" class="popup-title">Заполните форму</h2>
      <h2 v-else class="popup-title">Заполните форму <br> и скачате презентацию</h2>
      <form>
        <label class="popup-label" v-bind:class="{valid: this.validName}">
          <span>Ваше имя</span>
          <input @input="validInput" v-model="name" ref="name" type="text" placeholder="НАПРИМЕР: ИВАНОВ ИВАН" required>
        </label>
        <label class="popup-label" v-bind:class="{valid: this.validTel}">
          <span>Ваш телефон</span>
           <input @input="validInput" ref="tel" type="tel" v-model="tel" v-mask="'+375 (##) ###-##-##'" placeholder="НАПРИМЕР: +375 (29) 555 55 55" />
        </label>
        <label class="popup-label" v-bind:class="{valid: this.validMail}">
          <span>Ваш e-mail</span>
          <input @input="validInput" ref="mail" v-model="mail" type="email" placeholder="НАПРИМЕР: INFO@YANDEX.RU" required>
        </label>
        <p class="popup-text">Я даю свое <a href="#">согласие на обработку персональных данных</a></p>
        <button class="popup-btn btn" type="submit" @click="submitForm">
          <span v-if="load" class="loader"></span>
          <span v-else>
            <span v-if="this.title.includes('Договор')">Отправить заявку</span>
            <span v-else>Скачать презентацию</span>
          </span>
        </button>
      </form>
    </div>
    <div v-else class="popup-send">
      <h2 class="popup-title">Спасибо! <br> Ваша заявка успешно отправлена!</h2>
      <p v-if="this.title.includes('Договор')">Договор Вы получите на почту после проверки данных</p>
      <p v-else>
        <a href="/presentaciya.pdf" target="_blank">Посмотреть презентацию в браузере</a>
        <br>
        <span>или</span>
        <br>
        <a href="/presentaciya.pdf" download>Скачать презентацию</a>
      </p>
    </div>
  </modal>
</template>

<script>
import axios from 'axios'
export default {
  name: "models",
  data() {
    return {
      title: '',
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
    beforeOpen(event) {
      setTimeout(() => {
        this.$refs.name.focus()
      }, 150);
      this.title = event.params.title;
    },
    beforeClose(){
      this.load = false
      this.formSend = true
    },
    validInput(event){
      switch(event.target.type){
        case 'text':
          event.target.value.length >= 2 ? this.validName = true : this.validName = false;
          break
        case 'email':
          var val = /\S+@\S+\.\S+/
          if (event.target.value.length >= 3 && val.test(event.target.value)){
            this.validMail = true
          } else {
            this.validMail = false
          }
          break
        default: 
          var val = /^\+375\s\(((29)|(44)|(25)|(33))\)\s[1-9]{1}[0-9\-]{8}/
          val.test(event.target.value) ? this.validTel = true : this.validTel = false
          break
      }
    },
    submitForm(event){
      event.preventDefault();
      let message = `Заявка с сайта ${window.location.hostname}%0A <b>Форма</b>: ${this.title}%0A <b>Имя</b>: ${this.name}%0A <b>Телефон</b>: ${this.tel}%0A <b>Mail</b>: ${this.mail}`
      if (this.validName){
        if (this.validTel){
          if (this.validMail){
            this.load = true
            axios.get(`https://api.telegram.org/bot465765796:AAHA5-w2EGDhAtllvFcn6ng6izCYsJg9aqA/sendMessage?chat_id=-303313856&text=${message}&parse_mode=HTML`)
              .then(res => {
                if (res.status == 200){
                  this.name = ''
                  this.validName = false
                  this.tel = ''
                  this.validTel = false
                  this.mail = ''
                  this.validMail = false
                  this.load = false
                  this.formSend = false
                  // this.title.includes('Договор') ? null : document.location.href='/presentaciya.pdf'
                  if (this.title.includes('Договор')){
                    setTimeout(() => {
                      this.formSend = true
                      this.$modal.hide('models')
                    }, 6000)
                  }
                }
              })
              .catch(err => {
                  console.log(err);
              });
          } else { this.$refs.mail.focus() }
        } else { this.$refs.tel.focus() }
      } else { this.$refs.name.focus() }
    }
  }
}
</script>

