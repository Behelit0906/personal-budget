<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref, computed } from 'vue';

import { useAuthStore, useUserStore } from '../stores';

const authStore = useAuthStore();
const userStore = useUserStore();
const { user } = storeToRefs(authStore);
const latestOperations = ref([]);
const balance = ref(0);
const warning = computed(() => balance.value < 0);

async function calculateBalance() {
	let ingress = 0;
	let egress = 0;
	const operations = await userStore.getAllOperations();
	operations.data.forEach(op => {
		if (op.type.toLowerCase() === 'egress')
			egress += op.amount;
		else
			ingress += op.amount
	});
	return ingress - egress;
}


onMounted(async () => {
	let operations = await userStore.getAllOperations();
	operations = operations.data.reverse().slice(0, 10);

	for (let i = 0; i < operations.length; i++) {
		latestOperations.value.push(operations[i]);
	}
	balance.value = await calculateBalance();
});
</script>
    
<template>
	<div v-if="user" class="home-container">
		<h1 class="home-head text-center">Hi {{user.name}}!</h1>
		<h2 class="balance-message text-center">Your general balance is</h2>
		<p :class="{ warning:warning }" class="text-center balance-amount">${{balance}}</p>
		<div class="list-container">
			<h3 class="text-center list-header">Your latest operations</h3>
			<ul v-for="operation in latestOperations" class="list">
				<li class="list-item">
					<span>{{ operation.name }}</span>
					<span class="item-amount">{{ operation.amount }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.home-container {
	width: 90%;
	min-height: 80vh;
	margin-left: auto;
	margin-right: auto;
	margin-top: 15px;
	margin-bottom: 15px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #fff;
	border-radius: 5px;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}

.home-head {
	font-weight: inherit;
}

.balance-message {
	margin-bottom: 15px;
	font-weight: inherit;
}

.balance-amount {
	margin-top: 0;
	font-weight: inherit;
	font-size: 1.7rem;
}

.warning {
	color: red;
}

.text-center {
	text-align: center;
}

.list-container {
	max-width: 350px;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
}

.list-header {
	padding: 15px;
	border-radius: 5px;
	background-color: #343A40;
	color: #ffffff;
	font-weight: inherit;
}

.list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.list-item {
	padding: 5px 15px 5px 15px;
	margin-bottom: 10px;
	font-weight: 300;
	border-bottom: 1px solid #757575;
}

.item-amount {
	float: right;
}
</style>
    