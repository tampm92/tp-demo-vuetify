<template>
  <layout name="default-layout">
    <div id="home-page">
      <img alt="Vue logo" src="../assets/logo.png">
      <ul>
        <li v-for="(item, index) in users" :key="index">
          <strong>{{item.email}}</strong>
        </li>
      </ul>
    </div>
  </layout>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      users: null
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.users = await this.$store.dispatch("getUserList");
    }
  }
}
</script>
