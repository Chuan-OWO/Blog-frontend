<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <h1>已經登入的用戶頁面</h1>
    </div>
</template>
  
<script>
  export default {
    mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        // 沒登入 跳轉登入頁面
        alert("未登入")
        this.$router.push('/login');
      } else {
       
      }
    },
  };
</script>