<template>
<div class='wrap'>
  <div class='title'>前端笔记</div>
  <div class='tre'></div>
</div>
</template>
<script>
import Tree from '../base/tree'

export default {
  name: 'left',
  components: {
    Tree
  },
  data () {
    return {
      list: [
        {
          name: '一级目录一',
          id: 1,
          childer: [
            {
              name: '二级目录一',
              id: 2,
              childer: [
                {
                  name: '三级目录一',
                  id: 3,
                  childer: [
                    {
                      name: '四级目录一',
                      id: 14
                    },
                    {
                      name: '四级目录二',
                      id: 15,
                      childer: [
                        {
                          name: '五级目录一',
                          id: 16,
                          childer: []
                        }
                      ]
                    }
                  ]
                },
                {
                  name: '三级目录二',
                  id: 4,
                  childer: []
                }
              ]
            }
          ]
        },
        {
          name: '一级目录二',
          id: 5,
          childer: [
            {
              name: '二级目录二',
              id: 6,
              childer: [
                {
                  name: '三级目录三',
                  id: 7
                },
                {
                  name: '三级目录四',
                  id: 8
                }
              ]
            },
            {
              name: '二级目录三',
              id: 9,
              childer: [
                {
                  name: '三级目录X',
                  id: 10
                }
              ]
            },
            {
              name: '二级目录四',
              id: 11,
              childer: [
                {
                  name: '三级目录Y',
                  id: 12
                }
              ]
            }
          ]
        },
        {
          name: '一级目录三',
          id: 13,
          childer: [
            {
              name: '二级目录五',
              id: 14,
              childer: []
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
  .title {
    height: 50px;
    line-height: 50px;
    background: url('../assets/logo.png') left center/33px no-repeat;
    margin: 8px;
    font-size: 22px;
    font-weight:bold;
    padding-left: 45px;
    color:rgb(32, 145, 84);
  }
</style>
