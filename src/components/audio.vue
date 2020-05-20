<template>
    <main>
        <div class="container">
        <div class="">
            <h3>{{songs[0].song}}</h3>
            <div>{{songs[0].singer}}</div>
            
        </div>   
        <div class="trans">
            <img :src="songs[0].img" alt="">
        </div> 
        <audio :src="songs[0].path" controls="controls" class="absolute"></audio>
        </div>
    </main>
</template>
<style scoped>
    .trans>img{
       height:200px;
       position:relative;
       right:130px
    }
    .trans{
        width:200px;
        height:200px;
        border-radius: 50%;
        transform-origin: center;
        animation: trans 10s linear infinite;
        overflow:hidden;
        margin:20px auto;
        background-color: black;
        display: flex;
        align-items: center;
        opacity: 0.8;
    }
    @keyframes trans{
        0%{-webkit-transform:rotate(0deg);}
        20%{-webkie-transform:rotate(70deg);}
        40%{-webkie-transform:rotate(140deg);}
        60%{-webkit-transform:rotate(210deg);}
        80%{-webkit-transform:rotate(280deg);}
        100%{-webkit-transform:rotate(360deg);}
    };
    .container{
        width:1200px;
        margin:50px auto;
        }
    .flex{
        display:flex;
        justify-content: space-around;
        width:800px;
        margin:0 auto}
    .absolute{
        position: absolute;
        bottom:0;
        width:800px;
        margin:0 auto;
        margin-left:-400px;
        opacity: 0.9;
        }
    
</style>
<script>
import bus from '../bus.js'
    export default{
        data(){
            return{
                //保存歌名
                songs:[null],
               
                song:""
            }
        },
        methods:{
            //查找一首歌曲
     
        },
        created(){
            //接受子组件跳转来的参数,push到song中
            //查找一首歌曲
            this.song=this.$route.query.song;
            var song=this.$route.query.song;
            console.log(song);
            var obj={
                song:song
            }
            this.axios.get("play",{params:obj})
            .then(res=>{
                this.songs=res.data.data
                console.log(res)
                console.log(this.songs)
            })
            .catch(err=>{console.log(err)});
           
        },
        mounted(){
            bus.$on("val",function(data){
                
                console.log("data是"+data)
            })
        }
    }
</script>