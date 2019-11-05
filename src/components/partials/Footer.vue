<template>
  <footer class="theme--dark" color="black">
    <v-container class="d-flex">
      <v-layout class="wrap">
        <div class="flex align-center xs9">
            <v-icon light>fa fa-envelope</v-icon>
            <span class="ml-2">EMAIL: tamphanmin1992@gmail.com</span>
        </div>
      </v-layout>
    </v-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
footer {
  background: rgba(203, 170, 92, .2);
  color: black;
  .container{
    height: 100%;
    align-items: center;
  }
}
</style>