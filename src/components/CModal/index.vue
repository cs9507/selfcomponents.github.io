<template>
    <AModal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleCloseAmodal"
    >
      <p>{{ ModalText }}</p>
    </AModal>
</template>

<script>
export default {
  name: "CModal",
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    doc:{
      type:Object
    }
  },
  data() {
    return {
      ModalText: 'Content of the modal',
      confirmLoading: false,
    };
  },
  methods:{
    handleCloseAmodal(){
      this.$emit('update:visible',false)
    }
  },
  mounted() {
  }
};
</script>

<style scoped  lang="scss">
 .font{
   color: red;
 }

</style>>


