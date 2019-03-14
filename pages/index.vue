<template>
  <div>
      <section class="container-narrow">
        <img class="img" src="/bike.png" alt="you like it? bike it!">
            <h1 class="text-center mb-4">You like it? Bike it!</h1>
          <p style="margin-top:2rem">
          Wer in Österreich legal Mountainbiken möchte, hat die Möglichkeit das in einem Bikepark,
          einem Trailcenter und auf sonstigen ausgewiesenen und beschilderten Wegenetzen zu tun.
          Dort können Mountainbiker jeder Könnerstufe ihrem Hobby nachgehen,
          ohne dabei mit dem Gesetz in Konflikt zu geraten.
          Das legale Angebot umfasst mehrere tausend Kilometer an reinen Mountainbiketrails in ganz Österreich.
          Wo diese zu finden sind, erfahren Sie <u>bald</u> hier.
        </p>
      </section>
      <div class="container-narrow alt-section pt-5 pb-5">
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <h2>Bikedestination eintragen</h2>
                  <contact></contact>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Contact from '~/components/contact'
export default {
  components: {
    Contact
  }
}
</script>
<style>
    .alt-section {
        background: #fff;
    }

    .form-control {
        display: block;
        width: 100%;
        height: calc(2.375rem + 2px);
        padding: 0.4375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #dee2e6;
        border-radius: 0.3125rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-control-lg {
        height: calc(3.625rem + 2px);
        padding: 0.875rem 0.875rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3125rem;
        background-color: white;
    }

    .btn-lg {
        padding: 0.875rem 2.25rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3125rem;
    }

    .form-group > label {
        font-size: 0.875rem;
        font-weight: 500;
        color: #333;
    }

    .form-group-label {
        font-size: 0.875rem;
        font-weight: 500;
        color: #adb5bd;
    }
</style>
