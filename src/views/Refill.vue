<template>
  <div>
    <headerCmp />
    <div
      style="
      background-image: url('/img/svg/joinbckgrd.svg');
      height: 600px;
      width: 100vw;
      "
    >
      <v-row>
        <v-col
          cols="6"
          style="
          background-image: url('/img/svg/joinbckgrd2.svg');
          height: 600px;
          width: 100vw;
          "
        >
          <div
            class="mx-auto"
            style="
            max-width: 400px;
            "
          >
            <p
              class="montserratBold text-h4 white--text text-center mt-5"
            >
              Refill Your Cylinder
            </p>
            <p
              class="montserratMedium white--text text-center mt-6"
            >
              Gas360 ensures LPG is easily accessible to all household via digital platforms.
            </p>
            <v-btn
              class="text-capitalize blue--text mr-10 mt-12"
              color="white"
              rounded
              width="180"
              @click="Refill()"
            >
              Quick Buy
            </v-btn>
            <v-btn
              class="text-capitalize mt-12"
              outlined
              color="white"
              rounded
              width="180"
              left
              @click="login()"
            >
              Login
            </v-btn>
            <v-img
              class="mx-auto mt-4"
              src="/img/gasimg.png"
              contain
              width="350px"
            ></v-img>
          </div>
        </v-col>
        <v-col>
          <div
            v-if="refill"
            class="mx-auto"
            style="
            max-width: 400px;
            "
          >
            <p
              class="montserratBold captionText3 mt-5"
            >
              Quick Purchase
            </p>
            <p
              class="montserratMedium captionText2 text-caption mt-n3 mb-10"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nemo.
            </p>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Name"
            ></v-text-field>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Phone Number"
            ></v-text-field>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your e-mail Address"
            ></v-text-field>
            <v-select
              :items="size"
              solo
              rounded="xl"
              dense
              label="Enter your Cylinder Size"
            ></v-select>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Location"
            ></v-text-field>
            <v-btn
              class="text-capitalize mt-8"
              color="primary"
              block
              dark
              rounded
            >
              Buy Now
            </v-btn>
          </div>
          <div
            v-else
            class="mx-auto"
            style="
            max-width: 350px;
            "
          >
            <p
              class="montserratBold captionText3 mt-16"
            >
              Sign In
            </p>
            <p
              class="montserratMedium captionText2 text-caption mt-n3 mb-10"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nemo.
            </p>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Phone Number"
            ></v-text-field>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Password"
            ></v-text-field>
            <v-btn
              class="text-capitalize mt-8"
              color="primary"
              block
              dark
              rounded
            >
              Log In
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <footerCmp />
  </div>
</template>

<script>
// @ is an alias to /src
import footerCmp from '@/components/footerCmp.vue';
import headerCmp from '@/components/headerCmp.vue';

export default {
  name: 'Refill',
  data: () => ({
    size: ['Small', 'Medium', 'Large'],
    refill: true,
  }),
  components: {
    footerCmp,
    headerCmp,
  },
  methods: {
    login() {
      this.refill = false;
    },
    Refill() {
      this.refill = true;
    },
  },
};
</script>
