<template>
<div>
  <h2>Mine</h2>
</div>
  
</template>

<script>
export default {
  data:{
    arr:2
  },
  methods:{
    addArr(){
      this.arr++
    }
  },
  created(){
    console.log(111)
  }
}
</script>