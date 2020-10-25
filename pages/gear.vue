<template>
  <div class="gear">
    <div class="gear__container">
      <h3>Supported by YAMAHA Drums</h3>
      <div class="gear__live">
        <div class="gear__live--cover">
          <h3>YAMAHA LIVE CUSTOM（Emerald Shadow Sunburst、Black Shadow Sunburst）</h3>
          <p>Kick 22×16、20×16、18×14、Tom 10×7、12×8、 Floor Tom 14×13、16×15</p>
        </div>
        <div class="gear__live--img1">
          <img  src="~/assets/gear__live1.jpg">
        </div>
        <div class="gear__live--img2">
          <img src="~/assets/gear__live2.jpg">
        </div>
      </div>
      <div class="gear__maple">
        <div class="gear__maple--cover">
          <h3>YAMAHA MAPLE CUSTOM（Solid Black）</h3>
          <p>Kick 20×16、Tom (Power Hoop) 10×8、12×8、14×12、16×14</p>
        </div>
        <div class="gear__maple--img1">
          <img  src="~/assets/gear__maple1.jpg">
        </div>
        <div class="gear__maple--img2">
          <img src="~/assets/gear__maple2.jpg">
        </div>
      </div>
      <div class="gear__others">
        <h3>HARDWARE</h3>
        <p>DFP9500C(Belt Drive)、HS1200、SS950、CS755、CH755、TH840、DS840、WS904A、CL945B、CL940B</p>
      </div>
      <div class="gear__others">
        <h3>SNARE DRUM</h3>
        <p>YAMAHA SD-955AE 14×5.5 (Aluminum)、SD855ME 14×5.5 (Steel)、BSD0105 14×5.5(Birch)、 WSD0535 13×5.5(Beech Absolute Nouveau)、etc</p>
      </div>
      <div class="gear__others">
        <h3>YAMAHA-REMO DRUM HEAD</h3>
        <p>VIC FIRTH DRUM STICK 5A & AH5、ROOT505、Heritage Brush、Medium Mallet LP MAMBO COWBELL</p>
      </div>
      <div class="gear__others">
        <h3>XL SPECIALTY PERCUSSION’S PROTECHTOR CASES</h3>
      </div>
      <div class="gear__others">
        <h3>SHURE MICROPHONE & EARPHONE</h3>
      </div>
      <div class="gear__others">
        <h3>OYAIDE’S AUDIO CABLES</h3>
      </div>
      <div class="gear__others">
        <h3>OTOMIX STINGRAY ESCAPE</h3>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  .gear {
    min-height: 100vh;
    background-color: black;
    color: white;
    &__container {
      padding: 50px 5%;
    }

    &__live {
      position: relative;
      margin-top: 30px;
      width: 100%;
      height: 35vw;
      &--cover {
        width: 100%;
        height: 35vw;
        background-color: rgba(0, 0, 0, 0.5);
        transition: background-color 0.3s;
        position: absolute;
        top: 0;
        z-index: 5;
        @media (min-width: 960px) {
          &:hover {
            background-color: rgba(0, 0, 0, 0);
          }
        }
      }
      &--img1 {
        width: 50%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          object-fit: cover;
          width: 100%;
          height: 35vw;
        }
      }

      &--img2 {
        width: 50%;
        position: absolute;
        top: 0;
        right: 0;
        img {
          object-fit: cover;
          width: 100%;
          height: 35vw;
        }
      }
    }

    &__maple {
      position: relative;
      margin-top: 30px;
      width: 100%;
      height: 35vw;
      &--cover {
        width: 100%;
        height: 35vw;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        transition: background-color 0.3s;
        top: 0;
        z-index: 5;
        @media (min-width: 960px) {
          &:hover {
            background-color: rgba(0, 0, 0, 0);
          }
        }
      }
      &--img1 {
        width: 50%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          object-fit: cover;
          width: 100%;
          height: 35vw;
        }
      }

      &--img2 {
        width: 50%;
        position: absolute;
        top: 0;
        right: 0;
        img {
          object-fit: cover;
          width: 100%;
          height: 35vw;
        }
      }
    }

    &__others {
      margin-top: 30px;
    }
  }
</style>