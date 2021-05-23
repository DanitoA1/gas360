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
              Gaspreneur Smart Distribution
            </p>
            <p
              class="montserratMedium white--text text-center mt-6"
            >
              Monitor your distribution, sales and customer data remotely, in real-time.
            </p>
            <v-img
              class="mx-auto mt-16"
              src="/img/svg/computers.svg"
              contain
              width="300px"
            ></v-img>
          </div>
        </v-col>
        <v-col>
          <div
            class="mx-auto"
            style="
            max-width: 400px;
            "
          >
            <p
              class="montserratBold captionText3 mt-5"
            >
              Join the Network
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
              label="Enter your Business Name"
            ></v-text-field>
            <v-text-field
              solo
              rounded="xl"
              dense
              label="Enter your Business Location"
            ></v-text-field>
            <v-select
              :items="size"
              solo
              rounded="xl"
              dense
              label="Enter your Business Size"
            ></v-select>
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
              label="Enter your Work e-mail"
            ></v-text-field>
            <v-btn
              class="text-capitalize mt-8"
              color="primary"
              block
              dark
              rounded
            >
              Join the Network
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
  name: 'JoinNetwork',
  data: () => ({
    size: ['Small', 'Medium', 'Large'],
  }),
  components: {
    footerCmp,
    headerCmp,
  },
};
</script>
