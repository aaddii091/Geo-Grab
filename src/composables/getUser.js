// imports
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
const user = ref(auth.currentUser);
onAuthStateChanged(auth, (use) => {
  user.value = use;
});
const getUser = () => {
  return { user };
};
export default getUser;
