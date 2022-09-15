<script setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useAuthStore, useUserStore } from '../stores';

const authStore = useAuthStore();
const userStore = useUserStore();
const { user } = storeToRefs(authStore);
const latestOperations = ref([]);

onMounted(async () => {
	let operations = await userStore.latestOperations();
	operations = operations.data.reverse().slice(0, 10);

	for (let i = 0; i < operations.length; i++) {
		latestOperations.value.push(operations[i].name);
	}
});



</script>
    
<template>
	<div v-if="user">
		<h1 class="mb-3">Hi {{user.name}}!</h1>
		<button type="button" class="btn btn-primary mb-5">Add operation</button>
		<h3>Latest operations</h3>
		<ul v-for="operation in latestOperations" class="list-group w-50">
			<li class="list-group-item">{{ operation }}</li>
		</ul>
	</div>
</template>
    