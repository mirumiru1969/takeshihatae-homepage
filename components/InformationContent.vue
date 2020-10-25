<template>
  <div class="information__data">
    <a v-bind:href="`${data.link}`">
      <p class="information__data--date">{{ data.date }}</p>
      <p class="information__data--place">{{ data.place}}</p>
      <p class="information__data--title">{{ data.title }}</p>
      <p class="information__data--detail">{{ data.detail }}</p>
      <p class="information__data--member">{{ data.member }}</p>
      <p class="information__data--charge">{{ data.charge }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="postcss">
.information__data {
  background-color: rgba(20, 20, 20);
  border-radius: 5px;
  padding: 15px;
  transition: .3s;
  box-shadow: 1px 1px 2px 2px gray;
  @media (min-width: 960px) {
    &:hover {
      background-color: gray;
      color: black;
    }
  }

  &--date, &--place {
    font-size: 0.7rem;
    font-weight: bold;
  }
  &--title {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }
  &--detail, &--member, &--charge {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
}

</style>