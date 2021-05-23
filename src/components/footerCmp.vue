<template>
  <div>
    <div
      class="hidden-sm-and-down"
      style="
      height: 500px;
      background-color: #EEEEEE;
      "
    >
      <div
        class="mx-auto"
        style="
        max-width: 800px;
        "
      >
        <p
          class="montserratBold text-center pt-10 mb-6 text-h4"
        >
          Subscribe to Our Newsletter
        </p>
        <p
          class="montserratMedium text-center captionText2"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque tempora
          consectetur dolores itaque id, cumque cupiditate ipsum aspernatur ipsa
          eveniet. Voluptas repudiandae
        </p>
        <div
          class="d-flex py-3"
        >
          <v-text-field
            label="Enter your Email Address"
            class="rounded-l-xl"
            solo
          ></v-text-field>
          <v-btn
            class="text-capitalize rounded-r-xl rounded-l-0 ml-n1 py-6"
            color="primary"
            dark
          >
            Subscribe
          </v-btn>
        </div>
        <v-row
          class="mx-10"
        >
          <v-col
            cols="2"
          >
            <router-link
              to="/"
            >
              <v-img
                src="/img/logo.png"
                height="16"
                width="80"
              ></v-img>
            </router-link>
          </v-col>
          <v-col
            cols="2"
          >
            <p>
              Our Products
            </p>
          </v-col>
          <v-col
            cols="4"
          >
            <p
              class="ml-14"
            >
              Connect With Us
            </p>
            <div
              class="d-flex ml-14"
            >
              <v-btn
                icon
                small
              >
                <v-icon>
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn
                icon
                small
              >
                <v-icon>
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn
                icon
                small
              >
                <v-icon>
                  mdi-instagram
                </v-icon>
              </v-btn>
              <v-btn
                icon
                small
              >
                <v-icon>
                  mdi-linkedin
                </v-icon>
              </v-btn>
              <v-btn
                icon
                small
              >
                <v-icon>
                  mdi-whatsapp
                </v-icon>
              </v-btn>
            </div>
            <v-btn
              class="text-capitalize mt-3 ml-10 text-body"
              rounded
              text
              to="/contact-us"
            >
              Contact Us
            </v-btn>
          </v-col>
          <v-col
            cols="4"
          >
            <p>
              Get Our App
            </p>
            <div
              class="d-flex mt-n2"
            >
              <v-icon
                class="mt-n3 mr-2"
                size="40px"
              >
                mdi-apple
              </v-icon>
              <div>
                <p
                  class="text-caption mb-n3"
                >
                  Download on the
                </p>
                <p
                  class="font-weight-bold mt-3"
                >
                  App Store
                </p>
              </div>
            </div>
            <div
              class="d-flex mt-n2"
            >
              <v-icon
                class="mt-n3 mr-2"
                size="40px"
              >
                mdi-google-play
              </v-icon>
              <div>
                <p
                  class="text-caption mb-n3"
                >
                  Get it on
                </p>
                <p
                  class="font-weight-bold mt-3"
                >
                  Play Store
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-container
      class="hidden-md-and-up"
      style="
      background-color: #EEEEEE;
      "
    >
      <div
        class="mx-auto"
        style="
        max-width: 800px;
        "
      >
        <p
          class="montserratBold text-center pt-10 mb-6 text-h4"
        >
          Subscribe to Our Newsletter
        </p>
        <p
          class="montserratMedium text-center captionText2"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque tempora
          consectetur dolores itaque id, cumque cupiditate ipsum aspernatur ipsa
          eveniet. Voluptas repudiandae
        </p>
        <div
          class="d-flex py-3"
        >
          <v-text-field
            label="Enter your Email Address"
            class="rounded-l-xl"
            solo
          ></v-text-field>
          <v-btn
            class="text-capitalize rounded-r-xl rounded-l-0 ml-n1 py-6"
            color="primary"
            dark
          >
            Subscribe
          </v-btn>
        </div>
      </div>
      <v-row>
        <v-col
          class="text-center"
        >
          <p
            class="ml-3"
          >
            Connect with Us
          </p>
          <div
            class="d-flex justify-center ml-2 mt-n2"
          >
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-instagram
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-linkedin
              </v-icon>
            </v-btn>
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-whatsapp
              </v-icon>
            </v-btn>
          </div>
          <v-btn
            class="text-capitalize ml-n2 text-body"
            rounded
            text
            to="/contact-us"
          >
            Contact Us
          </v-btn>
          <router-link
            to="/"
          >
            <v-img
              class="mt-8"
              src="/img/logo.png"
              height="16"
              width="80"
            ></v-img>
          </router-link>
        </v-col>
        <v-col
          class="text-center"
        >
          <p>
            Get Our App
          </p>
          <div
            class="d-flex justify-center mt-n2"
          >
            <v-icon
              class="mt-n3 mr-2"
              size="40px"
            >
              mdi-apple
            </v-icon>
            <div>
              <p
                class="text-caption mb-n3"
              >
                Download on the
              </p>
              <p
                class="font-weight-bold mt-3"
              >
                App Store
              </p>
            </div>
          </div>
          <div
            class="d-flex justify-center ml-n3 mt-n2"
          >
            <v-icon
              class="mt-n3 mr-2"
              size="40px"
            >
              mdi-google-play
            </v-icon>
            <div>
              <p
                class="text-caption mb-n3"
              >
                Get it on
              </p>
              <p
                class="font-weight-bold mt-3"
              >
                Play Store
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
      style="
      height: 56px;
      background-color: #515352;
      "
    >
      <p
        class="text-center montserratBold white--text py-4"
      >
        Gas360
      </p>
    </div>
  </div>
</template>
