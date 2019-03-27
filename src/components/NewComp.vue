<template>
    <div>
       <p> The safely stored num {{safelyStoredNumber}}</p>
      
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
   
  computed: {
    ...mapGetters(["safelyStoredNumber"])
  }
}

</script>

<style>
</style>
