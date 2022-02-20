<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>  
  <div class="global">  
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>  
      </nav>
    </div>

    <RouterView />
  </div>

</template>

<style>
@import '@/assets/base.css';

body {
  background: image('@/assets/background-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  color: #000000;

}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  
}

.global {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
} 

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: #fab940;
  transition: 0.4s;
  font-weight: bold;
}



@media (hover: hover) {
  a:hover {
    background-color: #fab9404f;
  }
}

nav {
  display: flex;
  font-size: 12px;
  text-align: center;
  align-items: center;
  margin-top: 0;
  

}



nav a.router-link-exact-active {
  color: #000000;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid hsl(0, 0%, 0%)
}

nav a:first-child {
  border-left: 0;
}


@media (min-width: 1024px) {

  .wrapper {
    width: 100%;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-content: center;
    background-color: #6A6A6A;
    padding: 2rem;
  }

 

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0;
    background-color: #6A6A6A
  }
}
</style>
