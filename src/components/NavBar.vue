<template>
  <nav>
    <div class="logo">
      <img src="../assets/images/logo.png" alt="" />
      <h1>GEO GRAB</h1>
    </div>
    <div class="content">
      <ul>
        <li class="hover-underline-animation">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="hover-underline-animation">
          <router-link to="/chatroom">Chats</router-link>
        </li>

        <li v-if="!error">
          Welcome
          <span v-if="user">
            {{ user.displayName }}
          </span>
        </li>
        <li @click="logOut">
          <img src="../assets/exit.svg" alt="" class="icon" />
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import router from "@/router";
export default {
  setup() {
    const { user } = getUser();
    const { error, logout } = useLogout();
    getUser();
    // localStorage.setItem({ name: user.displayName, userID: user.uid });

    console.log(user);
    const logOut = async () => {
      await logout();
      if (!error.value) {
        console.log("Loggded Out");
        router.push({ name: "login" });
      }
      console.log(error);
    };
    return { user, error, logOut };
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
.relative {
  position: relative;
}
nav {
  width: 100%;
  position: fixed;
  z-index: 2;
}
img {
  height: 100px;
}
span {
  text-decoration: none;
  font-weight: 300;
}
h1 {
  font-weight: 100;
  font-size: 2rem;
}
.content {
  display: flex;

  align-content: center;
}
.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
}
nav {
  /* width: 100%; */
  background-color: var(--input-bg);
  backdrop-filter: blur(52px);

  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.137);
  justify-content: space-between;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 0px 0px 20px var(--shadow);
}
a {
  list-style: none;
  color: var(--black);
  text-decoration: none;
}
ul {
  height: auto;
  display: flex;
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 2vw;
}
ul li {
  list-style: none;
  margin: auto 2vw;
  cursor: pointer;
}
.icon {
  height: 35px;
}
</style>
