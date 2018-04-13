<template>
  <section class="question section">
      <div class="container">
        <h2 class="section-title"><span>Вопросы и ответы</span><img src="../assets/images/title.png" alt="Вопросы и ответы Софатекс"></h2>
        <p class="quyestion-desc">Нажмите на вопрос, чтобы увидеть ответ</p>
        <vue-tabs>
            <v-tab title="Есть ли паушальный взнос">
                <p>Да, 4500 рублей. Часть этих денег мы тратим на рекламную кампанию по открытию магазина в Вашем регионе.</p>
            </v-tab>

            <v-tab title="Будет ли у меня эксзлюив на город">
                Second tab content
            </v-tab>

            <v-tab title="Насколько востребован этот товар">
                Third tab content
            </v-tab>

            <v-tab title="Как мне привлекать людей">
                Third tab content
            </v-tab>
        </vue-tabs>
        <div class="question-bottom">
            <span class="line">Остались вопросы ?</span>
            <button class="btn">Заказать звонок</button>
        </div>
        <div class="section-page">/10</div>
      </div>
  </section>
</template>

<script>
    import {VueTabs, VTab} from 'vue-nav-tabs'
    export default {
        components: {
            VueTabs,
            VTab
        }
    }
</script>