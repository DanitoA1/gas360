<template>
  <v-container
    class="fill"
    fluid
  >
    <div
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-container
        class="fill topBckgrd"
        fluid
      >
        <div
          class="spiral"
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <headerCmp />
        <div
          class="spiral1"
        ></div>
        <v-container
          class="fill"
          fluid
          style="
          margin-top: -500px;
          "
        >
          <v-row
            no-gutters
          >
            <v-col
              cols="6"
              class="ontop"
            >
              <div
                style="
                margin: 200px 0 0 120px;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 40px;
                  color: #001937;
                  "
                >
                  Never run out of cooking gas again
                </p>
                <p
                  class="montserratMedium mt-10"
                >
                  Using IOT and Big Data to monitor cooking gas in real-time
                </p>
                <v-btn
                  class="text-capitalize mt-4"
                  color="primary"
                  rounded
                  dark
                  large
                  to="/refill"
                >
                  Refill Your Cyclinder
                </v-btn>
              </div>
            </v-col>
            <v-col
              style="
              background-image: url('/img/svg/phoneTop.svg');
              background-size: cover;
              height: 600px;
              z-index: 1;
              "
            >
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-container
        class="fill level2Bckgrd"
        fluid
      >
        <v-container
          class="fill"
          fluid
        >
          <v-row
            no-gutters
          >
            <v-col
              cols="5"
            >
              <div
                style="
                margin: 160px -80px 0 110px;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  The smart alternative is here!
                </p>
              </div>
              <div
                style="
                margin: 20px -150px 0 110px;
                "
              >
                <v-list
                  flat
                  color="#F9FCFF"
                  expand
                  class="ml-n6"
                  disabled
                >
                  <v-list-item-group>
                    <v-list-item
                      dense
                    >
                      <v-list-item-icon>
                        <v-icon
                          color="#398AEF"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          You shouldn’t run out of cooking gas while cooking.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="#F8A008"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          You shouldn’t have to go all the way to buy cooking gas.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="#398AEF"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          You should be able to buy cooking gas while broke.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-col>
            <v-col
              cols="7"
            >
              <div
                style="
                margin-top: -80px;
                "
              >
                <v-img
                  src="/img/svg/level2img.svg"
                  contain
                  height="700px"
                ></v-img>
              </div>
            </v-col>
          </v-row>
          <div>
            <img
              src="/img/svg/stripeOpp.svg"
              width="100%"
              contain
              style="
              margin-top: -180px;
              z-index: 0;
              "
            >
          </div>
        </v-container>
      </v-container>
      <v-container
        class="fill level3Bckgrd"
        fluid
      >
        <v-row>
          <v-col
            cols="6"
          >
            <div
              style="
              margin-left: 10px;
              margin-top: -140px;
              "
            >
              <v-img
                src="/img/svg/level3img.svg"
                contain
                height="800px"
              ></v-img>
            </div>
          </v-col>
          <v-col
              cols="6"
            >
              <div
                style="
                margin: 50px 240px 0 -150px;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  You now have one less thing to worry about
                </p>
              </div>
              <div
                style="
                margin: 20px 0px 0 -150px;
                "
              >
                <v-list
                  flat
                  color="#F9FCFF"
                  expand
                  class="ml-n6"
                  disabled
                >
                  <v-list-item-group>
                    <v-list-item
                      dense
                    >
                      <v-list-item-icon>
                        <v-icon
                          color="#398AEF"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          Monitor your cooking gas consumption in real time.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="#F8A008"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          Buy cooking gas and gas cylinders on credit and pay instalmentally.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="#398AEF"
                          size="40px"
                        >
                          mdi-circle-double
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-action-text
                          class="text-subtitle-2"
                          style="
                          white-space: normal;
                          "
                        >
                          Smartly plan and track your household expenditure.
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-col>
        </v-row>
      </v-container>
      <v-container
        class="fill level3Bckgrd"
        fluid
      >
        <v-row
          no-gutters
        >
          <v-col
            cols="6"
          >
            <div
              style="
              margin: 0px 0 0 90px;
              "
            >
              <v-img
                style="
                z-index: 1;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  Upgrade your cooking gas experience!
                </p>
                <p
                  class="montserratMedium mt-8"
                >
                  Gas360 ensures LPG is easily accessible
                  to all households via our digital platforms. Your gas doesn’t have to run out!
                </p>
                <v-row>
                  <v-col>
                    <v-btn
                      class="text-capitalize mt-4"
                      color="primary"
                      rounded
                      dark
                      large
                      to="#"
                    >
                      <div
                        class="d-flex mb-n2"
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
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      class="text-capitalize mt-4"
                      color="primary"
                      rounded
                      dark
                      large
                      to="#"
                    >
                      <div
                        class="d-flex mb-n2"
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
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </div>
          </v-col>
          <v-col>
            <div
              style="
              margin-left: 0px;
              margin-top: -250px;
              "
            >
              <v-img
                src="/img/svg/level4img.svg"
                contain
                height="700px"
                style="
                z-index: 1;
                "
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container
        class="fill level5Bckgrd"
        fluid
      >
        <v-img
          src="/img/svg/shape2.svg"
          contain
          width="100vw"
          alt="shape"
          style="
          z-index: 0;
          "
        ></v-img>
      </v-container>
      <v-container
        class="fill level6Bckgrd"
        fluid
      >
        <div
          class="text-center"
        >
          <img
            class="mx-atuo"
            src="/img/svg/ourvalues.svg"
            alt="img"
          >
        </div>
        <v-row
          no-gutters
        >
          <v-col
            cols="6"
          >
            <div
                style="
                margin: 300px 0 0 120px;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  Sustainability is our lifestyle
                </p>
                <p
                  class="montserratMedium mt-6"
                >
                  Making social impact with energy.
                </p>
                <v-btn
                  class="text-capitalize mt-2"
                  color="primary"
                  rounded
                  dark
                  to="/join"
                >
                  Join the Network
                </v-btn>
              </div>
          </v-col>
          <v-col>
            <div
              style="
              margin-left: 0px;
              margin-top: 0px;
              "
            >
              <v-img
                src="/img/svg/level5img.svg"
                contain
                height="700px"
                style="
                z-index: 1;
                "
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-img
        src="/img/svg/level7img.svg"
        contain
        width="100%"
        style="
        margin-top: -110px;
        "
      ></v-img>
      <v-container
        class="fill level3Bckgrd"
        fluid
        style="
        height: 600px;
        margin-top: -540px;
        "
      >
        <v-row>
          <v-col></v-col>
          <v-col>
            <div
                style="
                margin: 230px 0 0 120px;
                "
              >
                <p
                  class="montserratBold"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  Need Help?
                </p>
                <p
                  class="montserratBold mt-n6"
                  style="
                  font-size: 30px;
                  color: #001937;
                  "
                >
                  Reach out to Us
                </p>
                <p
                  class="montserratMedium mt-6"
                >
                  You can contact us at: 08140005500 and Support@gas360.io
                </p>
                <v-btn
                  class="text-capitalize mt-2"
                  color="primary"
                  rounded
                  dark
                  to="/contact-us"
                >
                  Contact Us
                </v-btn>
              </div>
          </v-col>
        </v-row>
      </v-container>
      <v-img
        src="/img/SDG2.png"
        contain
        width="100%"
      ></v-img>
      <v-container
        class="fill py-10"
        fluid
        style="
        background-color: #F2F8FF;
        "
      >
        <div
          class="mx-auto"
          style="
          max-width: 500px;
          "
        >
          <p
            class="montserratBold text-center captionText3 mb-6"
          >
            Our Partners
          </p>
          <p
            class="montserratMedium text-center captionText2"
          >
            Gas360 is a technology company that bridges the distribution gap
            in providing clean energy to the last mile
          </p>
        </div>
        <v-row
          style="margin: 0px 100px 0px 100px;"
          no-gutters
        >
          <v-col>
            <v-img
              src="/img/sponsor1.png"
              height="200px"
              width="190px"
              contain
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="/img/sponsor2.png"
              height="200px"
              width="190px"
              contain
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="/img/sponsor1.png"
              height="200px"
              width="190px"
              contain
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="/img/sponsor2.png"
              height="200px"
              width="190px"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      v-else
    >
      <headerCmp />
      <v-container>
        <p
          class="montserratBold"
          style="
          font-size: 25px;
          color: #001937;
          "
        >
          Never run out of cooking gas again
        </p>
        <v-img
          src="/img/svg/phoneTop.svg"
          contain
          width="100%"
        ></v-img>
        <p
          class="montserratMedium mt-10"
        >
          Using IOT and Big Data to monitor cooking gas in real-time
        </p>
        <v-btn
          class="text-capitalize mt-4"
          color="primary"
          rounded
          dark
          large
          to="/refill"
        >
          Refill Your Cyclinder
        </v-btn>
        <p
          class="montserratBold mt-10"
          style="
          font-size: 25px;
          color: #001937;
          "
        >
          The smart alternative is here!
        </p>
        <v-img
          src="/img/svg/level2img.svg"
          contain
          width="100%"
        ></v-img>
        <v-list
          flat
          color="white"
          expand
          class="mt-8"
          disabled
        >
          <v-list-item-group>
            <v-list-item
              dense
            >
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#398AEF"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  You shouldn’t run out of cooking gas while cooking.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#F8A008"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  You shouldn’t have to go all the way to buy cooking gas.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#398AEF"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  You should be able to buy cooking gas while broke.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <p
          class="montserratBold mt-10"
          style="
          font-size: 25px;
          color: #001937;
          "
        >
          You now have one less thing to worry about
        </p>
        <v-img
          src="/img/svg/level3img.svg"
          contain
          width="100%"
          style="
          margin-bottom: -200px;
          "
        ></v-img>
        <v-list
          flat
          expand
          class="mt-8"
          disabled
          style="
          background: transparent;
          padding-top: -200px;
          "
        >
          <v-list-item-group>
            <v-list-item
              dense
            >
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#398AEF"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  Monitor your cooking gas consumption in real time.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#F8A008"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  Buy cooking gas and gas cylinders on credit and pay instalmentally.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon
                  class="mr-n4"
                  color="#398AEF"
                  size="40px"
                >
                  mdi-circle-double
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-action-text
                  class="text-subtitle-2"
                  style="
                  white-space: normal;
                  "
                >
                  Smartly plan and track your household expenditure.
                </v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <p
          class="montserratBold"
          style="
          font-size: 25px;
          color: #001937;
          "
        >
          Upgrade your cooking gas experience!
        </p>
        <v-img
          src="/img/svg/level4img.svg"
          contain
          width="100%"
        ></v-img>
        <p
          class="montserratMedium mt-10"
        >
          Gas360 ensures LPG is easily accessible to
           all households via our digital platforms. Your gas doesn’t have to run out!
        </p>
        <v-row>
          <v-col
            class="text-center"
          >
            <v-btn
              class="text-capitalize mt-4"
              color="primary"
              rounded
              min-width="190px"
              dark
              large
              to="#"
            >
              <div
                class="d-flex mb-n2"
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
            </v-btn>
          </v-col>
          <v-col
            class="text-center"
          >
            <v-btn
              class="text-capitalize mt-4"
              color="primary"
              rounded
              dark
              large
              min-width="190px"
              to="#"
            >
              <div
                class="d-flex mb-n2"
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
            </v-btn>
          </v-col>
        </v-row>
        <p
          class="montserratBold mt-10"
          style="
          font-size: 25px;
          color: #001937;
          "
        >
          Sustainability is our lifestyle
        </p>
        <v-img
          src="/img/svg/level5img.svg"
          contain
          width="100%"
        ></v-img>
        <p
          class="montserratMedium mt-10"
        >
          Making social impact with energy.
        </p>
        <v-btn
          class="text-capitalize mt-4"
          color="primary"
          rounded
          dark
          large
          to="/join"
        >
          Join the Network
        </v-btn>
        <div
          style="
          margin-bottom: -100px;
          "
        >
          <p
            class="montserratBold mt-10"
            style="
            font-size: 25px;
            color: #001937;
            "
          >
            Need Help?
          </p>
          <p
            class="montserratBold mt-n4"
            style="
            font-size: 25px;
            color: #001937;
            "
          >
            Reach out to Us
          </p>
        </div>
        <v-img
          src="/img/svg/level7img.svg"
          contain
          width="100%"
        ></v-img>
        <p
          class="montserratMedium mt-10"
        >
          You can contact us at: 08140005500 and Support@gas360.io
        </p>
        <v-btn
          class="text-capitalize my-4"
          color="primary"
          rounded
          dark
          large
          to="/contact-us"
        >
          Contact Us
        </v-btn>
      </v-container>
      <v-img
        src="/img/SDG2.png"
        contain
        width="100%"
      ></v-img>
      <v-container
        class="py-10"
      >
        <div
          class="mx-auto"
          style="
          max-width: 500px;
          "
        >
          <p
            class="montserratBold text-center captionText3 mb-6"
          >
            Our Partners
          </p>
          <p
            class="montserratMedium text-center captionText2"
          >
            Gas360 is a technology company that bridges the distribution gap
            in providing clean energy to the last mile
          </p>
        </div>
        <v-row
          no-gutters
        >
          <v-col
            cols="6"
          >
            <v-img
              src="/img/sponsor1.png"
              width="200px"
              height="200px"
              contain
              style="
              margin: 0 auto;
              "
            ></v-img>
          </v-col>
          <v-col
            cols="6"
          >
            <v-img
              src="/img/sponsor2.png"
              height="200px"
              width="190px"
              contain
              style="
              margin: 0 auto;
              "
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <footerCmp />
  </v-container>
</template>

<script>
import footerCmp from '@/components/footerCmp.vue';
import headerCmp from '@/components/headerCmp.vue';

export default {
  name: 'Home',
  components: {
    footerCmp,
    headerCmp,
  },
};
</script>

<style scoped>
  .fill {
    margin: 0;
    padding: 0;
  }
  .topBckgrd {
    height: 700px;
    background: transparent linear-gradient(150deg,
     #F2F8FF 0%, #F2F8FF 16%, #9FC7F88C 46%, #DDEAFA 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .level2Bckgrd {
    background: #F9FCFF 0% 0% no-repeat;
    height: 700px;
  }
  .level3Bckgrd {
    background: #F9FCFF 0% 0% no-repeat;
  }
  .level5Bckgrd {
    background: #D0E1F7 0% 0% no-repeat;
    margin-top: -300px;
  }
  .level6Bckgrd {
    background: linear-gradient(173deg, #D0E1F7 0%,
     #9FC7F88C 44%, #F2F8FF 100%) 0% 0% no-repeat padding-box;
  }
  .spiral1 {
    background-image: url('/img/svg/spiral.svg');
    height: 500px;
    background-position-y: -150px;
    background-position-x: -300px;
  }
  .spiral div {
    position: fixed;
    opacity: 0.3;
    border: 0.1px solid rgb(211, 181, 107);
    border-radius: 50%;
    z-index: -1;
  }
  .spiral div:nth-child(1) {
    height: 100px;
    width: 100px;
    top: 160px;
    left: 66%;
  }
  .spiral div:nth-child(2) {
    height: 175px;
    width: 175px;
    top: 122.5px;
    left: 62.25%;
  }
  .spiral div:nth-child(3) {
    height: 250px;
    width: 250px;
    top: 85px;
    left: 58.5%;
  }
  .spiral div:nth-child(4) {
    height: 340px;
    width: 340px;
    top: 40px;
    left: 54%;
  }
  .spiral div:nth-child(5) {
    height: 460px;
    width: 460px;
    top: -20px;
    left: 48%;
  }
  .spiral div:nth-child(6) {
    height: 580px;
    width: 580px;
    top: -80px;
    left: 42%;
  }
  .spiral div:nth-child(7) {
    height: 700px;
    width: 700px;
    top: -140px;
    left: 36%;
  }
  .spiral div:nth-child(8) {
    height: 820px;
    width: 820px;
    top: -200px;
    left: 30%;
  }
  .ontop {
    z-index: 1;
  }
</style>
