<template>
  <div class="siderbar">
    <el-menu
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#3ec0af"
      mode="vertical"
      router
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
       @select="menuClick"
    >
      <sidebar-item :menu="getrouters"/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./sidebarItem";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["getrouters", "getsidebar"]),
    
    isCollapse() {
      return !this.getsidebar.opened;
    },
    variables() {
      return variables;
    }
  },
  mounted(){
       menuClick() {
      this.$store.dispatch('clearSearch')
    }
  }
};
</script>
<style>
 
</style>
