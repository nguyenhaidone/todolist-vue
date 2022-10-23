<script lang="ts" setup>
/* eslint-disable */
import { computed, ref, onMounted, watch, Ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const errMsg: Ref<string> = ref("");
const router = useRouter();

const login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;

        default:
          errMsg.value = "Incorrect password or email";
          break;
      }
      alert(errMsg);
    });
};
const signInWithGoogle = () => {};
</script>

<template>
  <h1>Sign In</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="login">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In with Google</button></p>
</template>
