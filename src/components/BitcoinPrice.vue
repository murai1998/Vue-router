<template>
<div>
    <h1>Bitcoin Chart</h1>
     <div v-if="error">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </div>
    <div v-else>
        <div v-if="loading">Loading data...</div>
        <div v-else>
       <div> Results for {{bitcoin.time.updated}}</div>
        <div>
               Price: ${{bitcoin.bpi.USD.rate}}
        </div>
        <div>Notice: {{bitcoin.disclaimer}}</div>
       </div>
    </div>
    </div>




</template>


<script>

import axios from "axios"
 export default {
     data(){
         return{
         bitcoin: null,
         loading: true,
         error: null
         }
     },
     async mounted(){
         try{
         let res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        this.bitcoin = res.data
        console.log("Bitcoin", res.data)
         }
         catch(err){
         console.log(err)
         this.error = true
         } 
         finally{
             this.loading = false
         }
     }
 }


</script>