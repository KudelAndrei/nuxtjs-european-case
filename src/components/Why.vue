<template>
  <section class="why section">
    <div class="why-top" :style="{ backgroundImage: 'url(\'' + require('../assets/images/why/bg.png') + '\')' }">
        <div class="container">
            <p>Скачайте презентацию и узнайте как вы можете зарабатывать от 3000 бел. руб/ мес.</p>
            <a href="#" class="link">получить pdf за 5 секунд</a>
        </div>
    </div>
    <div class="container">
        <h3 class="why-title">Почему у вас тоже получится:</h3>
         <vue-tabs>
            <v-tab title="Обучение">
                <p>Мы уделяем большое внимание обучению наших партнеров, поэтому мы детально проработали учебную программу, состоящую из 4 блоков:</p>
                <ul>
                    <li>- блок учредителя</li>
                    <li>- блок персонала</li>
                    <li>- блок маркетинга</li>
                    <li>- блок по продажам</li>
                </ul>
                <p>В каждом из блоков Вы найдете подробные инструкции или видео уроки и ответы на сотни вопросов, которые постоянно возникают в процессе работы.</p>
                <p>Вы получаете on-line поддержку 24/7 по всем интересующим Вас вопросам.</p>
            </v-tab>

            <v-tab title="Маркетинговая поддержка">
                Second tab content
            </v-tab>

            <v-tab title="Поддержка бренда">
                Third tab content
            </v-tab>

            <v-tab title="Строим отношения на долго">
                Third tab content
            </v-tab>
        </vue-tabs>
        <div class="section-page">/07</div>
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