<script setup>
  import Nav from './components/Nav.vue';
  import ManageAttendancePage from './Pages/ManageAttendancePage.vue';
</script>

<template>
  <Nav />
  <ManageAttendancePage />
  <router-view></router-view>
</template>
