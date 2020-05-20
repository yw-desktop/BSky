<template>
    <main>
        <ul class="flex">
            <li v-for='(t,i) of list' :key="i">
                <img :src="t" alt="">
            </li>
        </ul>
    </main>
</template>
<style scoped>
    .flex{
        display: flex;
        flex-direction: column;
    }
    li{
        list-style: none;
    }
</style>
<script>
    export default{
    data(){
        return{
            list:[null],
            section:"",
            lid:0
        }
    },
    methods:{
        getcar(){
            this.axios.get('getcar',{params:{
                section:this.section,
                lid:this.lid
            }})
            .then(res=>{
                this.list=res.data.data[0].imgpath.split(',')
                console.log(this.list)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.section=this.$route.query.section
        this.lid=this.$route.query.lid
        console.log(this.section)
        
    },
    mounted(){
        this.getcar()
    }
    }
</script>