<template>
  <div id="app">
    <keep-alive exclude="about">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "../src/style/tongyong";
* {
  margin: 0;
  padding: 0;
}
</style>
