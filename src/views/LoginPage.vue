<template>
  <div class="effect">
    <div class="login-content">
      <div class="login-text">
        <h1>Welcome</h1>
        <h5>Enter Your Details</h5>
        <form @submit.prevent="log">
          <!-- <label>Email:</label> -->
          <input type="email" required placeholder=" Email" v-model="email" />
          <!-- <label>Password</label> -->
          <input
            type="password"
            required
            placeholder="Password"
            v-model="password"
          />
          <button
            class="primary-button"
            :disabled="disable"
            @click="!disable.value"
          >
            Login
          </button>
          <p>Not yet a member? <span @click="redirect">Register Now !</span></p>
          <div class="error">{{ error }}</div>
        </form>
      </div>
      <div class="login-img">
        <img src="../assets/images/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// imports
import router from "@/router";
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
export default {
  setup() {
    // variables
    const disable = ref(false);
    // const disable = computed(()=>{
    //   return false
    // });
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();
    // functions
    const log = async () => {
      // disable.value = true;
      await login(email.value, password.value);
      if (!error.value) {
        console.log("Logged In !", error.value);

        router.push({ name: "home" });
      } else {
        // disable.value = false;
      }
    };
    const redirect = () => {
      router.push({ name: "register" });
    };
    return { redirect, log, email, password, error, disable };
  },
};
</script>

<style scoped>
* {
  overflow: hidden;
}
.login-content {
  color: white;
  display: flex;
  width: 100%;
}
.login-text h5 {
  margin: 10px;
  font-size: 1rem;
  font-weight: 300;
}
.login-text h1 {
  font-weight: 100;
  margin: 10px;
  font-size: 5rem;
}
.login-text {
  position: relative;
  width: 45vw;
  top: 10vw;
  text-align: center;
  height: 100vh;
}
.login-text form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-text input {
  border-radius: 20px;
  padding: 20px;
  max-width: 30rem;
  min-width: 20rem;
  margin: 1vw 0vw;
  border: 1px solid rgba(0, 0, 0, 0.267);
}
input[text] {
  color: black;
}
.login-img {
  width: 55vw;
  z-index: 0;
}
.login-img img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 40px 0px 0px 40px;
}
.primary-button {
  color: black;
  padding: 15px 45px;
}
.effect {
  background: url(../assets/images/bg2.jpg);
  height: 100vh;
  background-size: cover;
}
</style>
