import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

const error = ref(null);
const getUserData = () => {
  const data = async () => {
    error.value = "";
    const docRef = doc(db, "Blog");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return { data, error };
};
export default getUserData;
