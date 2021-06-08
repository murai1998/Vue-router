<template>

 <div>
   <router-link :to="{name:`Destination`, params: {code: airport.abbreviation} }"><p>{{ airport.name }} ({{ airport.abbreviation }})</p></router-link>
   <p>Located in {{ airport.city }}, {{ airport.state }}</p>
      <router-view />
 </div>




</template>

<script>
import {useRoute} from "vue-router"
import airports from "../data/airports"

export default {
  data(){
    return{
        airport:{}
    }
  },
  mounted(){
      this.getData();
  },
  methods: {
      async getData(){
          const router = useRoute();
          try{
             this.airport = airports.filter(ar => ar.abbreviation === router.params.code.toUpperCase())[0]
          } catch(err){
              console.log(err)
          }
      }
  }
}
</script>