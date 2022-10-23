<script lang="ts" setup>
/* eslint-disable */
import { computed, ref, onMounted, watch, Ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(auth.currentUser);
      router.push("/login");
    })
    .catch((error) => {
      alert(error);
    });
};
const signInWithGoogle = () => {};
</script>

<template>
  <h1>Create an account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In with Google</button></p>
</template>
