<template>
  <div class="text-center mt-4">
    <h1 class="h2">{{ title }}</h1>
    <p class="lead">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props:{
      title:{
        type:String,
        default:"Title"
      },
      subtitle:{
        type:String,
        default:"Sub-Title"
      }
    }
}
</script>

<style scoped>

</style>