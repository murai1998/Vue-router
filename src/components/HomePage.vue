<template>
<div>
  <h1>Home Page</h1>
<div class="wrapper">
<router-link :to="{path: `/airport/${airport.abbreviation}`}" v-for="airport in airports" :key="airport.abbreviation" class="airport">
     <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
</router-link>
</div>
</div>
</template>


<script>
import airports2 from "../data/airports"
 import { onMounted } from 'vue'
 import axios from "axios"
// import {useRoute} from "vue-router"
import {ref} from "vue"

export default {

//   data(){
//     return{
//         airports:[

//         ]
//     }
//   },
//   mounted(){
//       this.getData();
//   },
//   methods: {
//       async getData(){
//            let router = useRoute()
//           try{
//               this.airports = airports;
//           } catch(err){
//               console.log(err)
//               router.push({name: "PageNotFound"})
//           }
//       }
//   }


setup(){
    const data = onMounted(async ()=>{
         try{
       const data = await  axios.get("https://jsonplaceholder.typicode.com/users");
       return data
     } catch(err){
       console.log(err)
     }
    })
       console.log("All employees", data)
const airports = ref(airports2)
console.log("Airports", airports.value)
return {airports}
}
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}
.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}
.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>


