<template>
<form @submit.prevent="onSubmit()">
  <div class="form-group">
    <input type="text" name="title" placeholder="Title" v-model="title">    
  </div>
  <div
  v-for="(option, index) in options" 
  :key="index"  class="form-group">  
    <input type="text" 
    :name="`option${index + 1}`"
    :placeholder="`Option ${index + 1}`"
    v-model="options[index]">

    <button
    type="button"
    class="btn btn-link"
    @click="remove(index)"
    v-if="options.length > 2">
      Remove
    </button>
  </div>
  <div class="form-group">
    <button
    type="button"
    class="btn btn-link"
    @click="add()">
      Add
    </button>
  </div>
  <input type="submit">
</form>
</template>

<script>
export default {
  name: 'create',
  data(){
    return {
      title: "",
      options: ["",""]
    }
  },
  methods: {
    onSubmit(){
      console.log(this.title, this.options)
    },
    add(){
      this.options.push("")
    },
    remove(index){
      this.options.splice(index, 1)
    }
  }
  
}
</script>

<style scoped>
</style>
