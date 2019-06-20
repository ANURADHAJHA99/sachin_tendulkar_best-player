<template>
    <div class="top-bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item @click="routeHome()" index="1">
            <i class="el-icon-d-arrow-right"></i>
            <span>Getting Started</span>
            </el-menu-item>
            <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-view"></i>
                <span>Visualization</span>
            </template>
            <el-menu-item-group title="Batting Statistics">
                <el-menu-item @click="routeBattingODI()" index="1-1">ODI</el-menu-item>
                <el-menu-item @click="routeBattingTest()" index="1-2">Test</el-menu-item>
                <el-menu-item @click="routebatting_test_2004()" index="1-3">2004 statistics</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Bowling Statistics">
                <el-menu-item @click="routeBowlingODI()" index="1-3">ODI</el-menu-item>
                <el-menu-item @click="routeBowlingTest()" index="1-4">Test</el-menu-item>
                 
            </el-menu-item-group>
            </el-submenu>
            <el-menu-item @click="routeConclusion()" index="4">
            <i class="el-icon-tickets"></i>
            <span>Conclusion</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  methods: {
    //handleOpen(key, keyPath) {
    //  console.log(key, keyPath);
    //},
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // route methods
    routeHome() {
      this.$router.push({ path: '/' });
    },
    routeBattingODI() {
      this.$router.push({ path: 'battingODI' });
    },
    routeBattingTest() {
      this.$router.push({ path: 'battingTest' });
    },
    routeBowlingODI() {
      this.$router.push({ path: 'bowlingODI' });
    },
    routeBowlingTest() {
      this.$router.push({ path: 'bowlingTest' });
    },
   
    
    routeConclusion() {
      this.$router.push({ path: 'conclusion' });
    },
    routebatting_test_2004(){
      this.$router.push({path:'batting_test_2004'});
    },
  },
};
</script>

<style scoped>
.el-menu {
  border-right: 0 !important;
}
.side-bar{
  background-color: rgb(24, 221, 221)
}
</style>
