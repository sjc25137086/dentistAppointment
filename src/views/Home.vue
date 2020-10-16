<template>
  <div class="home">
    <router-link  to="/login"></router-link>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import Footers from '../components/MyFooter'
export default {
  components:{
    Footers
  }
}
</script>
