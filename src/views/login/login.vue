<template>
    <div class="login">
        <div class="mask">
            <div class="title">Welcome to DouYu</div>

            <div class="conter">
                <div class="coordinates-icon">
                    <div class="coordinates topAct">
                        <img src="./images/login.png"/>
                    </div>
                    <div class="circle-1-1 circle-show-2"></div>
                    <div class="circle-2-2 circle-show-1"></div>
                    <div class="circle-3-3 circle-show"></div>
                </div>
            </div>

            <form class="form" @click.submit.prevent>
                <div class="input-div">
                    <i class="fa fa-user-o icon" aria-hidden="true"></i>
                    <input type="text" id="name" class="input" name="name" v-model.trim='formData.name'
                           placeholder="姓名">
                </div>
                <div class="input-div">
                    <i class="fa fa-phone icon" aria-hidden="true"></i>
                    <input type="text" id="phone" class="input" name="phone" v-model.trim='formData.phone'
                           placeholder="手机号">
                </div>

                <button class="submit" type="submit" @click="loginHandler(formData)">Sign in</button>
            </form>

        </div>
    </div>
</template>
<script>
  import validation from 'assets/scripts/validation'
  import * as types from '../../store/modules/login/mutation-type'

  export default {
    name: 'login',
    data() {
      return {
        formData: {
          name: '',
          phone: ''
        }
      }
    },
    methods: {
      Validate(formData) {
        if (validation.isEmpty(formData.name)) {
          MessageBox.alert('请输入姓名')
          return false
        } else if (validation.isEmpty(formData.phone)) {
          MessageBox.alert('请输入您的手机号')
          return false
        } else if (!validation.checkPhone(formData.phone)) {
          MessageBox.alert('您的手机号格式有误')
          return false
        } else {
          return true
        }
      },
      loginHandler(formData) {
        if (this.Validate(formData)) {
          console.info(formData)

          this.$store.commit(types.LOGIN, JSON.stringify(formData))

          localStorage.setItem('login_user_info_cookie', JSON.stringify(formData))
          MessageBox.alert('登录成功').then(() => {
            //this.$router.push({ name: 'home' })
//            console.info(this.$router.query.redirect)


            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
              path: redirect
            })


          })
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
    @import '../../assets/styles/mixin';

    .login {
        min-height: 100vh;
        width: 100%;
        background-image: url('./images/bg@2x.jpg');
        background-size: 100%;

        position: relative;
        .mask {
            position: absolute;
            padding: 1.6rem 0.9rem 0 0.9rem;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(#000, 0.4);

        }
        .title {
            font-size: 0.36rem;
            color: rgb(255, 255, 255);
            font-family: "Helvetica Neue";
            line-height: 0.667;
            text-align: center;
        }

        .conter {
            padding: 2rem 0.3rem 0 0.3rem;
        }

        .input-div {
            height: 0.9rem;
            display: flex;
            width: 100%;
            font-size: 0.28rem;
            margin-bottom: 0.2rem;
            border-radius: 0.04rem;
            background-color: rgba(255, 255, 255, .1);
            padding-left: 1rem;
            position: relative;
            .icon {
                position: absolute;
                left: 0.3rem;
                top: 50%;
                transform: translateY(-50%);
                font-size: 0.4rem;
                color: rgba(#ffffff, 0.7);
            }
            .input {
                flex: 1;
                -webkit-appearance: none;
                border: none;
                background-color: transparent;
                color: rgba(#fff, 0.7);
                @include hbPlaceholder {
                    color: rgba(#ffffff, 0.4);
                }
            }
        }

        .submit {
            width: 100%;
            height: 0.9rem;
            border-radius: 0.04rem;
            background-color: rgb(11, 211, 138);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.4rem;
            border: none;
            margin-top: 0.5rem;
            color: #ffffff;
        }

        .coordinates-icon {
            width: 4rem;
            height: 2.5rem;
            margin: 0.5rem auto;
            position: relative;
            .coordinates {
                width: 1.5rem;
                overflow: hidden;
                position: absolute;
                z-index: 8;
                left: 32%;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .circle-1-1 {
                width: 100%;
                height: 1.5rem;
                overflow: hidden;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 100%;
                background-color: rgba(255, 255, 255, 0.2);
                position: absolute;
                bottom: 0;
                z-index: 1;
                opacity: 0;

            }
            .circle-2-2 {
                width: 2.3rem;
                height: 0.8rem;
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 100%;
                background-color: rgba(255, 255, 255, 0.5);
                left: 75%;
                margin-left: -2.17rem;
                bottom: 0.35rem;
                position: absolute;
                z-index: 2;
                opacity: 0;
            }
            .circle-3-3 {
                width: 1.3rem;
                height: 0.5rem;
                overflow: hidden;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 100%;
                z-index: 3;
                left: 35%;
                margin-left: -0.08rem;
                bottom: 0.5rem;
                position: absolute;
                opacity: 0;
            }
        }
        .topAct {
            animation: topAct 3s ease-in-out infinite;
            -webkit-animation: topAct 3s ease-in-out infinite;
        }
        @keyframes topAct {
            0% {
                top: -100px;
            }
            50% {
                top: -30px;
            }
            100% {
                top: -100px;
            }
        }

        .circle-show {
            animation: circleShow 3s ease-in-out infinite 1s;
            -webkit-animation: circleShow 3s ease-in-out infinite 1s;
            -moz-animation: circleShow 3s ease-in-out infinite 1s;
            -ms-animation: circleShow 3s ease-in-out infinite 1s;
            -o-animation: circleShow 3s ease-in-out infinite 1s;
        }
        @keyframes circleShow {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0.7;
            }
            100% {
                opacity: 0;
            }
        }

        .circle-show-1 {
            animation: circleShow1 3s ease-in-out infinite 1.3s;
            -webkit-animation: circleShow1 3s ease-in-out infinite 1.3s;
            -moz-animation: circleShow1 3s ease-in-out infinite 1.3s;
            -ms-animation: circleShow1 3s ease-in-out infinite 1.3s;
            -o-animation: circleShow1 3s ease-in-out infinite 1.3s;
        }
        @keyframes circleShow1 {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        .circle-show-2 {
            animation: circleShow2 3s ease-in-out infinite 1.5s;
            -webkit-animation: circleShow2 3s ease-in-out infinite 1.5s;
            -moz-animation: circleShow2 3s ease-in-out infinite 1.5s;
            -ms-animation: circleShow2 3s ease-in-out infinite 1.5s;
            -o-animation: circleShow2 3s ease-in-out infinite 1.5s;
        }
        @keyframes circleShow2 {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }
</style>
