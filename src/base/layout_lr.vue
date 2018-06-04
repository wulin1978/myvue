<template>
<div>
  <div class='left'>
    <slot name='left'></slot>
  </div>
  <div class='right'>
    <slot name='right'></slot>
  </div>
</div>
</template>
<script>
export default {
  name: 'layout_lr'
}
</script>
<style lang='scss' scoped>
  $leftWidth: 180px;
  .left {
    width: $leftWidth;
    border-right: 1px #ccc dotted;
    background: #eee;
    height: 100%;
    position: fixed;
    overflow: auto;
  }
  .right {
    margin-left: $leftWidth;
    height: 100%;
  }
</style>
