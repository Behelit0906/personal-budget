<script setup>
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

import { useUserStore } from '../../stores';

const page = ref(1);
const limit = ref(5);
const userStore = useUserStore();

const operations = computed(async () => {
	let temp = await userStore.getANumberOfOperations(page.value, limit.value);
	temp = temp.data;
	temp = temp.map(op => {
		op.date = op.date.match(/[0-9]*-[0-9]*-[0-9]*/g);
		return op;
	});

});

</script>
    

    