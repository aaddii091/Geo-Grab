<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
/* COLORS */
:root {
  --blue: #1e90ff;
  --white: #ffffff;
  --black: #000000;
  --input-bg: #f0f8ff00;
  --positive: #2fff9e;
  --shadow: #181a1980;
}
/* underline animation  */
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--black);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.primary-button {
  margin: 1vw;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px var(--black);
  transition: all 0.15s;
}
.primary-button2 {
  font-size: 1rem;
  padding: 10px 35px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px var(--black);
  transition: all 0.15s;
}
p {
  margin: 1.5vw 0px;
}
.input_register {
  background-color: var(--input-bg);
  margin: 5px 0px;
  padding: 20px;
  width: 80%;
  text-align: left;
  border-radius: 15px;

  border: 1px solid rgba(0, 0, 0, 0.226);
}
h1 {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 100;
  margin: 2vw;
}
span {
  cursor: pointer;
  text-decoration: underline;
}
input {
  font-size: 1rem;
}
.primary-button:hover {
  border: 1px rgba(0, 0, 0, 0.267);
  background-color: var(--positive);
  transform: scale(1.1);
}
.primary-button2:hover {
  border: 1px rgba(0, 0, 0, 0.267);
  background-color: var(--positive);
  transform: scale(1.1);
}
/* LOADER ANIMATION  */
.lds-ripple {
  z-index: 99;
  display: inline-block;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  top: 50%;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 5px solid #000000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
.effect {
  opacity: 1;
  animation: open 1.5s linear;
}
@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
