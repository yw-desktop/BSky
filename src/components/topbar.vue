<template>
    <main>
        <div class="flex on container">
            <div class="flex wrap w">
                <div class="flex relative bor act" v-for="(t,i) of list" :key=i>
                    <div class="bor fir" @click="tomanhua">
                        <img :src="t.timg" alt="">{{t.total1}}
                    </div>
                    <div>{{t.total2}}</div>
                    <div>{{t.total3}}</div>
                    <div class="absolute hide shadow" @click="tocar" >
                        <div >
                            <img :src="t.wimg" alt="" :data-id="t.id">
                            <p>{{t.detail}}</p>
                            <p>{{t.auther}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="flex">
                <li>
                    <img src="../assets/icon1.png" alt="">
                    <p>BSky圈粉</p>
                </li>
                <li>
                    <img src="../assets/icon2.png" alt="">
                    <p>主体电影</p>
                </li>
                <li>
                    <img src="../assets/icon3.png" alt="">
                    <p>音乐风格</p>
                </li>
                <li>
                    <img src="../assets/icon4.png" alt="">
                    <p>BSky善跑</p>
                </li>
            </ul>
        </div>
      
    </main>
</template>
<style scoped>
    .container{
        width:1200px;
        margin:0 auto}
    .flex{
        display:flex;
        justify-content:space-between;}
    .wrap{
        flex-wrap: wrap;
        }
    .absolute{
        position: absolute !important;
        top:0px;
        z-index: 999;
        left:100px !important}
    .relative{
        position:relative;
        top:0;
        left:0}
    .hide{
        display:none
        }
    .bor{
        border-radius: 30px;
        margin-right:5px;
        font-size:14px}
    .act:hover .hide{
        display:block !important
        }
    .act>div{
        padding:3px 5px
        }
    .act{
        width:280px;
        margin-right:10px;
        height:40px;
        line-height: 40px;border:1px solid rgb(240,240,240);
        margin-top:10px
    }
    .fir{
        width:30%;
        background-color:lavender;}
    .w{
        width:900px;
        }
    .on{
        margin-top:20px !important}
    .absolute img{
        width:200px;
        height:250px
        }
    p{
        margin-top:10px
        }
    .shadow{
        box-shadow: 5px 5px 5px 5px;
        background-color:#f8f8f8;
        text-align: start
        }
    ul{
        padding:20px 0;
        list-style:none;
        margin:0}
</style>
<script>
    export default{
        data(){
            return{
                list:[],
               
            }
        },
        methods:{
            tomanhua(){
                this.$router.push('/manhua')
            },
         tocar(e){
             var id=e.target.dataset.id
             
             this.$router.push('/cartoon?id='+id)
         }
        },
        created(){
            this.axios.get("topbar")
            .then(res=>{
                this.list=res.data.data
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        },
    }
</script>