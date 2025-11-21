<script setup>
import Toast from 'primevue/toast'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemSolution from './components/ProblemSolution.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingPlans from './components/PricingPlans.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import FAQSection from './components/FAQSection.vue'
import ContactForm from './components/ContactForm.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div id="app">
    <Toast />
    <SiteHeader />

    <section id="home">
      <HeroSection />
    </section>

    <section id="features">
      <ProblemSolution />
      <AdvantagesSection />
    </section>
    <HowItWorks/>
    <section id="pricing">
      <PricingPlans />
    </section>

    <ReviewsSection />
    <FAQSection />

    <section id="contact">
      <ContactForm />
    </section>
    <SiteFooter />
  </div>
</template>


