<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{user.name}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        msg: 'Hello Vue!',
        user: {}
      }
    },
    mounted() {
      this.user = this.$store.getters.getCurrentUser;
      console.log("d=",this.user);
    }
  }
</script>
