<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import Default from "../layouts/default";

export default {
  name: 'Home',
  components: {Default},
  setup() {

  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-around;
}
</style>
