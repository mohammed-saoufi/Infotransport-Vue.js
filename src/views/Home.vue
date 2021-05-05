<template>
  <div className="home">
    <my-section background-image="/images/transport.PNG">
      <v-img src="/images/Logo.png" contain class="ma-auto mb-1" height="130px" width="250px"></v-img>
      <v-card width="40%" class="ma-auto mb-16" height="50px">
        <v-text-field placeholder="search..." color="white" class="input d-flex ma-auto "></v-text-field>
      </v-card>
    </my-section>
    <my-section  background-color="#003b6d">
      <div class="home-img-container">
        <div class="home-howItWorks ma-auto"><h2>How it works?</h2></div>
        <img src="/images/element.PNG" width="150px" height="150px"/>
      </div>
      <div class="home-simple"><h1>very simple!</h1></div>
    </my-section>

    <my-section background-color="#003B6D">
      <div class=" home-options d-flex mt-2 ">
        <div class="home-option123 d-flex"><img src="/images/adress.PNG"/></div>
        <div class="home-option123 d-flex"><img src="/images/information.PNG"/></div>
        <div class="home-option123 d-flex"><img src="/images/selection.PNG"/></div>
      </div>
      <div class="home-optionsNames d-flex">
        <v-layout row justify-space-around>
          <div>
            <div class="home-divABC d-block">Adress</div>
            <div class="home-div123" >- entre the address that you want to go to.</div>
          </div>
          <div>
            <div class="home-divABC d-block">information</div>
            <div class="home-div123">- find the information about where do you want to go.</div>
          </div>
          <div>
            <div class="home-divABC d-block">selection</div>
            <div class="home-div123">- decide which transport is the faster.</div>
          </div>
        </v-layout>
      </div>
    </my-section>

    <my-section background-color="#003B6D">
      <div class="home-goal">
        <img src="/images/brief.PNG" class="home-brief">
        <spam class="home-text">The goal of using InfoTransport is to find quickly the informations about which transport is the faster...</spam>
        <img src="/images/time.PNG" class="home-time ">
      </div>
    </my-section>

    <my-section background-color="#003B6D">
      <div class="home-application-all d-flex">
        <div content-class="home-paragraph">
          <div>Application of InfoTransport.ma</div>
        </div>
        <div content-class="home-phoneApp">
          <v-img src="/images/application.png" ccontent-class="application-app"></v-img>
        </div>
      </div>
    </my-section>
  </div>
</template>

<script>
import MySection from "../components/MySection";

export default {
  name: "Home",
  components: {MySection}
};
</script>

<style lang="stylus" scoped>
.home
  &-img-container
    position relative
    margin-top 80px
    margin-left 550px
    height 150px
  &-howItWorks
    color aliceblue
    position absolute
    top calc(50% - 14px)
    width 100%
    text-shadow 1px 2px 2px #44D9E6
  &-img
    position relative
  &-simple
    font-family Georgia, serif
    font-size 50px
    letter-spacing 6px
    word-spacing 2px
    color #44D9E6
    font-weight 400
    font-style italic
    font-variant small-caps
    text-transform none
    text-shadow 1px 2px 2px #ffff
    margin-left 300px

  &-options
    justify-content space-around
  &-option123
    width 300px
  &-divABC
    margin-left 70px
    color #003b6d
    font-size x-large
    text-shadow 1px 2px 2px #44D9E6
  &-div123
    width 300px

  &-optionsNames
    color white
    font-size x-large
    text-shadow 1px 2px 2px #44D9E6

    link
      justify-content space-around
      align-items baseline

  &-paragraph
    color #44D9E6
    width 300px
    justify-content space-around
    align-items baseline
    font-family "Brush Script m7", Brush, cursive

  &-goal
    position relative
    margin-bottom 120px
  &-brief
    background-color #003b6d
    justify-content space-around
    position relative
    height 98%
    width 40%
  &-text
    position absolute
    width 17%
    color #0065A3
    font-size 18px
    top 90px
    left 130px
    font-family "Brush Script m7", Brush, cursive
  &-time
    width 35%
    margin-left 250px

  &-application-all
    background-color: #003b6d
    font-family "Brush Script m7", Brush, cursive
    justify-content space-around
    font-size 50px
    color #44D9E6
    margin-bottom 120px
    -webkit-box-shadow 5px 5px 5px 0 #1C6EA4, inset 4px 4px 15px 0 #1C6EA4, 5px 5px 5px 5px rgba(68, 217, 230, 0)
    box-shadow 5px 5px 5px 0 #1C6EA4, inset 4px 4px 15px 0 #1C6EA4, 5px 5px 5px 5px rgba(68, 217, 230, 0)
    padding-top 20px
    padding-bottom 20px
  &-paragraph
    color #44D9E6
    text-shadow 0 1px #808d93, -1px 0 #003b6d, -1px 2px #003b6d, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5
  &-phoneApp
    margin-top 30px

</style>