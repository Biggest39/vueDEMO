<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
    </div>
</template>
<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
     methods: {
      getData () {
            this.$http.get('https://vue-demo-2b175.firebaseio.com/posts/' +this.id+".json")
            .then(function(data){
                return data.json();
                this.blog=data.body;
            })
            .then(function(data){
                this.blog=data;
            })
      }
  },
  mounted() {
      this.getData();
  }
}
</script>
<style scoped>
    #single-blog{
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background:lightseagreen;
        border: 1px dotted #aaa;
    }
</style>