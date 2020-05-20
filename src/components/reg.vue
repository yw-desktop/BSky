<template>
    <main>
        <div class="mar">
            <!-- title -->
            <div class=" shadow">
                <h2>注册BSky账号</h2>                
            </div>
            <!-- 注册区域 -->
            <div class="center">
                
                <div>用户名</div><input type="text" placeholder="请输入用户名" v-model="value1" @blur="user">
                <span id="d1"></span>
                
                
                <div>密码</div><input type="text" placeholder="请输入密码" v-model="value2" @blur="pwd">
                 <span id="d2"></span>
                
               
                <div>确认密码</div><input type="text" placeholder="在输入一次" v-model="value3" @blur="upwd">
                <span id="d3"></span>
                
                
                <ul class="bottom">
                    <input type="checkbox" :checked="checked" @click="ch">阅读平同意《BSky用户协议》及《BSky隐私协议》
                </ul>
                <button @click="reg">注册</button>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .mar{
        width:800px;margin:0 auto;
        background:floralwhite}
    .flex{
        display: flex;
        justify-content: space-between}
    .shadow{
        box-shadow:0 20px 10px #eee ;
        border-bottom:1px solid #f8f8f8;
        text-align:start}
    .bottom{
        font-size:14px;
        margin:20px 0}
    .center{
        margin:30px auto;
        text-align: center}
    button{
        width:100px;
        height:35px;
        border:1px solid rgb(243, 12, 12);
        background:rgb(245, 20, 50);border-radius:5px}
    .center>input{
        height:25px;
        width:250px;
        margin-top:10px;
        }
    .center>div{
        display: inline-block;
        width:100px
        }
    span{
        display:block;height:20px
        }
    button{
        margin-bottom:20px
        }
</style>
<script>
    export default{
        data(){
            return{
                value1:"",
                value2:"",
                value3:"",
                checked:false
            }
        },
        methods:{
            ch(){
                if(this.checked){
                    this.checked=false
                }else{
                    this.checked=true
                }
                console.log(this.checked)
            },
            user(){
            var d1=document.getElementById("d1")
            var reg=/^([A-Za-z0-9]|[._-]){3,13}$/;
            if(reg.test(this.value1)){
                d1.style.color="green";
                d1.innerHTML="此用户名可用";
            }else{
                d1.style.color="red";
                d1.innerHTML="此用户名重复或格式不正确";
            }
            },
            pwd(){
            var d2=document.getElementById("d2")
            var reg=/^([A-Za-z0-9]|[._-]){6,13}$/;
            if(reg.test(this.value2)){
                d2.style.color="green";
                d2.innerHTML="密码可用";
            }else{
                d2.style.color="red"
                d2.innerHTML="密码不可用";
            }
            },
            upwd(){
            var d3=document.getElementById("d3")
            var reg=/^([A-Za-z0-9]|[._-]){6,13}$/;
            if(!reg.test(this.value3)){
                d3.style.color="red";
                d3.innerHTML="密码不可用";
            }else if(this.value2!=this.value3){
                d3.style.color="red";
                d3.innerHTML="2次密码不同";
            }else{
                d3.style.color="green";
                d3.innerHTML="2次密码相同同";
            }
            },
            reg(){
            var uname=this.value1
            var upwd=this.value2
            var obj={
                uname:uname,
                upwd:upwd
                }
            if(this.checked){
                this.axios.get("reg",{params:obj})
                .then(res=>{
                    console.log(res)
                    if(res.data.code==1){
                        confirm("注册成功")
                        .then(
                            this.$router.push("/")
                        )
                    }else{
                        confirm("注册失败")
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                alert('同意协议了吗')
            }
        },
        },
        
    }
</script>