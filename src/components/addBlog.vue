<template>
  <div id="addBlog">
      <h2>Add new blog post</h2>
      <form v-if="!submitted"> 
          <label>Blog Title :</label>
          <input type="text" v-model.lazy="blog.title" required/>
          <label>Blog Contetnt</label>
          <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>

          <div id="checkboxes">
              <label>Ninjas</label>
              <input type="checkbox" value="ninjas" v-model="blog.categories" />
              <label>Wiazrds</label>
              <input type="checkbox" value="wizards" v-model="blog.categories" />
              <label>Mario</label>
              <input type="checkbox" value="mario" v-model="blog.categories" />
              <label>Cheese</label>
              <input type="checkbox" value="cheese" v-model="blog.categories" />
          </div>

          <label>Authors:</label>
          <select v-model="blog.author"> 
              <option v-for="(item , index) in authors" :key="index">{{item}}</option>
          </select>
          <button v-on:click.prevent="post">Add Blog</button>
      </form>

        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>

      <div id="preview">
          <h3>preview Title</h3>
          <p>Blog title: {{blog.title}}</p>
          <p>Blog content:</p>
          <p>{{blog.content}}</p>
          <p>Blog Categories:</p>
          <ul>
              <li v-for="(item , index) in blog.categories" :key="index">{{item}}</li>
          </ul>
          <p>Author : {{blog.author}}</p>
      </div>

  </div>
</template>

<script>
export default {
  data(){
      return{
          blog:{
            
                title:'',
                content:'',
                categories:[],
                author:''
          },
          authors:['Hooman','Shayan','Mostafa','Hossein'],
          submitted:false
      }
  },
  methods:{
      post:function(){
          this.$http.post('https://vuejs-blogs-b80e2.firebaseio.com/posts.json',this.blog)
                
                .then(function(res){
              console.log(res);
              this.submitted = true
              
          })
      }
  }
}
</script>





<style>
#addBlog *{
    box-sizing: border-box;
}
#addBlog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkbxes input{
    margin-right:10px;
    display: inline-block;
}
#checkboxes label{
    display: inline-block;

}
</style>