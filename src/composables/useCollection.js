// import { db } from "@/firebase/config";

// import { collection, doc, setDoc } from "firebase/firestore";

// import { ref } from "vue";
// const useCollection = () => {
//   const error = ref(null);

//   const adding = async (data) => {
//     error.value = null;
//     console.log(data.userID);
//     // const chats = await collection(db)
//     //   .document("user-data")
//     //   .collection(data.userID);
//     const chats = await collection(db, "user-data");
//     try {
//       console.log(chats);
//       await setDoc(doc(chats, data.userID), data);
//       console.log("created");
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   return { adding, error };
// };
// export default useCollection;
// ============================
import { db } from "@/firebase/config";

import { collection, doc, setDoc } from "firebase/firestore";

import { ref } from "vue";
const useCollection = async (data) => {
  const error = ref(null);
  error.value = null;
  console.log(data.userID);
  // const chats = await collection(db)
  //   .document("user-data")
  //   .collection(data.userID);
  const chats = await collection(db, "user-data");
  try {
    console.log(chats);
    await setDoc(doc(chats, data.userID), data);
    console.log("created");
  } catch (err) {
    console.log(err.message);
  }
  return { adding, error };
};
export default useCollection;
