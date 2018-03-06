<template>
<div class="maclasse">
   <form @submit.prevent="onSubmit()">
  <h2>poll.title</h2>
  <div
  v-for="(option, index) in poll.options" 
  :key="index"  class="form-group">
    <input type="radio" 
    value="option.text"
    v-model="poll.checked"
    required>
  <input type="submit">
  </form>
</div>
</template>

<script>
export default {
    name:'answer',
  data () {
    return {
      poll: {
      title: "Que boire au petit dej ?",
      options: [
        {text: "Thé", checked: false},
        {text: "Café", checked: false},
        {text: "Jus d'orange", checked: false},
        {text: "Rien, je suis en retard", checked: false},
  ]
}
    }
  },
  
    methods: {
    onSubmit(){
      
        console.log(this.poll.options)
      
      
     }
    }
}
</script>
<style>
.maclasse{
  border: 1px solid;
  margin: auto;
  width: 400px;
}
</style>
