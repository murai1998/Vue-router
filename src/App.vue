<template>
<div>
  <my-header></my-header>
 <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">  
    </Nav>
  <router-view />
  </div>
</template>


<script>
import Nav from "vue-nav-ui";
import { ref } from 'vue'
import MyHeader from "./components/MyHeader"
export default {
  components: {
    Nav, MyHeader
  },
  setup() {
     /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */ 
    const navLinks = ref([
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      
    ]);

    /* FOR CONFIGURING THE STYLING OF YOUR NAVIGATION */
    const navConfig = ref({
      whitespace: true, /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */
      navBg: "#FAFAFA", /* BACKGROUND COLOR OF YOUR NAV  */
      navBorderRadius: "30px", /* BORDER RADIUS OF YOUR NAV */
      linkFont: "poppins", /* FONT FAMILY OF YOUR NAV */
      linkColor: "black", /* FONT COLOR OF YOUR NAV */
      responsivePosition: "top or bottom", /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */
    });

     /* FOR NAV BUTTON CONFIGURATION */
    const btnConfig = ref({
      btnLink: true, /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */
      btnUrl: "https://dhaniel.disha.page", /* LINK URL OF YOUR NAV BUTTON */
      btnText: "Download app", /* NAV BUTTON TEXT */
      btnBg: "#40269E", /* BACKGROUND COLOR OF YOUR NAV BUTTON  */
      btnTextColor: "white", /* FONT COLOR OF YOUR NAV BUTTON*/
      btnBorderWidth: "0", /* BORDER WIDTH OF YOUR NAV BUTTON */
      btnBorderColor: "black", /* BORDER COLOR OF YOUR NAV BUTTON */
      btnBorderRadius: "20px", /* BORDER RADIUS OF YOUR NAV BUTTON */
    });

    return { navLinks, btnConfig, navConfig };
  },
};
</script>