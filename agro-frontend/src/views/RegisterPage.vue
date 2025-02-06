<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="form.first_name" type="text" placeholder="first_name" required />
      <input v-model="form.last_name" type="text" placeholder="last_name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.username" type="text" placeholder="username" required />
      <input v-model="form.password" type="password" placeholder="Password" required />
      <input v-model.number="form.phone_number" type="text" placeholder="phone_number" required />
      <select v-model="groups">
        <option disabled value="">Please select one group</option>
        <option>Admins</option>
        <option>Manager</option>
        <option>Assistant Manager</option>
        <option>Employee</option>
      </select>
      <button type="submit">Register</button>
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
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        phone_number: '',
        groups: ''
      },
      message: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('register/', this.form);
        this.message = 'Registration successful!';
        this.$router.push('/login'); // Redirect to login page
      } catch (error) {
        this.message = 'Registration failed. Please try again.';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.register {
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