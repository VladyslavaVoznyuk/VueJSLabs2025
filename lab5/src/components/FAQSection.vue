<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
</script>

<template>
  <section class="p-6">
    <h2 class="text-2xl mb-4 font-bold text-center">FAQ</h2>

    <Accordion :multiple="true">
      <AccordionTab header="Чи є безкоштовний тариф?">
        Так, базові можливості доступні усім.
      </AccordionTab>

      <AccordionTab header="Чи можна скасувати підписку?">
        Так, у будь-який момент.
      </AccordionTab>

      <AccordionTab header="Чи є інтеграції?">
        У тарифі PRO доступне API.
      </AccordionTab>
    </Accordion>
  </section>
</template>

