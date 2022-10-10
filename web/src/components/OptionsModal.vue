<script setup>
const emit = defineEmits(['action']);

function send(actionName) {
    emit('action', actionName);
}
</script>

<template>
    <div class="background">
        <div>
            <button @click="send('edit')" class="option-button add-btn">Edit</button>
            <button @click="send('delete')" class="option-button delete-btn">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
}


.option-button {
    display: inline-block;
    width: 70px;
    margin: 3px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-weight: 300;
    color: #ffffff;
    background-color: #4ecca3;
}

.delete-btn {
    background-color: #C82333;
}

.add-btn {
    background-color: #0069D9;
}
</style>