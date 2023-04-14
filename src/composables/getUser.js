// imports
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
const state = ref(false);
const user = ref(auth.currentUser);
onAuthStateChanged(auth, (use) => {
  console.log("auth state changed", use);
  user.value = use;
  state.value = true;
});

const getUser = () => {
  return { user, state };
};
export default getUser;
