<template>
  <div id="showblogs">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="blog in filteredBlogs" class="singleblog">
        <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title}}</h2></router-link>
        <article>{{blog.content}}</article>
      </div>
  </div>
</template>
<script>
export default {
  name: 'showblogs',
  data () {
    return {
      blogs: [],
      search:""
    }
  },
  methods: {
      getData () {
            this.$http.get("https://vue-demo-2b175.firebaseio.com/posts.json")
            .then(function(data){
              return data.json();
                this.blogs=data.body.slice(0,10);
            })
            .then(function(data){
              var blogsArray=[];
              for(let key in data){
                data[key].id=key;
                blogsArray.push(data[key]);
              }
              this.blogs=blogsArray;
            })
      }
  },
  mounted() {
      this.getData();
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  }
}
</script>
<style scoped>
    #showblogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .singleblog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
        border: 1px dotted #aaa;
    }
    #showblogs{
      background-color: lightcoral;
      padding: 20px;
    }
    #showblogs a{
      text-decoration: none;
    }
    input[type="text"]{
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
</style>