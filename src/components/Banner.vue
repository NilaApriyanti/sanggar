<template>
  <div class="row q-pl-md q-pr-md">
    <div class="col-auto">
      <div class="left"></div>
    </div>
    <div class="col">
      <q-banner inline-actions class="text-blue-grey-10 bg-blue-grey-1">
        {{ msg }}
      </q-banner>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'Null'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .left {
    background-color: #6eebac;
    width: 5px;
    height: 100%;
  }
  .red {
    background-color: rgb(110, 235, 172);
  }
</style>
