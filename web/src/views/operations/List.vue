<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '../../stores';

const page = ref(1);
const limit = ref(5);
const userStore = useUserStore();
const operationsList = ref([]);
const pages = ref(0);

async function getList() {
	let temp = await userStore.getANumberOfOperations(page.value, limit.value);
	temp.data = temp.data.map(op => {
		op.date = op.date.match(/[0-9]*-[0-9]*-[0-9]*/g);
		return op;
	});
	pages.value = temp.numberOfPages;
	return temp;
}

async function deleteOperation(operation) {
	const confirm = window.confirm('Are you sure about to delete ' + operation.name + '?');
	if (confirm) {
		await userStore.deleteOperation(operation.id);
		const temp = await getList();
		operationsList.value = temp.data;
	}
}

onMounted(async () => {
	const temp = await getList();
	operationsList.value = temp.data;
});

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0
});

const previusPage = async () => {
	if (page.value > 1) {
		page.value--
		const temp = await getList();
		operationsList.value = temp.data;
	}
};
const nextPage = async () => {
	if (pages.value > page.value) {
		page.value++
		const temp = await getList();
		operationsList.value = temp.data;
	}
};
</script>


<template>
	<h1 class="operations-header">Operations</h1>
	<router-link to="/operations/add" class="add-botton">Add Operation</router-link>

	<div class="list-container">
		<ul class="list" v-for="operation in operationsList">
			<li class="list-item">
				<p>{{operation.type}} - {{operation.name}}</p>
				<p>{{formatter.format(operation.amount)}}</p>
			</li>
		</ul>
	</div>

	<div class="table-container">
		<table class="table">
			<thead>
				<tr>
					<th class="table-header">Name</th>
					<th class="table-header">Type</th>
					<th class="table-header">Amount</th>
					<th class="table-header">Date</th>
					<th class="table-header">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="operation in operationsList">
					<td>{{operation.name}}</td>
					<td>{{operation.type}}</td>
					<td>{{formatter.format(operation.amount)}}</td>
					<td>{{operation.date[0]}}</td>
					<td>
						<router-link :to="`/operations/edit/${operation.id}`" class="edit-btn">Edit</router-link>
						<button @click="deleteOperation(operation)" class="delete-btn">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="pages-container">
		<span @click="previusPage" class="previus-btn">Previus</span>
		<span class="page">{{page}}</span>
		<span @click="nextPage" class="next-btn">Next</span>
	</div>

</template>


<style scoped>
.table {
	width: 90%;
	margin: 40px auto;
	text-align: center;
}

.table-header {
	font-weight: 500;
}

.edit-btn {
	margin: 0 1%;
	padding: 2% 3%;
	text-decoration: none;
	color: #fff;
	background-color: #0069D9;
	border-radius: 5px;
	cursor: pointer;
}

.delete-btn {
	padding: 2% 3%;
	color: #fff;
	border: none;
	font-weight: 300;
	background-color: #C82333;
	border-radius: 5px;
	cursor: pointer;
}

.list-container {
	display: none;
	padding: 25px;
}

.list {
	list-style: none;
	margin-bottom: 15px;
	padding: 0;
}

.list-item {
	padding-top: 10px;
	text-align: center;
	border-bottom: 1px solid #757575;
}

.pages-container {
	display: flex;
	width: fit-content;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
	margin-left: auto;
	margin-right: auto;
}

.page {
	padding: 10px;
	border-radius: 5px;
	background-color: #4ecca3;
}

.add-botton {
	display: block;
	width: 35%;
	max-width: 150px;
	margin-left: auto;
	margin-right: auto;
	padding: 8px;
	color: #fff;
	text-align: center;
	text-decoration: none;
	border-radius: 5px;
	background-color: #343A40;
	cursor: pointer;
}

.operations-header {
	text-align: center;
	font-weight: 500;
}

.previus-btn,
.next-btn {
	cursor: pointer;
}


@media screen and (max-width: 460px) {

	.table-container {
		display: none;
	}

	.list-container {
		display: block;
	}
}
</style>