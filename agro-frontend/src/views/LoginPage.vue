<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="form.username" type="text" placeholder="username" required />
      <input v-model="form.password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      message: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('login/', this.form);
        this.message = 'Login successful!';
        console.log('Response data:', response.data); // Use the response data
        this.$router.push('/dashboard'); // Redirect to dashboard
      } catch (error) {
        this.message = 'Login failed. Please check your credentials.';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}
</style>