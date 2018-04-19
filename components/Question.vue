<template>
  <section id="question" class="question section">
      <div class="container">
        <h2 class="section-title"><span>Вопросы и ответы</span><img src="../assets/images/title.png" alt="Вопросы и ответы Софатекс"></h2>
        <p class="quyestion-desc">Нажмите на вопрос, чтобы увидеть ответ</p>
        <vue-tabs>
            <v-tab title="Есть ли паушальный взнос ?">
                <p>Да, 2500 рублей. Часть этих денег мы тратим на рекламную кампанию по открытию магазина в Вашем регионе.</p>
            </v-tab>

            <v-tab title="Будет ли у меня эксзлюив на город ?">
                <p>Да, Вы можете стать эксзлюзивным представителем у вас в регионе. Свяжитесь с нашим менеджером.</p>
            </v-tab>

            <v-tab title="Насколько востребован этот товар ?">
               <p>Мы создаем рынок и у нас неплохо получается (гуг и ян запрос)</p>
               <p>Ваш потенциальный клиент - все люди , у которых есть мягкая мебель.</p>
            </v-tab>

            <v-tab title="Как мне привлекать людей ?">
                <p>Мы предоставим полный портфель работающих инструментов по данному продукту.</p>
                <p>Мы будем направлять и помогать привлекать клиентов для Вашего региона.</p>
            </v-tab>
        </vue-tabs>
        <div class="question-bottom">
            <span class="line">Остались вопросы ?</span>
            <button class="btn" @click='$modal.show("models", { title: "Заказать звонок (Вопросы и ответы)" })'>Заказать звонок</button>
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