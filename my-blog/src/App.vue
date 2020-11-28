<template>
  <div id="app">
    <!-- <addblog></addblog> -->
    <!-- <showblogs></showblogs> -->
    <blogshead></blogshead>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog'
import BlogsHead from './components/BlogsHead.vue'
import ShowBlogs from './components/ShowBlogs'



export default {
  name: 'App',
  components: {
    "addblog":AddBlog,
    "showblogs":ShowBlogs,
    "blogshead":BlogsHead
  }
}
</script>

<style>

</style>
