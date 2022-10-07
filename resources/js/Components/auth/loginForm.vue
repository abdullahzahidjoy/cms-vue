<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
      <small>
        <a href="#">Forgot password?</a>
      </small>
    </div>
    <div>
      <label class="form-check">
        <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" >
        <span class="form-check-label">Remember me</span>
      </label>
    </div>
    <div class="text-center mt-3">
      <button type="submit" class="btn btn-lg btn-primary">Sign in</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "loginForm"
}
</script>

<style scoped>

</style>