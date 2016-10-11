<template>
  <div>
    <p>
      Foo
    </p>
    <a @click="login">click me, then send user to hello</a>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    methods: {
      login() {
        let user = {
          name: "bruce",
          age: 18
        };
        this.$store.dispatch('setCurrentUser',user);
        console.log(this.$store.state.curUser);
      }
    }
  }
</script>


