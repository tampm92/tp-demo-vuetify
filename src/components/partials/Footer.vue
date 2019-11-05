<template>
  <footer class="theme--dark" color="black">
    <v-container class="d-flex">
      <v-layout class="wrap">
        <div class="flex xs9">
          <div>
            <v-icon>mdi-email-outline</v-icon>
            <span>EMAIL: tamphanmin1992@gmail.com</span>
          </div>
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
  background: #f5f5f5;
  color: black;
  .container{
    height: 100%;
    align-items: center;
  }
}
</style>