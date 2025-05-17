<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/api">API данные</router-link> |
      <router-link to="/form">Форма отправки</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>