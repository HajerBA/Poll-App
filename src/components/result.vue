<template>
<section>
    <h4>Résultat de vote sur {{poll.title}}</h4>
    <h5>{{nbrtotal()}} vote(s)</h5>
  <div  v-for="(option, index) in poll.options" 
    :key="index">
    <p > {{option.text}}</p>
    <div class="progress">
        <div class="progress-bar"  :style="`width:${option.count*100/nbrtotal()}%`">
         {{(option.count*100/nbrtotal()) | round }} %
        </div>
    </div> 
  </div>
</section>
</template>

<script>
import round from 'vue-round-filter';

export default {
  name: "result",
 
  filters: {
    round,
  },
  data() {
    return {
      poll: {
        id: 1,
        title: "Que boire au petit-déjeuner ?",
        options: [
          { id: 1, text: "Thé", count: 10 },
          { id: 2, text: "Café", count: 15 },
          { id: 3, text: "Jus d'orange", count: 2 },
          { id: 4, text: "Rien, je suis en retard", count: 21 }
        ]
      }
    }
  },
  computed: { //pa de parametre et elle est comme une data
    
  },
  methods: {
    nbrtotal() {
      let som = 0;
      this.poll.options.forEach(function(elem) {
        som += elem.count;
      });
      return som;
    },
    vote() {
     // return this.poll.options[2].count;
    }
  }
};
</script>

<style>

</style>
