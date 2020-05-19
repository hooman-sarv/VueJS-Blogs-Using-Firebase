<template>
    <div v-theme:column="'wide'" id="showBlogs">
        <h1>List Blog Titles</h1>
        <input type="text" placeholder="Search..." v-model="search" />

        <div class="singleBlogs" v-for="(item,index) in filteredBlogs" :key="index">
            <h2 v-rainbow>{{item.title | toUpperCase}}</h2>
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(res){
                console.log(res);
                this.blogs = res.body.slice(0,10)
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