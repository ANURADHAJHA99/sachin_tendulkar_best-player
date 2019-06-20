<template>
  <div id="app">
    <el-container>
      <el-aside width="2000px" height="20px">
         <Sidebar />
         <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <transition name="page" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
      </el-aside>
      
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(19, 20, 36);
}

.container {
  max-width: 20px;
  margin: auto;
}

.el-aside {
  background:rgb(19, 20, 36);
  color: white;
  

}

.logo-container {
  padding: 20px;
  text-align: center;
  background: #434A50;
}

.el-main {
  background:rgb(19, 20, 36);
}

.card {
    border-radius: 0px;
    border: 1px solid rgb(255, 255, 255);
    background-color:rgb(27, 33, 54);
    overflow: hidden;
    color: rgb(255, 255, 255);;
    transition: .3s;
   
  margin-left: 300px;
  box-align: center;

    width: 1000px;
  height: 100x;
}

.card:hover {
    transition: .5s;
    box-shadow: 0 2px 12px 0 rgba(228, 13, 13, 0.1);
    border-collapse: separate;
    border-spacing: 100px;
}

.result {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin-top: 0px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 12px;
    margin-inline-end: 0px;
}

.result-ps {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: normal;
    display: block;
    margin-top: 10px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 12px;
    margin-inline-end: 0px;
    max-width: 100%;
    text-align: left;
    margin-left: 12px;
}

.title-imp {
  color: rgb(250, 249, 249);
    font-size: 25px;
    font-weight: bold;
    display: block;
    margin-top: 10px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 12px;
    margin-inline-end: 0px;
    max-width: 100%;
}

h1 {
    color: rgb(245, 239, 234);
    font-size: 25px;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.card-center{
width: 1680px;
height: 250px;
border: 1px solid rgb(255, 255, 255);
margin-right: 12px;
}
.card-bottom{
  width: 1680px;
height: 100px;
border: 1px solid rgb(255, 255, 255);
margin-right: 12px
}
</style>
