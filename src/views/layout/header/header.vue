<template>
  <div class="header">
      <!-- <i
        :class="[
        getsidebar.opened ? 'el-icon-caret-right' : 'el-icon-caret-left',
        'icon'
      ]"
        @click="toggleSideBar"
      ></i> -->
      <img class="hamburger"  :class="{'is-active':getsidebar.opened}" @click="toggleSideBar" src="../../../assets/icon/zhedie.png" alt="">
    <Bredcrumb/>
    <!-- 右侧下拉菜单 -->
    <div class="avatar-container" id="header-right">
      <span  >{{getUser}}</span>
      <span style="margin:0 10px 0 10px;">|</span>
       <span @click="logout" >
        退出
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Bredcrumb from "./breadcrumb"
export default {
  components: {
    Bredcrumb,
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
   
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push(`/login`);
    }
  },
  computed: {
    ...mapGetters(["getsidebar","getUser"])
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #ffffff;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
}


.hamburger {
	display: inline-block;
	cursor: pointer;
	width: 30px;
	height: 30px;
	transform: rotate(90deg);
	transition: .38s;
	transform-origin: 50% 50%;
  margin-right: 10px;
}
.hamburger.is-active {
	transform: rotate(0deg);
}
.avatar-container {
  height: 40px;
  display: inline-block;
  position: absolute;
  right: 35px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
}


</style>
