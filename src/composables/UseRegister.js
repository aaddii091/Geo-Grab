// imports
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

// variable
const error = ref(null);
const uid = ref("");
// const updateStatus = ref(false);
// function
const register = async (displayName, password, email) => {
  error.value = null;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("something is wrong");
    }
    await updateProfile(res.user, {
      displayName: displayName,
    });
    console.log(res);
    uid.value = res.user.uid;
    console.log(uid.value);
    console.log("Signed Up");
    error.value = null;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};
const useRegister = () => {
  return { register, error, uid };
};
export default useRegister;
