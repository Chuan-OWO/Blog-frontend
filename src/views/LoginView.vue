<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">


    <div class="row align-items-center g-lg-5 py-5">


        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                登入
            </h1>
            <p class="col-lg-10 fs-4">
                登入登入登入登入登入
            </p>
        </div>


        <div class="col-md-10 mx-auto col-lg-5">

            <form 
                class="p-4 p-md-5 border rounded-3 bg-body-tertiary"

                @submit.prevent="login"
            >
                <div class="form-floating mb-3">
                    <input 
                        type="email" 
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"

                        v-model="user.email"
                    >
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"

                        v-model="user.password"
                    >
                    <label for="floatingPassword">密碼</label>
                </div>
                <!-- <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> 
                        Remember me
                    </label>
                </div> -->
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                    登入
                </button>
                <hr class="my-4">
                    <small class="text-body-secondary">
                        By clicking Sign up, you agree to the terms of use.
                    </small>
            </form>

        </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            user:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        async login(){
            // console.log('login');
            const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_LOGIN}`
            // console.log(api);
            
            try {
                const res = await this.axios.post(api,this.user)
                console.log(res);
                
                const token = res.data.token;

                localStorage.setItem('token', token);
                alert('登入成功')
                this.$router.push('/dashboard');

            } catch (error) {
                console.error(error);
                alert(error)
            }
        }
    }
}
</script>

