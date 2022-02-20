<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="items-wrapper">
    
    <div class="item">
        <div class="description">
            <span class="item-header">Cheese Bacon</span>
            <span class="ingredients">Patatas, Bacon braseado, Ali-Oli y Queso Fundido o Queso Cheddar</span>
        </div>

        <div class="price">
            <span class="item-price">Media</span>
            <span class="item-price">3€</span>
            <span class="item-price">Entera</span>
            <span class="item-price">5€</span>
            
        </div>
 
        
    </div>
      
    
    <RouterView />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');


.items-wrapper {
    background-color: rgba(255, 255, 255, 0.356);
    min-height: 50vh;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

.item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1.5rem;
}

.description {
    display: flex;
    
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 80%;
    
}

.price {
    width: 20%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    max-width: 100%;
}

.price span {
    text-align: end;
    text-transform: uppercase;
    font-family: 'Patua One', cursive;
    font-size: 1.2rem;
    color: #fab940;
    padding: 5px;
}

.item-header {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Patua One', cursive;
    color: #000000;
}

.ingredients {
    font-size: 1rem;
    font-family: 'Patua One', cursive;
    color: #000000;
}

</style>
