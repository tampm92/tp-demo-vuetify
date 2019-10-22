<template>
  <div id="default-layout">
    <Header/>
    <slot />
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data: () => ({
  }),
};
</script>