<template>
    <div class="app-wrapper">
      <div class="aside">
        <sidebar></sidebar>
      </div>
      <div class="container">
        <div class="header">
          <Header></Header>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Sidebar from "./sidebar/index"
import Header from "./header/header"
export default {
  components:{
    Sidebar,
    Header
  }

}
</script>

<style lang="scss">
  .app-wrapper{
    display: flex;
    height: 100vh;
    overflow: hidden;
    overflow-x: hidden;
    .aside{
      overflow-x: hidden;
      background: #304156;

    }
    .container{
      flex: 1;
       overflow-x: hidden;
       background-color: #f3f3f3;
      
    }
    
  }
</style>