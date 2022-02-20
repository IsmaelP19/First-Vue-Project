<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="menu">
    <nav class="navbar-menu">
        <RouterLink to="/menu/entrantes">Entrantes</RouterLink>
        <RouterLink to="/menu/pizzas">Pizzas</RouterLink>
        <RouterLink to="/menu/pastas">Pastas</RouterLink>
        <RouterLink to="/menu/hamburguesas">Hamburguesas</RouterLink>
        <RouterLink to="/menu/sandwiches">Sandwiches</RouterLink>
        <RouterLink to="/menu/turca">Comida Turca</RouterLink>
        <RouterLink to="/menu/ensaladas">Ensaladas</RouterLink>
        <RouterLink to="/menu/carnes">Carnes</RouterLink>
        <RouterLink to="/menu/baguettes">Baguettes</RouterLink>
        <RouterLink to="/menu/bocatas">Bocatas</RouterLink>  
        <RouterLink to="/menu/montaditos">Montaditos</RouterLink>
        <RouterLink to="/menu/menus">Menús</RouterLink>
        <RouterLink to="/menu/refrescos">Refrescos</RouterLink>
        <RouterLink to="/menu/postres">Postres</RouterLink>
    </nav> 

    <RouterView />
   
  </div>
</template>

<style>
.navbar-menu {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    
    
}
.navbar-menu a {
  text-transform: uppercase;
}
</style>
