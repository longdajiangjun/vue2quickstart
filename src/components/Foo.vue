<template>
  <div>
    <p>
      Foo
    </p>
    <a @click="login">click me, then send user to hello</a>
    <p>
      <router-link :to="{ path: '/hello', query: { plan: 'private' }}">private</router-link>
    </p>
    <p>
      <router-link :to="{ path: '/hello', query: { plan: 'public' }}">public</router-link>
    </p>
    <p>
      <a class="res_alink" @click="push()"></i>发&nbsp;&nbsp;布</a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
//router.push({ name: 'user', params: { userId: 123 }})
//// 带查询参数，变成 /register?plan=private
  export default {
    methods: {
      login() {
        let user = {
          name: "bruce",
          age: 18
        };
        this.$store.dispatch('setCurrentUser',user);
        console.log(this.$store.state.curUser);
      },
      push(){
        let ss = 'private';
        this.$router.push({ path: '/hello', query: { plan: ss }});
        ss= 'public';
        this.$router.push({ path: '/hello', query: { plan: ss }});
      }
    }
  }
</script>


