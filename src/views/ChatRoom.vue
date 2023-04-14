<template>
  <div class="effect">
    <NavBar />
    <div class="loader" v-if="show">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="chat_content">
      <div class="chat_area">
        <h1>Messages</h1>
        <div class="message-div">
          <div class="message" v-for="chat in allData" :key="chat.id">
            <div class="left" v-if="chat.messageUser !== messageUser">
              <h2>{{ chat.messageContent }}</h2>
              <h3>{{ chat.userName }}</h3>
            </div>
            <div class="right-div" v-else>
              <div class="right">
                <h2>{{ chat.messageContent }}</h2>
                <h3>{{ chat.userName }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="write">
          <input
            type="text"
            placeholder="Enter Your Message"
            v-model="messageContent"
            class="input_register"
          />
          <button class="primary-button2" @click="handleSubmit">Enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//firebase imports
import { db } from "@/firebase/config";

import { orderBy, query, serverTimestamp } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// Importing Panels
import NavBar from "@/components/NavBar.vue";
import { onMounted, ref } from "vue";
//Importing Composables
import useCollectionMessages from "../composables/useCollectionMessages";
import getUser from "@/composables/getUser";
export default {
  components: { NavBar },
  setup() {
    //variables
    const show = ref(true);
    const Dstate = ref(false);
    const messageUser = ref("");
    const messageContent = ref("");
    const userName = ref("");
    const { error, adding } = useCollectionMessages();
    const { user } = getUser();
    setTimeout(() => {
      messageUser.value = user.value.uid;
      userName.value = user.value.displayName;
      getUserID();
      console.log(set.value);
      chats();
      show.value=false
    }, 3000);

    const set = ref([]);
    //adding data to firestore forms
    const getUserID = async () => {
      const docRef = doc(db, "user-data", user.value.uid);
      const docResponse = await getDoc(docRef);

      console.log(docResponse.data(), docResponse.id);
      set.value = docResponse.data();
      console.log(set.value.userID, "giudyiagwuyd");
    };
    //handle submit
    const handleSubmit = async () => {
      console.log("hi");
      const chatData = {
        messageUser: messageUser.value,
        messageContent: messageContent.value,
        userName: userName.value,
        createdAt: serverTimestamp(),
      };
      await adding(chatData);
      if (!error.value) {
        console.log("message stored");
        chats();
      }
    };
    //getting chats
    const allData = ref([]);
    const chats = async () => {
      const colRef = collection(db, "user-chats");
      const q = query(colRef, orderBy("createdAt", "asc"));
      await getDocs(q).then((snapshot) => {
        let docs = [];
        snapshot.docs.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        allData.value = docs;
        Dstate.value = true;
      });
      console.log(allData.value, "ok");
    };
    return {
      messageUser,
      error,
      show,
      adding,
      messageContent,
      handleSubmit,
      getUserID,
      chats,
      allData,
      Dstate,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.chat_content {
  padding-top: 120px;
  display: flex;
  justify-content: center;
}
.chat_area {
  width: 80vw;
  border-radius: 20px;
  background-color: gainsboro;

  min-height: 85vh;
  border: 1px solid black;
}
.write {
  position: absolute;
  /* top: 70vh;
   */
  bottom: 5%;
  display: flex;
  justify-content: center;
  /* width: 70vw; */
}
.message-div {
  height: 60vh;
  overflow: scroll;
  overflow-x: hidden;
}
input {
  width: 70vw;
  margin: 10px 10px;
  font-size: 1.5rem;
}
.primary-button2 {
}
.left {
  margin: 10px;
  border: 1px solid black;
  width: 40vw;
  border-radius: 15px;
  background-color: rgb(186, 253, 130);
}
.right-div {
  display: flex;
  justify-content: end;
}
.right {
  text-align: end;
  margin: 10px;
  border: 1px solid black;
  width: 40vw;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
}
h2,
h3 {
  margin: 10px;
}
</style>
