<template>
<div class="home">
  <a-button type="primary">Primary</a-button>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import {
  Button
} from "ant-design-vue";

import {
  Options,
  Vue
} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
