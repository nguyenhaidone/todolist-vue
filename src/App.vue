<script lang="ts" setup>
/* eslint-disable */
import { onMounted, ref, Ref } from "vue";
import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const isLoggedIn = ref(false);
const router = useRouter();

let auth: Auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/login");
  });
};
</script>
<template>
  <nav>
    <router-link to="/">Todo-list</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/Register">Register</router-link> |
    <button @click="handleSignOut">SignOut</button>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
