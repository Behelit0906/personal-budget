<script setup>
import { useAuthStore } from '../stores';
import { ref } from 'vue';

const isActive = ref('');
const authStore = useAuthStore();

function active() {
    if (!isActive.value)
        isActive.value = 'show';

    else {
        isActive.value = 'hide';
        setTimeout(() => {
            isActive.value = '';
        }, 490);
    }
}

</script>
    
<template>
    <nav v-show="authStore.user" class="navbar">
        <div class="desktop-menu">
            <router-link to="/">Home</router-link>
            <router-link to="/operations">Operations</router-link>
            <button @click="authStore.logout()" class="align-self-rigth">Logout</button>
        </div>
        <div class="mobile-menu">
            <img src="../assets/icons/menu.svg" alt="hamburguer-menu" @click="active" class="menu-icon">
            <div class="mobile-menu-options-container" :class="isActive">
                <ul class="mobile-menu-list">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/operations">Operations</router-link>
                    </li>
                    <li>
                        <button @click="authStore.logout()">Logout</button>
                    </li>
                </ul>
            </div>
            <div class="logo">My budget</div>
        </div>
    </nav>

</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
}

button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: #343A40;
    color: white;
    cursor: pointer;
}


.navbar {
    padding: 18px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    background-color: #343A40;
}

.desktop-menu {
    display: flex;
    column-gap: 30px;
    font-size: 1.2rem;
}

.align-self-rigth {
    position: absolute;
    right: 30px;
}

.mobile-menu {
    width: 100%;
    display: none;
}

.menu-icon {
    width: 40px;
    cursor: pointer;
}

.logo {
    color: white;
    font-size: 1.4rem;
}

.mobile-menu-options-container {
    display: none;
    position: absolute;
    left: 0%;
    top: 8%;
    padding-top: 30px;
    width: 70%;
    height: 92vh;
    background-color: #343A40;
}

.mobile-menu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mobile-menu-list li {
    padding: 10px 0 10px 20px;

    margin-bottom: 10px;
    border-bottom: 1px solid rgba(182, 180, 180, 0.5);
}

.show {
    display: block;
    animation: moveToRight 0.5s ease-in-out;
}

.hide {
    display: block;
    animation: moveToLeft 0.5s ease-in-out;
}

@keyframes moveToRight {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}

@keyframes moveToLeft {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-101%);
    }
}

@media screen and (max-width: 460px) {
    .desktop-menu {
        display: none;
    }

    .mobile-menu {
        display: flex;
        align-items: center;
        column-gap: 25%;
    }
}
</style>