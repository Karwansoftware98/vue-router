import Home from '../Pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import data from '../data.json'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', name: 'Home', component:Home },
        {
            path:'/protected',
            name:'protected',
            component: ()=>import('../Pages/Protected.vue'),
            meta:{
                requiredAuth: true,

            }
        },
        {
                path:'/login',
                name:'login',
                component:()=> import('../Pages/Login.vue')

        },
        {
                path:'/kawa',
                name:'kawa',
                component:()=> import('../Pages/kawa.vue')

        },
        {
                path: '/invoices',
                name:'invoices',
                component: ()=> import('../Pages/Invoices.vue'),
                meta:{
                requiredAuth: true,

            }
        },
        {
         path:'/destination/:id/:slug',
         name:'destination.show', 
         component: ()=>import('../Pages/DestinationShow.vue'),
         props: route=> ({...route.params, id: parseInt(route.params.id)}),
         beforeEnter(to,from){
                const exist =data.destinations.find(
                    destination => destination.id === parseInt(to.params.id)
                )
                if(!exist) return {
                    name:'NotFound',
                    query: to.query,
                    hash:to.hash
                    }
         },
         children:[
            {
                path:':experienceSlug',
                name:'experience.show', 
                component: ()=>import('../Pages/ExperienceShow.vue'),
                props: route=> ({...route.params, id: parseInt(route.params.id)})
               
               },
         ]
        
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: ()=> import('../Pages/NotFound.vue')
        }
        
      
    ],
    scrollBehavior(to,from,savedPostion){
        return savedPostion || new  Promise((resolve)=>{
            setTimeout(()=>resolve({top:0,behavior:'smooth'}),500)
        })
        ;; return {top:null, left:null,behavior:null}
    },
    linkActiveClass:'active'
})

router.beforeEach((to, from)=>{
        if(to.meta.requiredAuth && !window.user){
            return {name: 'login', query:{redirect: to.fullPath}}
        }
})

export default router