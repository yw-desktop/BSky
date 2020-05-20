<template>
    <main>
        <div class="videomr w videoback">
            <video :src="vlist[id-1].path" controls="controls" class="container"></video>
        </div>
        <div class="w">
            <h6>其他推荐</h6>
            <div class="flex">
                <div v-for="(t,i) of vlist" :key="i" @click='toogle(i)' class="child">
                    <img :src="t.img" alt="">
                    <span>{{t.title}}</span>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    h6{
        text-align: start;
    }
    .w{
        width:1200px;
        margin:20px auto
    }
    .container{width:80%;height:600px}
    .flex{
        display:flex;
        justify-self: start;
        flex-wrap:wrap;
        
    }
    .child{
        width:153px;
        margin:10px;
        background-color: antiquewhite;
        position:relative;
        left:0;
        top:0
    }
    .child>span{
        position:absolute;
        bottom:10px;
        left:0
    }
    p{
        text-align: center;
    }
    img{
        width:100%;
    }
</style>
<script>
    export default{
    data(){
        return{
            vlist:[null],
            id:0

        }
    },
    methods:{
        toogle(i){
            this.id=i+1
        },
        getv1(){
            this.axios.get('getv1')
            .then(res=>{
                this.vlist=res.data.data
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.id=this.$route.query.id
        console.log(this.id)
        this.getv1()
    },
    }
</script>