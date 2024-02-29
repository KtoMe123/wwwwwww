<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'
const open = ref(false)
const Name = ref(null)
const Password = ref(null)

const users = ref([
  {
    Name: One,
    Pass: 123
  },
  {
    Name: Two,
    Pass: 321
  },
])


const Login = () => {


  if(Name.value === null || Name.value === undefined || Name.value === '' ) {
    alert('sdsd')
    document.querySelector('.login__button').style = 'border-color: red;'
  }
  else if(Password.value === undefined || Password.value === null || Password.value === '' ) {
    document.querySelector('.login__button').style = 'border-color: red;'
  } else {
    open.value = false
    Name.value = null
    Password.value = null
  }
}
</script>

<template>
<div class="container">
  <header class="header">
    <h1 class="name">
      Складик
    </h1>
    <ul class="nav-list">
      
      <li class="nav-item">
        <a href="/" class="item">Items</a>
        <a href="history" class="item">History</a>
      </li>
      <li class="nav-item"> <a href="#" @click="open = true" class="item">Login</a></li>
    </ul>
  </header>
  <div>
    
  </div>
  <router-view></router-view>
</div>
  <teleport to="body">
    <div v-if="open === true" class="login">
      <input class="login__input" type="text" placeholder="Name" v-model="Name">
      <input class="login__input" type="text" placeholder="Password" v-model="Password">
      <button class="login__button" @click="Login()">Login</button>
    </div>
    <div @click="open = false;" v-if="open === true" class="login-back"></div>
    
  </teleport>
</template>

<style lang="scss" scoped>


.container {
  box-shadow: 0px 0px 70px 62px rgba(0, 0, 0, 0.25);
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.25);
  width: 1200px;
  height: 800px;
}

.header {
  display: flex;
}

.name {
  font-size: 25px;
  color: rgb(75, 82, 217);
  margin-left: 25px;
  user-select: none;
}

.nav {
  
  &-list {
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    display: flex;


  }
  &-item {
    user-select: none;
    display: flex;
   
      
    & .item {
      color: #fff;
      margin-left: 20px;
      &:hover {
        color: rgb(75, 82, 217);
        transition: 0.3s;
      }
    }
  }

}

.login {
  width: 400px;
  height: 200px;
  background: #363636;
  position: absolute;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  &-back {
    background: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0.7;
      margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  }
  &__input {
    font-size: 20px;
    padding: 8px;
    margin: 10px 5px;
  }
  &__button {
    border-radius: 0;
    margin-top: 30px;
  }
}
</style>
