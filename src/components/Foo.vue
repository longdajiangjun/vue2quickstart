<template>
  <div>
    <p>
      Foo
    </p>
    <a @click="login">click me, then send user to hello</a>
    <p>
      <router-link :to="{ path: '/hello', query: { plan: 'private' }}">Register</router-link>
    </p>
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


