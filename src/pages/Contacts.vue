<template>
    <main>
        <div class="container text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            <form @submit.prevent="sendForm()" class="mt-3">
                <div class="mb-3">
                    <label for="address" class="form-label text-white">Email address</label>
                    <input type="email" name="address" id="address" v-model="address" class="form-control"
                        :class="{ 'is-invalid': errors.address }">
                    <div id="address" class="form-text text-secondary">
                        We'll never share your email with anyone else.
                    </div>
                    <p v-for="(error, index) in errors.address" :key="`message-error-${index}`" class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label text-white">Name</label>
                    <input type="text" name="name" id="name" v-model="name" class="form-control"
                        :class="{ 'is-invalid': errors.name }">
                    <div id="name" class="form-text text-secondary">
                        We'll never share your name with anyone else.
                    </div>
                    <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label text-white">Message</label>
                    <div>
                        <textarea name="message" id="message" v-model="message" cols="148" rows="10" class="form-control"
                            :class="{ 'is-invalid': errors.message }">
                        </textarea>
                    </div>
                    <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="invalid-feedback">
                        {{ error }}
                    </p>
                </div>
                <div v-if="success" class="alert alert-success text-center text-uppercase" role="alert">
                    Message sent with success!
                </div>
                <div class="d-grid mt-5 mb-5">
                    <button type="submit" class="btn btn-outline-primary text-uppercase">send</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    name: 'Contacts',
    data() {
        return {
            store,
            title: 'contacts',
            address: '',
            name: '',
            message: '',
            loading: true,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            const data = {
                address: this.address,
                name: this.name,
                message: this.message
            };

            // pulisco l'array con i messaggi
            this.errors = {};

            axios.post(`${store.apiUrl}/contacts`, data).then((res) => {
                // console.log(res.data);
                this.success = res.data.success;
                if (!this.success) {
                    this.errors = res.data.errors;
                } else {
                    // ripulisco i campi di input
                    this.name = '';
                    this.address = '';
                    this.message = '';
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped></style>