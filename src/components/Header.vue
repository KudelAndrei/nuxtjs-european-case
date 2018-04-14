<template>
  <header class="header section" :style="{ backgroundImage: 'url(\'' + require('../assets/images/header/bg.png') + '\')' }">
    <div class="container">
      <div class="header-line">
        <a href="mailto: fr@sofatex.by">fr@sofatex.by</a>
        <a href="tel: +375 29 635 67 35">+375 29 635 67 35</a>
      </div>
      <div class="header-top">
        <h1 class="logo">
          <div class="logo-img"><img src='../assets/images/logo.svg' /></div>
          <span class="logo-text"><span>одежда</span> для мебели</span>
        </h1>
        <div class="header-top__tight">
          <button class="btn" @click='$modal.show("models")'>Заказать звонок</button>
        </div>
      </div>
      <div class="header-center">
        <h2 class="header-title">Зарабатывайте <br> на франшизе</h2>
        <div class="header-center__bottom">
          <p class="text-fifty">100% поддержка до выхода на окупаемость <br> и полный набор работающих инструментов </p>
          <div class="wrap">
            <p>универсальных чехлов на мягкую мебель <br> от 3000 тыс. бел руб</p>
            <button class="link">универсальных чехлов на мягкую мебель  от 3000 тыс. бел руб</button>
          </div>
        </div>
      </div>
      <ul class="header-bottom">
        <li class="item">
          <h3>Низкие цены</h3>
          <p>до 45 000 бел. руб <br> (с товаром)</p>
        </li>
        <li class="item">
          <h3>Быстрый запуск</h3>
          <p>до 30 дней</p>
        </li>
        <li class="item">
          <h3>Чистая прибыль</h3>
          <p>3000 - 6000 руб/мес</p>
        </li>
        <li class="item">
          <h3>Окупаемость <br> вложений</h3>
          <p>9-12 месяцев</p>
        </li>
        <li class="item">
          <h3>Средний оборот</h3>
          <p>28000 - 36000 бел. руб</p>
        </li>
      </ul>
      <div class="header-bottom">
        <button class="btn">Подробнее</button>
      </div>
      <div class="section-page">/01</div>
    </div>
    <Popup />
  </header>
</template>


<script>
  import Popup from './Popup'
  export default {
    components: {
      Popup
    }
  }
</script>
