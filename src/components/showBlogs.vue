<template>
    <div v-theme:column="'wide'" id="showBlogs">
        <h1>All Blogs Article</h1>
        <input type="text" placeholder="Search..." v-model="search" />

        <div class="singleBlogs" v-for="(item,index) in filteredBlogs" :key="index">
            <router-link v-bind:to="'/blog/'+ item.id"><h2 v-rainbow>{{item.title | toUpperCase}}</h2></router-link>
            <article>{{item.content | minifyText}}</article>
        </div>
    </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin'

export default { 

    data(){
        return{
            blogs:[],
            search:'',
        }   
    },
    methods:{
        
    },
    created(){
        this.$http.get('https://vuejs-blogs-b80e2.firebaseio.com/posts.json')
            .then(function(res){
                return res.json()
            }).then(function(res){
                var blogsArray = [];
                for (let key in res) {
                    console.log(res[key]);
                    res[key].id = key;
                    blogsArray.push(res[key])
                }
                console.log(blogsArray);
                this.blogs = blogsArray
                
            })
    },
    computed:{

    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase()
        }
    },
    directives:{
        'rainbow':{
            bind(el, binding, vnode){
                el.style.color = '#' + Math.random().toString().slice(2,8);
             } 
        }
    },
    mixins:[searchMixin]
}
</script>

<style>
#showBlogs{
    max-width: 800px;
    margin: 0 auto;
}
.singleBlogs{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>