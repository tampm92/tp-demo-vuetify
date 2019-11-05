<template>
  	<v-app-bar fixed color="teal" dense dark prominent max-height="64">
    	<v-container class="d-flex ma-auto py-0">
      		<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-btn icon to="/">
          		<v-img src="../../assets/tp-100.png" max-height="50" max-width="50" width="50" aspect-ratio="1" class="logo"></v-img>
			</v-btn>
        	<v-toolbar-title src="/">TP Vuex - Vuetify</v-toolbar-title>

        	<v-spacer></v-spacer>

			<v-btn icon :href="gitHub" target="black">
				<v-icon>fab fa-github</v-icon>
			</v-btn>
    	</v-container>
		<v-navigation-drawer
			color="teal"
			v-model="drawer"
			absolute
			temporary
			class="side-bar"
		>
			<v-list nav dense >
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-list-item>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
  	</v-app-bar>
</template>

<script>
export default {
	data: () => ({
		gitHub: "https://github.com/tampm92/tp-awesome/tree/master/vuejs/vue-cli",
		group: null,
		drawer: false,
		menu: [{
			name: 'Home',
			link: "/"
		}]
	}),
	watch: {
		group() {
		this.drawer = false
		}
	}
};
</script>

<style lang="scss" scoped>
header{
	.d-flex {
		align-items: center;
		&.container {
			max-height: 100%;
		}
	}
	.logo {
		border-radius: 50%;
	}
	.side-bar{
		height: 100vh !important;
		max-height: 100vh;
		overflow-y: auto;
	}
}
</style>