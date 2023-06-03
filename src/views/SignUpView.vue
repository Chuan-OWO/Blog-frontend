<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">


    <div class="row align-items-center g-lg-5 py-5">


        <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                註冊
            </h1>
            <p class="col-lg-10 fs-4">
                註冊註冊註冊註冊註冊
            </p>
        </div>

        <div class="col-md-10 mx-auto col-lg-5">
  
              <form 
                class="p-4 p-md-5 border rounded-3 bg-body-tertiary"  

                @submit.prevent="sign"
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
                          type="text"
                          class="form-control" 
                          id="floatingInput" 
                          placeholder="username"
                        
                        v-model="user.username"
                      >
                      <label for="floatingInput">username</label>
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
                  
                  <button class="w-100 btn btn-lg btn-primary" type="submit">
                      註冊
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

<script >
export default{
    data() {
        return {
        user:{
        email:'',
        username:'',
        password:'',
        }
    }
    },
    methods:{
        async sign(){
            // console.log('sign');
            
            const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_SIGN}`

            try {
                const res = await this.axios.post(api,this.user)

                console.log(res);

                this.$router.push('/login');
            } catch (error) {
                console.error(error);
                alert(error)
            }
        }
    }
}
</script>

