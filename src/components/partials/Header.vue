<template>
  	<v-app-bar fixed color="teal" dense dark prominent max-height="64">
		<v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    	<v-container class="d-flex ma-auto py-0">
			<v-layout class="flex-md-nowrap align-center">
				<v-img src="../../assets/tp-100.png" max-height="50" max-width="50" width="50" aspect-ratio="1" class="logo"></v-img>
				<v-toolbar-title class ="align-self-center pa-0 hidden-xs-only" src="/">TP Vuex - Vuetify</v-toolbar-title>
				<v-toolbar-items class="ml-5 align-center menu">
					<v-btn v-for="menu in menus" :key="menu.name" :href="menu.link" dark text color="white" 
						class="ml-0 hidden-sm-and-down menu-item" 
						:class="menu.active ? 'v-btn--active' : ''">
						{{menu.name}}
					</v-btn>
				</v-toolbar-items>
				<v-spacer></v-spacer>
				<v-text-field
					hide-details
					label=""
					single-line
					solo
					solo-inverted
					solo-flat
					dense
					max-width="100"
					append-icon="fa fa-search"
					dark
					color="teal"
					v-model="valueSearch"
				>
				</v-text-field>
				<v-btn icon :href="gitHub" target="black">
					<v-icon>fab fa-github</v-icon>
				</v-btn>
			</v-layout>
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
		menus: [{
			name: 'Home',
			link: "/",
			active: false
		}, {
			name: 'About',
			link: "/#/about",
			active: false
		}, {
			name: 'Projects',
			link: "/#",
			active: false
		}, {
			name: 'Members',
			link: "#",
			active: true
		}],
		valueSearch: ''
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
			& > div{
				max-height: 100%;
			}
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
	.menu{
		.menu-item{
			height: 36px !important;
			background: transparent !important;
		}
	}
}
</style>