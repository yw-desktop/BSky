<template>
    <main class="container">
        <div class="flex container">
            <div>
                <img src="../../public/img/vedio.png" alt="" class="img">
                <b>最新电影</b>
            </div>
            <div>
                <img src="../../public/img/转换.png" alt="" class="img">
                <b>换一批</b>
            </div>
        </div>
        <div class="flex w" v-if='this.list.length>0'>
            <div v-for="(t,i) of list" :key="i" class="vedio">
                <img :src="t.img" alt="" class="vimg" :data-id="t.id" @click="next">
                <div class="flex">
                    <div>
                        <span>{{t.title}}</span>
                        <p>{{t.details}}</p>
                    </div>
                    <div class="fontsize">{{t.score}}</div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .w{margin:5px 0 5px 0}
    .flex{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        }
    .container{
        width:1200px;
        margin:0 auto}
    .img{
        vertical-align: middle !important
        }
    b{
        margin-left:10px
        }
    .vimg{
        width:100%;
        height:80%}
    .vedio:hover{
        transform: scale(1.2)
    }
    .vedio{
        width:193px;
        height:256px
        }
    .fontsize{font-size: 16px;
        color:red;
        padding-top:15px}
    p{margin:0}
</style>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        methods:{
            next(e){
                var id=e.target.dataset.id
                this.$router.push("/nvedio?id="+id)
            }
        },
        created(){
            this.axios.get("vedio")
            .then(res=>{
                var list=res.data.data
                list.splice(6,)
                this.list=list
            })
            .catch(err=>{console.log(err)})
        },
       
    }
</script>