<template>
  <div>
    <CModal :visible.sync="visibleTag"></CModal>
  </div>
</template>

<script>
import CModal from "@/components/CModal/index.vue";
export default {
  name: "App",
  data() {
    return {
      visibleTag: false
    };
  },
  components: {
    CModal
  },
  mounted() {
    this.visibleTag = true
  },
  watch:{
    visibleTag(val){
      console.log(val)
    }
  }
};
</script>

<style></style>
