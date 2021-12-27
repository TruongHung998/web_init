<template>
  <main-header></main-header>
  <slot/>
</template>

<script>
import mainHeader from "../components/header/mainHeader";
import {useRoute} from "vue-router";

export default {
  components: {
    mainHeader
  },
  created() {
    const router = useRoute()
    console.log(router)
    document.title = router.meta.title || ''
  }
}
</script>
