<template>
    <div class="login">
        <div class="title">
            <p>91相亲网</p>
        </div>
        <div class="verification">
            <div class="username">
                <div class="left">
                    账号：
                </div>
                <div class="right">
                    <cube-input autofocus="true" v-model="value" ></cube-input>
                </div>
                <div class="clear"></div>
            </div>
            <div class="password">
                <div class="left">
                    密码：
                </div>
                <div class="right">
                    <cube-input :eye="eye" type="password" v-model="value" ></cube-input>
                </div>
                <div class="clear"></div>
            </div>
            <div class="forget"><a href="javascript:void(0);">忘记密码？</a></div>
            <div class="sub_button">
                <cube-button :primary="true">登录</cube-button>
            </div>
        </div>
        <div class="register">
            <p>还没有账号？<a href="javascript:void(0);">去注册</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                eye: {
                    open: true,
                    reverse: false
                }
            }
        }
    }
</script>

<style scoped>
.login{display: flex; flex-direction: column;height:100%;justify-content: center;background: url("../assets/bk.jpg");background-size: cover;}
.login .title{position:absolute;width:100%;top:4rem;}
.login .title p{font-size:0.4rem;padding-left:1.4rem;text-align:left;}


.verification{height:4rem;align-self: center;width:100%;}
.username,.password{padding:0 70px;margin-top:30px;}
.username .left{width:30%;font-size:0.3rem;float: left;line-height:0.7rem;text-align:left;}
.username .right{width:65%;float: left;border:1px solid #7b7b7b;}

.password .left{width:30%;font-size:0.3rem;float: left;line-height:0.7rem;text-align:left;}
.password .right{width:65%;float: left;border:1px solid #7b7b7b;}
.clear{clear: both;}
.forget{text-align:right;padding:0 70px;}
.forget a{font-size:0.2rem;}
.sub_button{padding:0 70px;margin-top:2rem;}

.register{position:absolute;bottom:0;width:100%;height:1rem;font-size:0.3rem;}
.register a{color: rgba(213, 174, 62, 0.95);}
</style>