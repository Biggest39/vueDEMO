<template>
  <div id="addblog">
    <h2>添加博客</h2>
    <form v-if="!submmited">
        <label class="blgs">博客标题</label>
        <input class="blgsTitle" type="text" v-model="blog.title" required>
        <label class="blgs">博客内容</label>
        <textarea class="blgsContent" v-model="blog.content"></textarea>
        <div id="checkBox">
            <label class="checkLabel">Vue.js</label>
            <input class="checkInput" type="checkbox" value="Vue.js" v-model="blog.kinds">
            <label class="checkLabel">Node.js</label>
            <input class="checkInput" type="checkbox" value="Node.js" v-model="blog.kinds">
            <label class="checkLabel">React.js</label>
            <input class="checkInput" type="checkbox" value="React.js" v-model="blog.kinds">
            <label class="checkLabel">Angular.js</label>
            <input class="checkInput" type="checkbox" value="Angular.js" v-model="blog.kinds">
        </div>
        <label class="blgs">作者</label>
        <select class="people" v-model="blog.author">
            <option v-for="(author) in authors">
                {{author}}
            </option>
        </select>
        <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
        <h3>您的博客发布成功！</h3>
    </div>
    <hr>
    <div id="view">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容</p>
        <p>{{blog.text}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="(kind) in blog.kinds">
                {{kind}}
            </li>
        </ul>
        <p>作者:{{blog.author}}</p>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'addblog',
  data () {
    return {
      blog:{
          title:"",
          content:"",
          kinds:[],
          author:""
      },
      authors:["小红","小明","小帅"],
      submmited:false
    }
  },
  methods:{
      post:function(){
          this.$http.post("https://vue-demo-2b175.firebaseio.com/posts.json",this.blog)
          .then(function(data){
              console.log(data);
              this.submmited=true;
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #addblog *{
        box-sizing: border-box;
    }
    #addblog{
        margin: 20px auto;
        padding: 20px;
        max-width: 800px;
        background-color: lightseagreen;
    }
    .blgs{
        display: block;
        margin: 20px 0 10px;
    }
    .blgsTitle{
        display: block;
        width: 100%;
        padding: 8px;
    }
    .blgsContent{
        display: block;
        width: 100%;
        padding: 8px;
        height: 200px;
    }
    .people{
        display: block;
        width: 100%;
        padding: 8px;
    }
    .checkLabel{
        display: inline-block;
        margin-top: 0px;
    }
    .checkInput{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
    #view{
        margin: 30px 0;
        padding: 10px 20px;
        border: 1px dotted #ccc;
    }
</style>