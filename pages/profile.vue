<template>
  <div class="profile">
    <div class="profile__container">
      <img class="profile__img" src="~/assets/profile.jpg">
      <div class="profile__name">
        <h3>波多江 健 / Takeshi Hatae </h3>
        <p>Drummer</p>
      </div>
      <div class="profile__birth">
        <p>生年月日: 1969/04/09</p>
        <p>出身地: 佐賀県唐津市</p>
      </div>
      <div class="profile__detail">
        <p>
          17才でドラムをはじめる。 大学でジャズサークルに参加、 世界的ドラマーであるデイヴ・ウェックル （チック・コリア、 マイク・スターン・バンド） のレッスンを受けたことを機にドラマーを志し、 バークリー音楽大学に奨学生として移籍留学。 アレンジや理論、 スタジオワークを学びながら、 Jazz、Rock、 Funk、Latin、 Pop からHiphopに至るまで、 幅広いジャンルのバンドに参加する。 <br>
          1998年帰国。 CHEMISTRY、 RIP SLYME、 the brilliant green、 倖田來未、 Jazztronik、 エリック・マーティン(MR. BIG)、 デビー・ギブソン、 由紀さおり、 でんぱ組.inc、 ほか国内外 のアーティストのツアー、 レコーディングに参加。 2011年、 デイビッド・マシューズ率いるジャズビッグバンド、 Manhattan Jazz Orchestra（MJO）のBlue Note来日公演にメンバーとして出演している。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  .profile {
    background-color: black;
    &__container {
      color: white; 
      padding: 100px 5%;
    }

    &__img {
      width: 100%;
    }

    &__name {
      margin-top: 20px;
    }

    &__birth {
      margin-top: 20px;
    }

    &__detail {
      margin-top: 20px;
    }
  }
</style>