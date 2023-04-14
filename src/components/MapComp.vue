<template>
  <div>
    <div class="loader" v-if="show">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="map">
      <div class="google-map" id="map"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// imports

import { Loader } from "@googlemaps/js-api-loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import getUser from "@/composables/getUser";

// import { data, error  } from "../composables/getUserData";
import { onMounted, ref } from "vue";
import router from "@/router";

export default {
  setup() {
    const { user } = getUser();
    const show = ref(true);
    const ok = ref("hagsdjgajsf");

    const recieved_location1 = ref([]);

    // -------------------------------------------
    onMounted(() => {
      // info Window
      // getting current user location coordinates
      navigator.geolocation.getCurrentPosition(async () => {
        console.log(user.value.uid);
        ////////Taking data from firebase
        const docRef = doc(db, "user-data", user.value.uid);
        const docResponse = await getDoc(docRef);

        console.log(docResponse.data(), docResponse.id);
        recieved_location1.value = docResponse.data();
        console.log(recieved_location1.value.lat);
        // loading map
        const loader = new Loader({
          apiKey: "AIzaSyABi4mIlqICDg1kdQgCflaTL_2aY-D8Vf0",
          version: "weekly",
        });
        // using loader function to load map with the coordinates which are being retrived above
        loader.load().then(async () => {
          // eslint-disable-next-line
          const { Map } = await google.maps.importLibrary("maps");
          show.value = false;

          const map = new Map(document.getElementById("map"), {
            center: {
              lat: recieved_location1.value.lat,
              lng: recieved_location1.value.lng,
            },
            zoom: 14,
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.LEFT_BOTTOM,
            },
          });
          //using marker which marks the user's current location
          let markerOptions = {
            position: new google.maps.LatLng(
              recieved_location1.value.lat,
              recieved_location1.value.lng
            ),
            map: map,
            title: "Click to enter chatroom",
          };
          const marker = new google.maps.Marker(markerOptions);
          //Click event on marker
          marker.addListener("click", () => {
            router.push({ name: "chatroom" });
          });
          // Geolocation
          //Button For Asking Current location
          // const locationButton = document.createElement("button");

          // locationButton.textContent = " Current Location";
          // locationButton.classList.add("custom-map-control-button");
          // map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(
          //   locationButton
          // );

          return { map, marker };
        });
      });
      // -----------------------
    });
    return { show, ok };
  },
};
</script>

<style scoped>
#map {
  height: 100vh;
}
</style>
