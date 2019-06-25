<template>
  <div id="auth">
    <amplify-authenticator></amplify-authenticator>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>
<script>
// import { Auth } from 'aws-amplify'
export default {
  name: 'auth',
  components: {
  }
}
</script>
<style lang="scss">
.articles {
  margin: 5rem 0;
  margin-top: -100px;
}
</style>
