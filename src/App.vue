<template>  
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><RouterLink  to="/" class="text-white nav-link px-2  ">首頁</RouterLink></li>
          <li><RouterLink  to="/about" class="text-white nav-link px-2 ">About</RouterLink></li>
         
          <!-- <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li> -->
       
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button 
            @click="$router.push('/login')"
            type="button" class="btn btn-outline-light me-2">
            Login
          </button>
          <button
           @click="$router.push('/sign')"          
           type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  <!--  -->

  <RouterView />
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

</script>

<style lang="scss" >/*
  .container{
    // height: 50vh;
    background-color: rgb(0, 255, 195);
  }


  .row{
    background-color: antiquewhite;

    
    
  }
*/
</style>
