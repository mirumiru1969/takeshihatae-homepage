<template>
  <div class="information">
    <div class="information__container">
      <div class="information__year">
        <button v-for="(value, year) in getAll" v-bind:class="{ active: year == $store.state.year }" @click="clickButton(year)">
          {{ year }}
        </button>
      </div>
      <div class="information__content">
        <div class="information__content--comp" v-for="data in getAll[$store.state.year]">
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
      getAll: 'getAll',
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
  min-height: 640px;
  background-color: white;
  &__container {
    padding: 20px 5%;
  }  

  &__year {
    float:right;
  }

  &__content {
    margin-top: 30px;
    &--comp {
      color: black
    }
  }
}
</style>
