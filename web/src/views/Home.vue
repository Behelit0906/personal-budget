<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useAuthStore, useUserStore } from '../stores';

const authStore = useAuthStore();
const userStore = useUserStore();
const { user } = storeToRefs(authStore);
const latestOperations = ref([]);

onMounted(async () => {
	let operations = await userStore.getAllOperations();
	operations = operations.data.reverse().slice(0, 10);

	for (let i = 0; i < operations.length; i++) {
		latestOperations.value.push(operations[i].name);
	}
});
</script>
    
<template>
	<div v-if="user" class="home-container">
		<h1 class="home-head text-center">Hi {{user.name}}!</h1>
		<h2 class="balance-message text-center">Your general balance is</h2>
		<p class="text-center balance-amount">${{balance}}</p>
		<div class="list-container">
			<h3 class="text-center list-header">Your latest operations</h3>
			<ul v-for="operation in latestOperations" class="list">
				<li class="list-item">{{ operation }}</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.home-container {
	width: 90%;
	height: 80vh;
	margin-left: auto;
	margin-right: auto;
	margin-top: 15px;
	margin-bottom: 15px;
	padding-top: 20px;
	background-color: #fff;
	border-radius: 5px;
}

.balance-message {
	margin-bottom: 15px;
}

.balance-amount {
	margin-top: 0;
	font-size: 1.7rem;
}

.text-center {
	text-align: center;
}

.list-container {
	width: 90%;
	margin-left: auto;
	margin-right: auto;
}

.list-header {
	padding: 15px;
	border-radius: 5px;
	background-color: #343A40;
	color: #ffffff;
}

.list {
	list-style: none;
	margin: 0;
	padding: 0;
}


.list-item {
	padding: 5px;
	margin-bottom: 10px;
	text-align: center;
	border-radius: 5px;
	background-color: #4ecca3;
}
</style>
    