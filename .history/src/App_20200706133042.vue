<template>
  <div id="app">
    <keep-alive ><!--exclude="about" 除开这个路由的其他路由组件都要缓存状态-->
                 <!--include="about" 只缓存这个页面的状态-->
                 <!--如果什么都不加，则缓存所有组件的状态-->
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
