<template>
  	<layout name="default-layout">
      	<div id="home-page">
			  <v-dialog v-model="dialog" max-width="400">
					<v-card light>
						<div class="d-flex flex-no-wrap justify-space-between">
							<div>
								<v-card-title class="headline">
									{{selectedUser.first_name}} {{selectedUser.last_name}}
								</v-card-title>

								<v-card-subtitle v-text="selectedUser.email"></v-card-subtitle>
							</div>

							<v-avatar
								class="ma-3"
								size="125"
								tile
							>
								<v-img :src="selectedUser.avatar"></v-img>
							</v-avatar>
						</div>
					</v-card>
				</v-dialog>
				<v-card
					class="mx-auto"
					tile>
					<v-list
					:three-line="true"
					:shaped="true"
					:flat="true"
					:avatar="true">
					<v-subheader>Members</v-subheader>
					<v-list-item-group color="primary">
						<v-list-item
							v-for="(user, i) in users"
							:key="i"
							@click="showProfileUser(i)">
							<v-list-item-avatar v-if="user.avatar">
								<v-img :src="user.avatar"></v-img>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title>{{user.first_name}} {{user.last_name}}</v-list-item-title>
								<v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-card>
			<div class="text-center">
				<v-pagination
				v-model="pagination.page"
				:length="pagination.total_pages"
				:total-visible="5"
				light
				color="teal"
				></v-pagination>
			</div>
		</div>
	</layout>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			users: null,
			pagination: {
				page: 1,
				per_page: 6,
				total: 0,
				total_pages: 0,
			},
			selectedUser: {},
			dialog: false
		};
	},
	created() {
		this.getUsers();
	},
	methods: {
		async getUsers() {
			const data = await this.$store.dispatch("getUserList");
			this.users = data.data;
			this.pagination.page = data.page;
			this.pagination.total = data.total;
			this.pagination.total_pages = data.total_pages;
			this.pagination.per_page = data.per_page;
		},
		showProfileUser(index){
			this.selectedUser = this.users[index];
			console.log(this.selectedUser)
			this.dialog = true;
		}
	}
}
</script>
