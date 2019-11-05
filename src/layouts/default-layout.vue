<template>
  <div id="default-layout">
    <Header/>
    <v-container>
    <slot />
    </v-container>
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
<style lang="scss">
#default-layout{
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  & > header {
    max-height: 64px;
    div.v-toolbar__content {
      max-height: 100% !important;
      align-items: center;
    }
  }
  & > div.container {
    margin-top: 64px;
  }
  & > footer {
    height: 64px;
    max-height: 64px;
    min-height: 64px;
  }
}
</style>