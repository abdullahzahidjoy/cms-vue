<template>
  <div class="wrapper">
    <AdminSideBar></AdminSideBar>
    <div class="main">
      <AdminNavbar></AdminNavbar>

      <router-view></router-view>

      <AdminFooter></AdminFooter>
    </div>
  </div>
</template>
<script>
import AdminFooter from "../Components/backend/AdminFooter.vue";
import AdminNavbar from "../Components/backend/AdminNavbar.vue";
import AdminSideBar from "../Components/backend/AdminSidebar.vue";
export default {
  components:{
    AdminFooter,AdminNavbar,AdminSideBar
  }
}
</script>