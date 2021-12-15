  // export default {
    //   data(){
    //     return{
    //       destination: null
    //     }
    //   },
    //   methods:{
    //      async initData(){
    //           const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //           this.destination = await response.json()
    //       }
    //   },
    //   computed:{
    //     destId(){
    //       return parseInt(this.$route.params.id)
    //     }
    //   },

    //   async created(){
    //     this.initData()

    //     this.$watch(
    //       ()=> this.$route.params,
    //       async () =>  {
    //       const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //       this.destination = await response.json()}
    //     )
    //   }

    // }












//     <script >
// import { RouterLink } from "vue-router";
// export default {
//   props: {
//     ...RouterLink.props
//   },
//   computed:{
//     isExternal(){
//       console.log(this.to)
//       // return typeof this.to === 'string' && this.to.startsWith('http')
//     }
//   }
  
// };

// </script>