<template>
  <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
      <a class="sidebar-brand" href="#">
        <span class="align-middle">AdminKit</span>
      </a>

      <ul class="sidebar-nav">


        <li class="sidebar-item active" >
          <router-link class="sidebar-link" to="/admin/dashboard">
            <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
          </router-link>
        </li>


        <li class="sidebar-item">
          <a class="sidebar-link" href="{{ route('profile') }}">
            <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
          </a>
        </li>

        <li class="sidebar-item">
          <router-link class="sidebar-link" to="/login">
            <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AdminSidebar"
}
</script>

<style scoped>

</style>