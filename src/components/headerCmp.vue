<template>
  <div>
    <v-app-bar
      class="hidden-sm-and-down"
      flat
      color="fbfdfff7"
      height="70px"
      style="
      background: rgba(255, 255, 255, 0.8);
      "
    >
      <router-link
        to="/"
      >
        <v-toolbar-title>
          <img
            class="ml-16"
            height="18"
            width="84"
            src="/img/logo.png"
            alt="logo"
          />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <p
        class="mr-6 my-2"
      >
        Our Products
      </p>
      <p
        class="mr-6 my-2"
      >
        About Us
      </p>
      <p
        class="mr-6 my-2"
      >
        Blog
      </p>
      <v-btn
        class="text-capitalize"
        color="orange"
        rounded
        dark
      >
        Download App
      </v-btn>
    </v-app-bar>
    <v-app-bar
      class="hidden-md-and-up"
      flat
      color="#FFFFFF"
      height="70px"
      style="
      background: rgba(255, 255, 255, 0.8);
      "
    >
      <router-link
        to="/"
      >
        <v-toolbar-title>
          <img
            height="18"
            width="84"
            src="/img/logo.png"
            alt="logo"
          />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="dialog = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
    >
      <v-card
        height="100vh"
      >
        <div
          class="d-flex"
        >
          <v-spacer></v-spacer>
          <v-btn
            class="mt-4 mr-4"
            icon
            @click="dialog = false"
          >
            <v-icon
              size="46px"
            >
              mdi-close
            </v-icon>
          </v-btn>
        </div>
        <div
          class="d-flex justify-center flex-column align-center"
          style="
          height: 85vh;
          "
        >
          <v-btn
            class="text-capitalize mb-6"
            color="orange"
            rounded
            dark
          >
            Download App
          </v-btn>
          <p
            class="my-6 text-body-2"
          >
            Blog
          </p>
          <p
            class="my-6 text-body-2"
          >
            About Us
          </p>
          <p
            class="my-6 text-body-2"
          >
            Our Products
          </p>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'headerCmp',
  data: () => ({
    dialog: false,
  }),
};
</script>
