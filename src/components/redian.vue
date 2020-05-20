<template>
    <main>
        <div class="container">
            <div class="flex left">
                <div class="top">
                    <img src="https://cdn.migu.cn/12001/upload/column/20190903145054502135.png" alt="" class="small">
                    <span>热点</span>
                </div>
                <div>
                    <span>最新</span>
                    <span>猜你喜欢</span>
                </div>
            </div>
            <div class="flex left">
                <div class="rd" v-for="(t,i) of list" :key='i' :data-lid="t.lid">
                    <img :src="t.imgsm" alt="" @click="detail" :data-lid="t.lid">
                    <p>{{t.total}}</p>
                </div>
            </div>
        </div>
        <div class="ft" :style="{backgroundImage:'url('+ft[0].imgsm+')'}" @mouseout="off" @mouseover="on"
        @mouseup="up" @mousemove="move" @mousedown="down" id="video"
        >
            
                <audio :src="jx[0].path" id='ad' preload="auto" loop='loop' style="display:none"></audio>
                <!-- <div class="img"> -->
                    <img :src="require('../assets/播放0'+a+'.png')" alt="" @click='change' class="img">
                <!-- </div> -->
            
        </div>
    </main>
</template>
<style scoped>
    .active{
        display: block !important;
    }
    .ft>div{
       
        width:100%;
        height:100%
    }
    .img{
        display: block;
        width:32px;
        height:32px;
        /* position:absolute;
        top:50%;
        left:50%;
        margin-left:-16px;
        margin-top:-16px;
        z-index:10000; */
        display: none;
        margin:34px auto
    }
    .ft{
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
        transform-origin:center ;
        overflow: hidden;
        width:100px;
        height:100px;
        position: absolute;
        top:600px;
        left:300px;
        z-index:10000;
        border-radius:50%;
        animation:f 100s linear infinite;
        /* background-color: rgb(148, 131, 131); */;
        /* text-align: center; */
        /* line-height: 100px; */
    }
    @keyframes f{
        0%{transform:rotate(0deg);}
        25%{transform:rotate(90deg);}
        50%{transform:rotate(180deg);}
        75%{transform:rotate(270deg);}
        100%{transform:rotate(360deg);}
    }
    .container{
        width:1200px;
        margin: 0 auto}
    .flex{
        display:flex;
        justify-content: space-between !important;
        flex-wrap: wrap;
        align-items: center;
        }
    .left{
        margin-top:10px;
        justify-content: flex-start;
        }
    .rd>img{
        width:100%;height:140px;
        }
    .rd>img:hover{
        transform: scale(1.1);
        transition-duration: 1s
        }
    p{
        margin:5px 0;
        width:100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
        }
    .rd{
        overflow:hidden;
        width:250px;
        height:200px;
        }
    .top{
        margin-top:20px
        }
    .top>img{
        vertical-align: bottom
        }
    .top>span{
        display:inline-block;
        margin-left:10px;
        font-size:18px;
        font-weight:bolder
        }
</style>
<script>
    export default{
        data(){
            return{
                list:[0],
                ft:[0],
                jx:[0],
                a:2,
                canves:false,
                x:0,
                y:0
            }
        },
        methods:{
            down(e){
                e.nodeName="DIV"
                this.canves=true;
                this.x=e.offsetX;
                this.y=e.offsetY
                console.log(this.x,this.y)
            },
            move(e){
                if(this.canves){
                    var x1=e.clientX
                    var y1=e.clientY
                e.target.style.left=x1-this.x+'px'
                e.target.style.top=y1-this.y+'px'
                }
            },
            up(e){
                console.log(e.target.style.left,e.target.style.top)
                sessionStorage.setItem('x',e.target.style.left)
                sessionStorage.setItem('y',e.target.style.top)
                this.canves=false
            },
            on(){
                document.getElementsByClassName('img')[0].classList.add('active')
            },
            off(){
                document.getElementsByClassName('img')[0].classList.remove('active')
            },
            detail(e){
                var lid=e.target.dataset.lid
                this.$router.push('/rd_detail?lid='+lid)
            },
            change(){
                var ad=document.getElementById('ad')
                console.log(ad)
                if(ad.paused){
                    this.a=1
                    ad.play()
                }else{
                    ad.pause()
                    this.a=2
                }
               
            },
            getsinger(){
                return new Promise((resolve,reject)=>{
                    this.axios.get("rd")
                    .then(
                    res=>{
                        var ft=res.data.data.filter((e,i,arr)=>{
                            return e.song=='飞天'
                        })
                        console.log(ft)
                        this.ft=ft
                        // // this.ft=ft[0].imgsm.toString()
                        // console.log(this.ft)
                        var list=res.data.data
                        list.splice(8,)
                        this.list=list
                        console.log(this.list)
                        resolve(ft)
                    }
                )
                .catch(err=>{
                    console.log(err)
                    
                    })
                })
            
            },
            getmp(ft){
                return new Promise((resolve,reject)=>{
                    console.log(ft)
                    this.axios.get('play',{params:{
                    song:ft[0].song
                }})
                .then(res=>{
                    this.jx=res.data.data
                    // console.log(this.jx)
                    console.log(res)

                    resolve()
                })
                .catch(err=>{
                    console.log(err)
                })
                })
               
            }
        },
        created(){
        this.getsinger().then(this.getmp).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        },
        mounted(){

            document.addEventListener("keydown",(e)=>{
            var key=e.keyCode
            var ad=document.getElementById('ad')  
            if(key==38){
                ad.volume+=0.1
                if(ad.volume>1){
                    ad.volume=1
                }
            }
            if(key==40){
               ad.volume-=0.1
               if(ad.volume<0){
                   ad.volume=0
               }
            }
            console.log(ad.volume)
            })
            //
            var vi=document.getElementById('video')
            vi.style.left=sessionStorage.getItem('x')
            vi.style.top=sessionStorage.getItem('y')
        }
    }
</script>