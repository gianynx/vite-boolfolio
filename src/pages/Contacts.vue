<template>
    <main>
        <div class="container text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                    <input type="email" name="address" v-model="address" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Name</label>
                    <input type="text" name="name" v-model="name" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="textarea" class="form-label text-white">Message</label>
                    <div>
                        <textarea name="textarea" v-model="message" cols="148" rows="10"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return {
            title: 'contacts',
            address: '',
            name: '',
            message: ''
        }
    }
}
</script>

<style lang="scss" scoped></style>