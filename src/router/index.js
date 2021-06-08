import {createWebHistory, createRouter} from "vue-router"
import HomePage from "../components/HomePage"
import HelloWorld from "../components/HelloWorld"
import PageNotFound from "../components/PageNotFound"
import Details from "../components/Details"
import Destination from "../components/Destination"
import AboutPage from "../components/AboutPage"
import BitcoinPrice from "../components/BitcoinPrice"

const routes = [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      props: {id: 1}
    },
    {
        path: "/hello",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound
    },
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },
    {
        path: "/bitcoin",
        name: "BitcoinPrice",
        component: BitcoinPrice
    },
    {
        path: '/airport/:code',
        name: "Details",
        component: Details,

        children: [
            {
                path: 'destinations',
                name: 'Destination',
                component: Destination
            }
        ]
    }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router