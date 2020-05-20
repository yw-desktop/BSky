<template>
    <main v-if='info.length>0'>
        <div class="container" :style="'background:url('+info[0].imgmi+') no-repeat top'"></div>
        <div class="mask"></div>
        <div class="content flex">
            <img :src="info[0].imgmi" alt="">
            <div class="right">
                <h4><img src="" alt="">{{info[0].song}}</h4>
                <p>歌手名：{{info[0].singer}}</p>
                <p>作词：{{info[0].writer}}</p>
                <p>作曲：{{info[0].compose}}</p>
                <div class="flex miuse">
                    <div class="red" >
                        <img src="../assets/play01.png" alt="" :data-song="info[0].song">
                        <span  @click="audio" :data-song="info[0].song">播放歌曲</span>
                    </div>
                    <div><img src="../assets/load01.png" alt=""><span>下载</span></div>
                    <div>
                        <img v-bind:src="'http://49.233.215.18:4000/img/shoucang0'+a+'.png'" alt="" 
                        @click="addsinger">
                        <span>收藏</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="left">
            <h3>歌词</h3>
                <p>歌手名：{{info[0].singer}}</p>
                <p>作词：{{info[0].writer}}</p>
                <p>作曲：{{info[0].compose}}</p>
            <div class="bottom">{{info[0].content}}</div>
        </div>
        <div class="center">
            <h6>用户评论</h6>
            <textarea name="" id="" cols="30" rows="10" v-model='value'></textarea>
            <!-- <input type="text" v-model="value"> -->
            <button @click="comments">提交评论</button>
        </div>
        <div class="all">
            <div v-for="(t,i) of pinglun" :key=i class="center back">
                <div class="flex">
                    <p>{{t.pname}}</p>
                </div>
                <div class="start">{{t.content}}</div>
                <div class="flex">
                    <div>
                        <img src="../assets/点赞.png" alt="" :data-count="t.count">
                        <span>{{t.count}}</span>
                    </div>
                    <div>{{t.time | dateFormat}}</div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .all{
        height:500px;
        overflow: scroll;
        margin:0 auto
    }
    textarea{
        width:1000px !important; 
        height:75px !important
    }
    .container{
        opacity:0.9;filter:blur(40px);
        height:400px;
        
        }
    .mask{
        width:100%;height:400px;
        background-color:rgb(116, 110, 110);
        position: absolute;left:0px;top:0;z-index:-1;
        margin:0 auto !important
        }
    .content{
        position: absolute;
        left:100px;top:100px;
       
        }
    .content>img{
        width:260px;
        height:260px
        }
    .miuse{
        display:flex;
        align-items:flex-end;
        }
    .red
    {background-color:rgb(230, 33, 82)
    }
    img{
        vertical-align: middle}
    .miuse div{
        border-radius: 13px;
        padding:3px 10px;
        }
    .miuse img{
        vertical-align:center}
    .bottom{width:200px;}
    .flex{
        display:flex;
        justify-content: space-between}
    .left{
        text-align: start;
        margin-left:200px !important
        }
    textarea{
        width:100%;
        height:70px
        }
    .center{
        margin:0 auto;
        width:1000px;
        margin-bottom:10px;
        
        }

    .center>h6{
        text-align: start;
        font-size:24px;
        margin-bottom:10px}
    .back{
        background:rgb(250,250,250);
        border:1px solid #eee
        }
    .start{
        text-align: start;
        padding:0 20px
        }
    button{
        width:100px;height:45px;
        border-radius:5px;
        background:rgb(179, 27, 110);
        
        }
    .miuse>div{
        height:35px;
        margin-right:20px;
        border:1px solid rgb(240,240,240)}
        .right{margin-left:20px;
        display:flex;
        flex-direction: column
    }
</style>
<script>
    export default{
        data(){
            return{
                a:1,
                //用户输入的评论
                value:"",
                //用户获取的点赞
                count:0,
                //保存歌手信息
                info:[],
                //保存评论
                pinglun:[],
                //
                lid:0,
               
            }
        },
        methods:{
            audio(e){
                var song=e.target.dataset.song
                this.$router.push("/audio?song="+song)
            },
            //添加至收藏
            addsinger(){
                if(this.a==1){
                    this.a=2
                }else{
                    this.a=1
                }
                console.log(this.a)
                //歌手
                var song=this.info[0].song;
                //歌名
                var singer=this.info[0].singer;
                //歌曲的id
                var lid=this.lid
                //如果this.a=2说明收藏否者说明取消收藏
                var code=this.a
                var obj={
                    user:sessionStorage.getItem('username'),
                    singer:singer,
                    song:song,
                    lid:lid,
                    code:code
                }
                //如果a等于才去添加
                if(this.a==2){
                this.axios.get("add",{params:obj})
                .then(res=>{res=>{console.log(res)}})
                .catch(err=>{console.log(err)})
                }else{
                //否则就去删除
                    this.axios.get("remove",{params:obj})
                    .then(res=>{console.log(res)})
                    .catch(err=>{console.log(err)})
                }
            },
            // //更新点赞
            // update(e){
            //     e.target.dataset.count+=1;
            //     this.comments()
            // },
            //改变收藏图片

            //插入评论的方法
            comments(){
               var time=new Date().getTime()
                var obj={
                    pid:this.lid,
                    content:this.value,
                    time:time,
                    count:this.count
                }
                console.log(this.value)
                console.log(time)
                console.log(this.count)
                this.axios.get("comment",{params:obj})
                .then(
                    res=>{
                        console.log(res)
                        this.getpl();
                        this.value=""
                })
                .catch(err=>{console.log(err)})
            },
             //获取评论
            getpl(){
               var obj={
                   id:this.$route.query.lid
               }
                this.axios.get("pinglun",{params:obj})
                .then(res=>{
                    
                this.pinglun=res.data.data.reverse()
                console.log(res)
            })
                .catch(err=>{console.log(err)})
            },
            //初始请求收藏。看看这首歌是否有被收藏
            getsong(){
                this.axios.get('getsong',{params:{
                    lid:this.lid,
                    user:sessionStorage.getItem('username')
                    }})
                .then(res=>{
                    console.log(res)
                    //保存状态，是否收藏
                    if(res.data.data[0].code==undefined){
                        this.a=1
                    }else{
                        this.a=res.data.data[0].code
                        console.log(this.a)
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
           
        created(){
            //接收跳转传来的参数歌曲的id
            var lid=this.$route.query.lid;
            this.lid=lid
            console.log(this.lid)
            var obj={
                lid:lid
            }
            this.axios.get('rd_detail',{params:obj})
            .then(res=>{
                console.log(res)
                this.info=res.data.data
                console.log(this.info)
            })
            .catch(err=>{
                console.log(err)
            });
            this.getpl();
            this.getsong()
        },
       
    }
</script>