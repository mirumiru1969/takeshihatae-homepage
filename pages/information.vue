<template>
  <div class="information">
    <div class="information__container">
      <div class="information__year">
        <button v-for="(value, year) in getInformationAll" v-bind:class="{ active: year == $store.state.year }" @click="clickButton(year)">
          {{ year }}
        </button>
      </div>
      <div class="information__content">
        <div class="information__content--comp" v-for="data in getInformationAll[$store.state.year]">
          <InformationContent :data="data"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: {
    isActive: false
  },
  computed: {
    ...mapGetters({
      getInformationAll: 'getInformationAll',
    })
  },
  methods: {
    clickButton(year) {
      this.$store.commit('changeYear', year)
    }
  }
}
</script>

<style lang="postcss">
.information {
  min-height: 100vh;
  background-color: black;
  &__container {
    padding: 20px 5%;
  }  

  &__year {
    float:right;
    background-color: black;
  }

  &__content {
    margin-top: 50px;
    &--comp {
      color: white;
      box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.4);
      border-radius: 5px;
      padding: 15px;
    }
  }
}
</style>
