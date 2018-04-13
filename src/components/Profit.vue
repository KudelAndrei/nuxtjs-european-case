<template>
  <section class="profit section">
      <div class="container">
          <h2 class="section-title"><span>Рассчитайте прибыль</span> <img src="../assets/images/title.png" alt="Рассчет прибыли в Софатекс"></h2>
          <div class="profit-wrap">
              <div class="profit-top">
                  <div class="profit-row profit-row--first">
                      <div class="col">
                          <p>Укажите населению Вашего города 15000 <br> от <span class="accent">50000</span> человек до 1 млн</p>
                          <vue-slider ref="slider" v-model="value"></vue-slider>
                      </div>
                      <div class="col">
                          <p>Среднестатистическая семья</p>
                          <p><span class="number">3</span> человека</p>
                      </div>
                  </div>
                  <div class="profit-row profit-row--second">
                    <p class="col">В вашем магазине сделают покупку не менее 1,2% семей</p>
                    <div class="col">
                        <p><strong>1,2%</strong><span> семей</span></p>
                        <p><strong>125</strong><span> чеков</span></p>
                    </div>
                  </div>
              </div>
              <div class="profit-bottom">
                  <div class="profit-row profit-row--third">
                      <div class="col">
                        <p>Средний чек в наших магазинах</p>
                        <p><span class="number">281</span> бел. руб.</p>
                      </div>
                      <div class="col">
                        <p>Оборот в месяц</p>
                        <p><span class="number">35125</span> бел. руб.</p>
                      </div>
                      <div class="col">
                        <p>Валовая прибыль</p>
                        <p><span class="number">10537</span> руб.</p>
                      </div>
                  </div>
                  <div class="profit-row profit-row--fourth">
                      <div class="col">
                          <p>Следующие</p>
                          <strong class="number">1,2%</strong>
                          <br>
                          <p>Станут Вашими покупателями на следующий год</p>
                      </div>
                      <div class="col">
                          <p>А цикл повторений покупки в среднем состоявляет</p>
                          <p><span class="number">1-2</span> года</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="profit-btn">
              <button class="btn">Подробнее</button>
              <button class="btn-link">Задать вопрос</button>
          </div>
          <div class="section-page">/06</div>
      </div>
  </section>
</template>

<script>
    import vueSlider from 'vue-slider-component'
    export default {
        components: {
            vueSlider
        },
        data: {
            value: 1
        }
    }
</script>
