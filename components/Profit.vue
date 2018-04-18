<template>
  <section class="profit section">
      <div class="container">
          <h2 class="section-title"><span>Рассчитайте прибыль</span> <img src="../assets/images/title.png" alt="Рассчет прибыли в Софатекс"></h2>
          <div class="profit-wrap">
              <div class="profit-top">
                  <div class="profit-row profit-row--first">
                      <div class="col">
                            <p>Укажите населению Вашего города 15000 <br> от <span class="accent">{{value}}</span> человек до 1 млн</p>
                            <no-ssr>
                                <vue-slider 
                                    :min='50000' 
                                    :max="1000000"
                                    tooltip="false"
                                    ref="slider" 
                                    v-model="value">
                                </vue-slider>
                            </no-ssr>
                      </div>
                      <div class="col">
                          <p>Среднестатистическая семья</p>
                          <p><span class="number">3</span> человека</p>
                      </div>
                  </div>
                  <div class="profit-row profit-row--second">
                    <p class="col">В вашем магазине сделают покупку не менее 1,2% семей</p>
                    <div class="col">
                        <p><strong>{{(value/3).toFixed(0)}}</strong><span> семей</span></p>
                        <p><strong>{{(value/3*0.02).toFixed(0)}}</strong><span> чеков (в год)</span></p>
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
                        <p>Выручка в месяц</p>
                        <p><span class="number">{{(value/3*0.012*281/12).toFixed(1)}}</span> бел. руб.</p>
                      </div>
                      <div class="col">
                        <p>Валовая прибыль</p>
                        <p><span class="number">{{(value/3*0.012*281*0.35/12).toFixed(1)}}</span> бел. руб.</p>
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
              <a href="#why" class="btn">Подробнее</a>
              <button class="btn-link" @click='$modal.show("models", { title: "Задать вопрос (Рассчитайте прибыль)" })'>Задать вопрос</button>
          </div>
          <div class="section-page">/06</div>
      </div>
  </section>
</template>

<script>
    import vueSlider from 'vue-slider-component/src/vue2-slider.vue'
    export default {
        data() {
            return {
                value: 50000,
                title: 'Задать вопрос (Рассчитать прибыль)',
            }
        },
        components: {
            vueSlider
        }
    }
</script>
