<template>
    <main>
        <app-lunbo></app-lunbo>
        <app-bar></app-bar>
        <app-rd></app-rd>
        <app-vedio></app-vedio>
        <app-footer></app-footer>
    </main>
</template>
<style scoped>

</style>
<script>
import footer from '../components/footer.vue'
import lunbo from '../components/lunbo.vue'
import topbar from '../components/topbar.vue'
import redian from '../components/redian.vue'
import vedio from '../components/vedio.vue'
    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        created(){

        },
        components:{
            'app-lunbo':lunbo,'app-bar':topbar,
            'app-rd':redian,'app-footer':footer,
            'app-vedio':vedio
        }
    }
</script>