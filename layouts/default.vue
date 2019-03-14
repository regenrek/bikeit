<template>
  <div>
    <nuxt />
    <div class="footer pt-5">
      <div class="container-narrow">
        <p>
            Wir verwenden keine Cookies. Statistiken via <a href="https://simpleanalytics.io/">simpleanalytics.io</a>
          &nbsp;&nbsp;<nuxt-link to="impressum">Impressum</nuxt-link>&nbsp;&nbsp;
          <nuxt-link to="datenschutzerklaerung">Datenschutzerklärung</nuxt-link>
        </p>

      </div>
    </div>
    <script async defer src="https://cdn.simpleanalytics.io/hello.js"></script>
    <noscript><img src="https://api.simpleanalytics.io/hello.gif" alt=""></noscript>
  </div>
</template>
