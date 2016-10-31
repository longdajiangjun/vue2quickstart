<template>
  <div id="app">
    <p>
      Welcome to your Vue.js app!
    </p>
    <li><router-link :to="{ path: '/foo', activeClass: 'onactive'}" >foo</router-link></li>
    <li><router-link :to="{ path: '/bar', activeClass: 'onactive'}" >bar</router-link></li>
    <li><router-link :to="{ path: '/hello', activeClass: 'onactive'}" >hello</router-link></li>
    <li><router-link :to="{ path: '/table', activeClass: 'onactive'}" >Table</router-link></li>
    <li><router-link :to="{ path: '/table2', activeClass: 'onactive'}" >Table Service</router-link></li>
    <li><router-link :to="{ path: '/checkbox', activeClass: 'onactive'}" >Checkbox</router-link></li>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">

  export default {
      data() {
        return {
          username : "",
          userpwd : ""
        }
      }
  }
</script>


