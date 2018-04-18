<template>
  <section class="treaty section" :style="{ backgroundImage: 'url(\'' + require('../assets/images/treaty/bg.png') + '\')' }">
      <div class="container">
          <h2 class="section-title"><span>Мы уверены в Вашем успехе</span><img src="../assets/images/title.png" alt="Мы уверены в Вашем успехе Софатекс"></h2>
          <p class="treaty-desc">И поэтому делим с Вами риски 50-50. В течение 2-х месяцев после запуска вы можете вернуть товар. Единственное условие - сделать все пункты из списка для новых партнеров.</p>
          <div class="treaty-paper">
            <div class="treaty-paper__left">
                <h3 class="treaty-paper__title">Договор</h3>
                <p class="treaty-paper__text">11.9. Лицензиат в праве вернуть часть непроданного товара, если маркетинговые мероприятий по продвижению продукции из списка Лицензиара (приложение №2 к настоящему договору) не привели к достижению точки безубыточности или неудовлетворительному уровню продаж не позднее трех месяцев с момента открытия магазина.</p>
            </div>
            <div class="treaty-paper__right">
                <img src="../assets/images/treaty/paper.png" alt="Мы уверены в Вашем успехе Софатекс">
            </div>
          </div>
          <div class="treaty-bottom">
              <button class="btn" @click='$modal.show("models", { title: "Оставить заявку (Договор)" })'>Оставить заявку и скачать договор*</button>
              <p>*Договор Вы получите на почту после проверки данных</p>
          </div>
          <div class="section-page">/09</div>
      </div>
  </section>
</template>
