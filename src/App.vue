<template>
  <!-- <addBlog></addBlog> -->
  <div>
      <!-- <showBlogs></showBlogs>
    <listBlogTitles></listBlogTitles> -->
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>

import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogTitles from './components/listBlogs'
import header from './components/header'
export default {

  components:{
    'addBlog':addBlog,
    'showBlogs':showBlogs,
    'listBlogTitles':listBlogTitles,
    'appHeader': header
  },
  data(){

  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>