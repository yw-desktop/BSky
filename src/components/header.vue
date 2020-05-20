<template>
    <main class='min'>
        <div class="flex align header">
            <div><img src="../assets/音乐.png" alt="" class="img1"></div>
                <div @click="inde">首页</div>
                <div @click='tosonglist'>音乐</div>
                <div @click='tovideolist'>视频</div>
                <div>阅读</div>
                <div>游戏</div>
                <div @click="tomanhua">次元</div>
                <div class="in">
                    <input type="text" class="input" placeholder="BSky汇" v-model="search" @keydown.13="pressdown">
                    <button class="btn" @click="pressdown">
                       <img src="../../public/img/search.png" alt="" class="img4">
                    </button>
                </div>
                <div>企业服务</div>
                <div>关于BSky</div>
                <div>加入我们</div>
                <div>客服</div>
            <div><img src="../../public/img/phone.png" alt="" class="img2"></div>
            <div class="repo" >
                <img src="../../public/img/man.png" alt="" class="img3" @mouseenter="show">
                <div class="hide abpo"  @mouseleave="hidden">
                    <!-- <div >{{msg}}</div> -->
                    <mt-button @click="dk" id="username" size="small">{{msg}}</mt-button>
                    <!-- <div @click="collection">我的收藏</div> -->
                    <mt-button @click="collection" size="small">我的收藏</mt-button>
                   
                </div>
            </div>
        </div>
        <!-- 登录框 -->
        <div class="mubu hide" id="mb"></div>
        <div class="login hide" id="log">
            <div class="top">
                <img src="https://www.migu.cn/assets/pc/images/logo.png" alt="">用户名密码登录
            </div>
            <div class="middle">
                <input type="text" placeholder="请输入用户名" v-model="value" @blur="user">
                <span id="s1"></span>
                <input type="text" placeholder="请输入密码" v-model="password" @blur="pwd">  
                <span id="s2"></span>
                <button @click="login">登录</button>
                <div class="at">
                    <div><input type="checkbox">自动登录</div>
                    <div>忘记密码</div>    
                </div>
                <div class="bottom">没有账号?<a href="javascript:;" @click="reg">注册</a></div>         
            </div>
        </div>
        <div class="gb hide" id="gb" @click=gb>×</div>
   
    </main>
</template>
<style scoped>

    .header>div:hover{
        color:black
    }
    .header{
        
        margin:0 20px;
        opacity: 0.8;
        color:rgba(255, 250, 240, 0.863);
        position: relative;
        max-width: 1960px;
    }
    .flex{
        display:flex;
    justify-content:space-between;
        flex-wrap:nowrap;}
    .align{
        width:100%;
        height:70px;
        margin:0 auto;
        align-items:center; }
    .input{
        opacity:0.8;
        border-radius:50px 0 0 50px;
        border:0;margin:0;padding:0;
        width:180px;height:40px !important;
        background:#eee;
        display:block;padding-left:15px;}
    .btn{
        opacity:0.8;
        border-radius:0 50px 50px 0;
        border:0;margin:0;padding:0;
        width:40px;height:40px;
        background:#eee}
    ul>li
    {
        list-style:none
        }
    .img1{
        width:88px;
        height:42px
        }
    .img2,.img3{
        width:20px;
        height:20px
        }
    .img4{
        width:30px;
        height:30px
        }
    .in{
        display:flex;
        flex-direction:start}
    /* 登录框css */
    .top{
        margin-top:20px;
        text-align: start;
        margin-left:30px
        }
    .top>img{
        width:90px;
        height:40px;
        vertical-align:middle
        }
    .login{
        position:fixed;
        z-index:99999;top:50%;
        left:50%;width:400px;
        margin-left:-200px;
        margin-top:-200px;
        border-bottom:1px solid #eee;
        background:#fff}
    .mubu{
        position:fixed;
        width:100%;height:100%;
        opacity: 0.3;z-index:555;
        background:#000
        }
    .middle{
        padding:30px
        }
    .middle>input{
        display:block;
        width:100%;
        margin: 0 auto;
        height:30px;
        }
    .middle>span{
        display:block;
        height:20px}
    .middle button{
        border-radius:5px;
        border:1px solid rgb(248, 8, 140);
        background:rgb(170, 18, 53);
        color:#fff;width:100px;
        height:30px;
        margin-top:10px}
    .at{
        display:flex;
        justify-content: space-between
        ;margin:10px;font-size:14px}
    .at>div>input{
        width:15px;
        height:15px
        }
    .bottom{
        text-align:center;
        font-size:14px}
    .bottom a{
        color:rgb(65, 60, 53)}
    .hide{
        display:none
        }
    .active{
        display:block !important
        }
    .gb{
        position:fixed;z-index: 1000;
        background:azure;
        border-radius:50%;
        top:50%;width:20px;
        height:20px;
        left:50%;
        margin-left:190px;
        margin-top:-210px;}
    .repo{
        position: relative
        }
    .abpo{
        width:90px;
        min-height: 100px;
        background-color:#f8f8f8;
        position: absolute;
        top:30px;
        right:-10px;
        font-size:12px;
        color:#6633ff;
        z-index:20000 !important;
        border-radius:5px;
        box-shadow:
        1px 1px 2px 2px #3300ff,
        1px 1px 4px 4px #00ffff;
        }
    .abpo div{
        margin: 0
        }
    .min{
        background-image:linear-gradient(rgb(122, 115, 115),rgb(168, 144, 144));
        min-width:1200px;
        position:relative;
        z-index: 99999;
    }
    
</style>
<script>
    export default{
        data(){
            return{
                msg:"登录",
                value:"",
                password:"",
                search:""
            }
        },
        methods:{
        tomanhua(){
                this.$router.push('/manhua')
            },
        pressdown(){
                alert("你正在搜《"+this.search+"》吗")
            },
        tosonglist(){
            this.$router.push('/songlist') 
                  },
        tovideolist(){
            this.$router.push('/videolist')
        },
            //跳转收藏
        collection(){
            this.$router.push("/collection")
        },
            //显示登录
        show(e){
            e.target.nextElementSibling.classList.add("active")

            },
            //隐藏登录
        hidden(e){
            e.target.classList.remove("active")
        },
            //回到首页的方法
        inde(){
            this.$router.push("/")
        },
            //打开登录框
        dk(){
            if(this.msg=="登录"){
            var h=document.getElementsByClassName("hide")
            for(var item of h){
               item.classList.add("active")
            }
            }else{
                this.msg="登录"
                sessionStorage.clear();
                window.location.reload();
            }
        },
        //关闭登录框
        gb(){
            var h=document.getElementsByClassName("hide")
            for(var item of h){
                item.classList.remove("active")
            }
        },
        //失去焦点
        user(){
            var reg=/^([A-Za-z0-9]|[._-]){3,13}$/;
            var s1=document.getElementById("s1");
            console.log(s1);
            if(!reg.test(this.value)){
                s1.innerHTML="用户名格式不正确";
                s1.style.color="red";
            }else{
                s1.innerHTML="此用户名可用";
                s1.style.color="green";
            }
        },
        pwd(){
            var reg=/^([A-Za-z0-9]|[._-]){6,16}$/;
            var s2=document.getElementById("s2");
            if(!reg.test(this.password)){
                s2.innerHTML="密码格式不正确";
                s2.style.color="red";
            }else{
                s2.innerHTML="密码格式正确";
                s2.style.color="green";
            }
        },
        login(){
            if(this.msg=="登录"){
            var obj={
                uname:this.value,
                upwd:this.password
            }
            this.axios.get("login",{params:obj})
            
            .then(res=>{
                console.log(res)
                
                if(res.data.code==-2){
                    alert("用户名不正确或密码不正确")
                }else{
                    sessionStorage.setItem('username',res.data.data[0].uname)
                    alert("登陆成功")
                    this.msg="登出"
                    
                    this.$router.push("/"),
                    
                    this.gb()
                     
                }
            })
            .catch(err=>{
                console.log(err)
            })
            }else{
                
                
            }
        },
        //跳转注册
        reg(){
            this.$router.push("/reg")
            this.gb()
        }
        },
        watch:{
            search(){
                console.log(this.search)
            }
        },
        created(){
            if(sessionStorage.getItem('username')){
                this.msg='登出'
            }else{
                this.msg='登录'
            }
        },
}
</script>