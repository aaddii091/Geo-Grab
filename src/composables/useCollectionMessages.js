import { db } from "@/firebase/config";

import { collection, doc, setDoc } from "firebase/firestore";

import { ref } from "vue";
const useCollectionMessages = () => {
  const error = ref(null);

  const adding = async (data) => {
    error.value = null;
    console.log(data.messageUser);

    const chats = collection(db, "user-chats");
    try {
      console.log(chats);
      await setDoc(doc(chats), data);
      console.log("created");
    } catch (err) {
      console.log(err.message);
    }
  };
  return { adding, error };
};
export default useCollectionMessages;
