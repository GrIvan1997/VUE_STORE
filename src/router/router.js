import Vue from 'vue'
import Router from 'vue-router'
import VCatalog from './VCatalog.vue'
import vCard from './V_card.vue'

Vue.use(Router);

let router = new Router({
  routes: [
    
    {
      path: '/catalog',
      name: 'catalog',
      component: VCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCard,
      props: true
    }
  ]
})

export default router;