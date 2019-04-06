<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { AccountLogin } from '@/api/sys.login.js'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    AccountLogin({
      username: 'admin',
      password: 'admin'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
