<template>
  <nav class="bg-blue-600 py-4">
    <router-link to="/" class="bg-red-600 rounded-lg p-2 ml-2 text-yellow-500 font-bold hover:bg-red-800">Home</router-link>
    <router-link to="/about" class="bg-red-600 rounded-lg p-2 ml-2 text-yellow-500 font-bold hover:bg-red-800">About</router-link>
    <router-link to="/cloudfirestore" class="bg-red-600 rounded-lg p-2 ml-2 text-yellow-500 font-bold hover:bg-red-800">Cloud-Firestore</router-link>
  </nav>
  
  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>