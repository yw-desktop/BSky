<template>
    <main>
        <div class="videomr w videoback ">
            <video :src="list[0].path" controls="controls"  v-if='list.length>0' class="w1"></video>
        </div>
    </main>
</template>
<style scoped>
    .container{width:100%;height:600px}
    .w{
        width:1200px;
        margin:20px auto;
        background-color: black;
    }
    .w1{
        width:100%;
        margin:auto auto
    }
</style>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{

        },
        created(){
            var id=this.$route.query.id
            var obj={
                id:id
            }
            this.axios.get("/nvedio",{params:obj})
            .then(res=>{
                this.list=res.data.data
                console.log(this.list)
                }
            )
            .catch(err=>{
                console.log(err)
            })
        },
    }
</script>