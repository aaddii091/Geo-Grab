import { auth } from "@/firebase/config";

import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
// variables
const error = ref(null);

// functions
const login = async (email, password) => {
  error.value = null;
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    error.value = null;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};
const useLogin = () => {
  return { login, error };
};
export default useLogin;
