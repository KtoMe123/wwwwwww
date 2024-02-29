<script setup>
import { ref } from 'vue'



const update = ref(false)
const open = ref(false)
const Name = ref()
const UpdateName = ref()
const Price = ref()
const Count = ref()

const list = ref([
  {
    price: 100,
    name: "chips",
    count: 20
  },
  {
    price: 15000,
    name: "phone",
    count: 10
  },
  {
    price: 10,
    name: "buble",
    count: 200
  },
])

const count = ref(0)

let Open = () => {
  open.value = true
  Name.value = null
  Price.value = null
  Count.value = null
}

let AddProduct = () => {
  if(update.value === true) { 
    list.value = list.value.filter((arr) => arr.name !== UpdateName.value)
    update.value = false
  }
  list.value.unshift({
    price: Price.value,
    name: Name.value,
    count: Count.value
  })
}

let Update = (name, price, count) => {
  Name.value = name
  UpdateName.value = name
  Price.value = price
  Count.value = count
  update.value = true
  open.value = true

}
</script>

<template>
  <div class="btn"><button @click="Open()" class="btn-add">Создать</button></div>

  <div class="product">
    <ul class="product__list" v-for="list in list" :key="list.name">
      <li @click="Update(list.name, list.price, list.count)" class="product__item">
        <div class="product__item-name">{{list.name}}</div>
        <div class="product__item-price">{{list.price}} ₽</div>
        <div class="product__item-count">кол-во {{list.count}} шт</div>
      </li>
    </ul>
  </div>

  <teleport to="body">
    <div v-if="open === true" class="new-product">
      <input class="new-product__input" type="text" placeholder="name" v-model="Name">
      <input class="new-product__input" type="text" placeholder="price" v-model="Price">
      <input class="new-product__input" type="text" placeholder="count" v-model="Count">
      <button class="new-product__button" @click="AddProduct()">Add</button>
    </div>
    <div @click="open = false; update = false;" v-if="open === true" class="new-product-back"></div>
    
  </teleport>
</template>

<style lang="scss" scoped>

.btn {
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
 &-add {
  background: rgb(30, 39, 207);
  font-size: 14px;
  padding: 8px 15px;
  margin: 0 30px;
}
}

.product {
  &__list {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    &:first-child {
      margin-top: 25px;
    }
  }
  &__item {
    display: flex;
    justify-content: space-around;
    width: 100%;
    cursor: pointer;
    &-name, &-price, &-count {
      width: 100%;
      height: 100%;
      border: solid 1px #fff;

      
    }
    &:hover {
      transition: 0.5s;
      background: #232222;
      color: rgb(30, 39, 207);
      
    }
  }
}

.new-product {
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
  }
}

</style>
