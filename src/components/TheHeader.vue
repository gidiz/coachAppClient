<template>
  <header>
    <nav>
      <h1><router-link to="/">דף הבית</router-link></h1>
      <ul>
        <li><router-link to="/ListOfClasses">רשימת אימונים</router-link></li>
        <li><router-link to="/AddClasses">הוספת אימונים</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(to left, rgb(67, 206, 162), rgb(24, 90, 157));
}
</style>
