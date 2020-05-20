<template> 
    <main class="min z">
        <el-carousel :interval="5000" arrow="always" height="500px" class="z">
            <el-carousel-item v-for="(t,i) of video" :key="i">
                <img :src="a?video[num].imgp:t.imgp" alt="" @click="tov1" :data-id='t.id'>
            </el-carousel-item>
        </el-carousel>
        <div class="bar">
            <ul>
                <li v-for="(t,i) of video" :key="i" class="" @mouseenter="enter(i,$event)" @mouseleave="leave" @click="tov1" :data-id="t.id">
                    <h3 class="inline" :data-id="t.id">{{t.title}}</h3>
                    <span :data-id="t.id">{{t.details}}</span>
                </li>
            </ul>
        </div>
    </main>
</template>
<style scoped>
   
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
      width:100%;
      }
  .bar{
      width:300px;
      position:absolute;
      top:20px;
      right:200px;
        margin:10px 0;
        z-index: 999;
        border-radius:5px;
        text-align:start;
        opacity:0.5;
        padding:5px 0;
        background:#475669;
        opacity:0.5;
        color:white;
        }
  .block{
      display:block
      }
  .inline{
      display:inline-block;
      margin-right:10px
      }
  ul{
      margin:0;
      list-style: none;
      }
  .change h3{
      display:block !important;
      color:hotpink !important
      }
  .change{
      background:rgb(24, 24, 23)
      }
  h3{
      margin-top:0;
      font-weight:lighter;
      }
  ul{
      padding:0
      }
  ul li{
    background:rgb(53, 51, 51);
    padding-bottom:10px;
    padding-left:20px}
  .min{
      min-width:1200px;
       max-width:2000px;
      margin:0 auto;
      position:relative
  }


</style>
<script>
    export default{
        data(){
            return{
                // lunbo:[0],
                video:[0],
                num:0,
                a:false
            }
        },
        methods:{
            tov1(e){
                var id=e.target.dataset.id
                console.log(id)
                this.$router.push('/v1?id='+id)
            },
            getv(){
                this.axios.get('getv1')
                .then(res=>{
                    console.log('video'+res)
                    var list=res.data.data
                    if(list.length>6){
                        list.splice(6,)
                    }
                    this.video=list
                    console.log("video"+this.video)
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            leave(e){
               e.target.classList.remove("change")
                this.a=false
            },
            enter(i,$event){
                this.a=true
                $event.target.classList.add("change")
                if(this.a){
                this.num=i
                }
                console.log(this.num)
            },
            
        },
        created(){
            // this.axios.get("lunbo")
            // .then(res=>{
            //     this.lunbo=res.data.data
            //     console.log(res)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
            this.getv()
        },
    }
</script>