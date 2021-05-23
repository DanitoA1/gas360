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
      <div
        class="mx-auto"
        style="
        max-width: 350px;
        "
      >
        <p
          class="montserratBold captionText3 pt-16"
        >
          Send Us a Message
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
          label="Enter your e-mail"
        ></v-text-field>
        <v-textarea
          solo
          rounded="xl"
          label="Type your message here..."
        ></v-textarea>
        <v-btn
          class="text-capitalize mt-4"
          color="primary"
          block
          dark
          rounded
        >
          Send Message
        </v-btn>
      </div>
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
