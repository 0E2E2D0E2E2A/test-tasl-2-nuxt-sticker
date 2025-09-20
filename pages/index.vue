<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Главная</h1>
    <NuxtLink to="/sticker" class="link-button">Перейти к котикам</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 50px;
  background: linear-gradient(135deg, #6f83c1 0%, #a07ed2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  text-align: center;
  transition: all 0.5s ease-in-out;

  h1 {
    font-size: 6rem;
    margin-bottom: 40px;
    background: linear-gradient(90deg, #ff9a9e, #fad0c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeIn 1.5s ease-in-out forwards;
    transition: all 0.5s ease-in-out;
  }

  .link-button {
    padding: 15px 30px;
    background: #ff9a9e;
    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    color: white;
    font-weight: bold;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      background: linear-gradient(45deg, #a18cd1, #fbc2eb);
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
