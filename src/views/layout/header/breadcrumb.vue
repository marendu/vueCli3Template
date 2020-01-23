<template>
    <div class="navbar clearfix">
        <el-breadcrumb class="breadcrumb-container" separator="/">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                levelList: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {
                console.log(this.$route.matched,111);
                //router.路由记录
                let matched = this.$route.matched.filter(item => item.name)
                const first = matched[0];
                // 判断是否在首页，不在就默认添加首页的面包屑
                if (first && first.name.trim().toLocaleLowerCase() !== 'Home'.toLocaleLowerCase()) {
                    matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
                }
                this.levelList = matched
              
            }
        }
    }
</script>