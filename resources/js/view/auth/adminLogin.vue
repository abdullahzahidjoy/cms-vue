<template>
  <main class="d-flex w-100">
    <div class="container d-flex flex-column">
      <div class="row vh-100">
        <div class="col-sm-8 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div class="d-table-cell align-middle ">

            <Title title="Welcome back" subtitle="Sign in to your account to continue"></Title>

            <div class="card shadow-lg">
              <div class="card-body">
                <div class="m-sm-4">
                  <loginForm></loginForm>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from '../../Components/auth/Header.vue';
import loginForm from '../../Components/auth/loginForm.vue';
export default {
  name: "adminLogin",
  components:{
    Title,loginForm
  }
}
</script>

<style scoped>

</style>