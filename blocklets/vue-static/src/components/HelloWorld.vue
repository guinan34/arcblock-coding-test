<template>
  <div v-if="!isEditable">
    <section class="vh-100" style="background-color: #f4f5f7">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-6 mb-4 mb-lg-0">
            <div class="card mb-3 rounded-box">
              <div class="row g-0">
                <div
                  class="col-md-4 gradient-custom text-center text-white"
                  style="
                    border-top-left-radius: 0.5rem;
                    border-bottom-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                  ">
                  <img
                    src="../assets/nabixiaoxin-touming.png"
                    alt="Avatar"
                    class="img-fluid my-5"
                    style="width: 80px" />
                  <h5>{{ userinfos.name }}</h5>
                  <p>Devops engineer</p>
                  <i class="far fa-edit mb-5"></i>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <button @click="toggleEdit" class="right-aligned-button button-border">编辑</button>
                    <h6>Information</h6>

                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Email</h6>
                        <p class="text-muted">{{ userinfos.email }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Phone</h6>
                        <p class="text-muted">{{ userinfos.phone }}</p>
                      </div>
                    </div>
                    <h6>Password</h6>
                    <p class="text-muted">{{ userinfos.password }}</p>
                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Created</h6>
                        <p class="text-muted">{{ userinfos.createdAt }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Updated</h6>
                        <p class="text-muted">{{ userinfos.updatedAt }}</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-start">
                      <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else>
    <section class="vh-100" style="background-color: #f4f5f7">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-6 mb-4 mb-lg-0">
            <div class="card mb-3 rounded-box">
              <div class="row g-0">
                <div
                  class="col-md-4 gradient-custom text-center text-white"
                  style="
                    border-top-left-radius: 0.5rem;
                    border-bottom-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                  ">
                  <img
                    src="../assets/nabixiaoxin-touming.png"
                    alt="Avatar"
                    class="img-fluid my-5"
                    style="width: 80px" />
                  <h5><input type="text" v-model="editedContent.name" placeholder="name" class="small-input" /></h5>
                  <p>Devops engineer</p>
                  <i class="far fa-edit mb-5"></i>
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4">
                    <button @click="toggleEdit" class="right-aligned-button button-border">取消</button>
                    <button :disabled="error" @click="save" class="right-aligned-button button-border">保存</button>
                    <h6>Information</h6>

                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Email</h6>
                        <p class="text-muted">
                          <input
                            type="text"
                            v-model="editedContent.email"
                            placeholder="email"
                            class="small-input"
                            @input="validateInput" />
                        </p>
                        <p v-if="emailError" :style="{ color: 'red' }">邮箱格式不正确</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Phone</h6>
                        <p class="text-muted">
                          <input
                            type="text"
                            v-model="editedContent.phone"
                            placeholder="phone"
                            class="small-input"
                            @input="validateInput" />
                        </p>
                        <p v-if="phoneError" :style="{ color: 'red' }">手机号不正确</p>
                      </div>
                    </div>
                    <h6>Password</h6>
                    <p class="text-muted">
                      <input type="text" v-model="editedContent.password" placeholder="password" class="small-input" />
                    </p>
                    <hr class="mt-0 mb-4" />
                    <div class="row pt-1">
                      <div class="col-6 mb-3">
                        <h6>Created</h6>
                        <p class="text-muted">{{ editedContent.createdAt }}</p>
                      </div>
                      <div class="col-6 mb-3">
                        <h6>Updated</h6>
                        <p class="text-muted">{{ editedContent.updatedAt }}</p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-start">
                      <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfos: {},
      isEditable: false,
      editedContent: {},
      error: false,
      emailError: false,
      phoneError: false,
    };
  },
  created() {
    this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      try {
        const response = await fetch('/api/users/1');
        const data = await response.json();
        this.userinfos = data;
      } catch (error) {
        console.error('Fetch error:', error);
      }
    },
    toggleEdit() {
      this.isEditable = !this.isEditable;

      /* reset error value when user click cancel or edit */
      this.phoneError = false;
      this.emailError = false;
      this.error = false;

      /* assign original user data to a new variable for user editing */
      if (this.isEditable) {
        this.editedContent = this.userinfos;
      } else {
        /* reset user data as v-model binded the editted data*/
        this.fetchUserInfo();
      }
    },
    validateInput() {
      this.emailError = !this.editedContent.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
      this.phoneError = !this.editedContent.phone.match(/^1[3-9]\d{9}$/);

      /* if one of the format vadation is false, then can't save the page */
      if (this.emailError || this.phoneError) {
        this.error = true;
      } else {
        this.error = false;
      }
    },
    async save() {
      this.userinfos = this.editedContent;
      this.isEditable = false;
      const update_data = {
        email: this.userinfos.email,
        name: this.userinfos.name,
        phone: this.userinfos.phone,
        password: this.userinfos.password,
      };
      try {
        await fetch('/api/users/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(update_data),
        });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>
