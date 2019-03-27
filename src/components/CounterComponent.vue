<template>
    <div>
       <p> The safely stored num {{safelyStoredNumber}}</p>
       <button @click='incrementStoredNumber'>+</button>
       <input type="number" @keyup.enter="setStoredNumber(number)" v-model="number"/>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
    data(){
        return {
            number:0
        }
    },
  computed: {
    ...mapGetters(["safelyStoredNumber"])
  },
  methods:{
      ...mapMutations([
          'incrementStoredNumber',
          'setStoredNumber'
      ]),
      ...mapActions([
          'prvaAkcija'
      ])
  }
};
</script>

<style>
</style>
