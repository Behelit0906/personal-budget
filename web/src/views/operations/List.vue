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
	return temp;
}

async function deleteOperation(id) {
	await userStore.deleteOperation(id);
	const temp = await getList();
	operationsList.value = temp.data;
	page.value = temp.numberOfPages;
}

onMounted(async () => {
	const temp = await getList();
	operationsList.value = temp.data;
	page.value = temp.numberOfPages;
});

</script> 