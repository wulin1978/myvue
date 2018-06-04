<template>
  <div id="app">
    <layout-lr>
      <template slot='left'>
        <left></left>
      </template>
      <template slot='right'>右边</template>
    </layout-lr>
  </div>
</template>

<script>
import LayoutLr from './base/layout_lr'
import Left from './components/left'

export default {
  components: {
    LayoutLr,
    Left
  }
}
</script>
<style>
</style>
