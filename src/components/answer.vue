<template>
  <form @submit.prevent="onSubmit()">
    <h2>{{poll.title}}</h2>
    <div
    v-for="(option, index) in poll.options" 
    :key="index"  class="form-group">
      <input type="radio" 
      name="poll"
      :value="option.id"
      v-model="picked">
    <label for="">{{option.text}}</label>
    </div>
    <input type="submit">
  </form>
</template>

<script>
export default {
  name:'answer',
  data(){
    return {
      picked: null,
      poll: {
          title: "Que boire au petit dej ?",
          options: [
            {id: 1, text: "Thé"},
            {id: 2, text: "Café"},
            {id: 3, text: "Jus d'orange"},
            {id: 4, text: "Rien, je suis en retard"},
          ]
        }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.picked)
    }
  }

}
</script>

<style>

</style>
