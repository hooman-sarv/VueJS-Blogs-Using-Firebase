<template>
  <div id="singleBlog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <p>Author: {{blog.author}}</p>
      <ul>
          <li v-for="(item,index) in blog.categories" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vuejs-blogs-b80e2.firebaseio.com/posts/' + this.id + '.json')
            .then(function(res){
                console.log(res.json());
                return res.json()
            }).then(function(res){
                this.blog = res;
            })
    }
}
</script>

<style>
#singleBlog{
    max-width: 960px;
    margin: 0 auto;
    background: #eee;
    padding: 10px;
}
</style>