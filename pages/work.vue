<template>
  <div class="work">
    <div class="work__container">
      <div class="work__content">
        <h3>共演アーティスト</h3>
        <p>{{ getWorkArtist }}</p>
      </div>
      <div class="work__content">
        <h3>Tour</h3>
        <p v-for="(value) in getWorkTour">{{ value }}</p>
      </div>
      <div class="work__content">
        <h3>Recording</h3>
        <p v-for="(value) in getWorkRecording">{{ value }}</p>
      </div>
      <div class="work__content">
        <h3>DVD</h3>
        <p v-for="(value) in getWorkDvd">{{ value }}</p>
      </div>
      <div class="work__content">
        <h3>Game</h3>
        <p v-for="(value) in getWorkGame">{{ value }}</p>
      </div>
      <div class="work__content">
        <h3>TV</h3>
        <p v-for="(value) in getWorkTv">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getWorkArtist: 'getWorkArtist',
      getWorkTour: 'getWorkTour',
      getWorkRecording: 'getWorkRecording',
      getWorkDvd: 'getWorkDvd',
      getWorkGame: 'getWorkGame',
      getWorkTv: 'getWorkTv'
    })
  }
}
</script>

<style lang="postcss">
  .work {
    min-height: 800px;
    color: white;
    background-color: black;

    &__container {
      padding: 70px 5%;
    }

    &__content {
      margin-top: 30px;
    }
  }
</style>