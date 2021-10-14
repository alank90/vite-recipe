<template>
  <header>
    <div class="container">
      <router-link to="/">
        <h1>Alan's Recipes</h1>
      </router-link>
      <img src="../assets/images/soup.jpg" alt="" />
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 4px solid;
  background: #fff;
}

.container {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  height: 100%;
}
</style>