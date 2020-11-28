<template>
    <div class="nav">
        <ul class="top">
            <li class="topList">
                <router-link to="/" exact>博客</router-link>
                <router-link to="/add" exact>写博客</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"blogshead"
}
</script>
<style scoped>
    .top{
        list-style-type: none;
        text-align: center;
        margin: 0px;
    }
    .topList{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
    }
    .nav{
        max-width: 840px;
        background: darkblue;
        padding: 30px 0;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .router-link-active{
        color:lightgreen;
    }
</style>