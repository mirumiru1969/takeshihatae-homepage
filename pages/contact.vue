<template>
  <div class="contact">
    <div class="contact__container">
      <h3>お問い合わせ</h3>
      <div class="contact__mail">
        <p><a class="contact__mail--address" href="mailto:contact@takeshihatae.com">contact@takeshihatae.com</a>にご連絡</p>
        <p class="contact__mail--or">または</p>
      </div>
      <div class="contact__form">
          <form  name="contact" method="post" action="" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <dl>
            <dt><label for="name">お名前</label></dt>
            <dd><input type="text" id="name" name="name" required /></dd>
            <dt><label for="email">メールアドレス</label></dt>
            <dd><input type="email" id="email" name="email" required /></dd>
            <dt><label>お問い合わせの種類</label></dt>
            <dd class="selectbox">
              <select name="item">
                <option value="">お問い合わせの種類をご選択ください</option>
                <option value="ご質問">ご質問</option>
                <option value="レッスン">レッスン</option>
                <option value="演奏依頼">演奏依頼</option>
                <option value="その他">その他</option>
              </select>
            </dd>
            <dt><label>メッセージ</label></dt>
            <dd><textarea name="message" cols="40" rows="10" required></textarea></dd>
          </dl>
          <div class="btn"><button type="submit" class="submit-btn">送信</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  .contact {
    min-height: 100vh;
    color: white;
    background-color: black;
    &__container {
      padding: 50px 5%;
    }

    &__mail {
      margin-top: 30px;
      &--address {
        font-size: 1.2rem;
      }
      &--or {
        margin-top: 30px;
      }
    }

    &__form {
      margin-top: 50px;
      form dd {
        margin: 0.25em 0 1.25em;
      }
      input,select,textarea {
        -webkit-appearance: none; 
        -moz-appearance: none; 
        appearance: none; 
        border: none; 
        outline: none; 
        margin: 0; 
        padding: 0; 
        background-color: white; 
        box-sizing: border-box;
        border-radius: 3px; 
        padding: 1em 0.5em;
      }

      input {
        width: 70%;
      }

      .selectbox {
        position: relative;
        width: 60%;
      }

      select {
        width: 100%;
      }

      .selectbox::after {
        position: absolute;
        top: 1em;
        right: 1em;
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #da3c41;
        pointer-events: none;
      }

      textarea {
        resize: none; 
        width: 80%;
      }

      .submit-btn {
        display: block; 
        width: 160px; 
        padding: 0.8em; 
        background: gray; 
        color: white; 
        font-size: 0.75em; 
        -webkit-appearance: none; 
        shadow: 2px 2px white; 
        border-radius: 5px; 
        text-align: center;
        transition: .3s;
        &:hover, &:active {
          background-color: white;
          color: black
        } 
      }
      
      @media screen and (max-width: 367px) {
        input,.selectbox,textarea{
          width: 100%;
        }
        .submit-btn {
          margin: 0 auto;
          }
        }
        
      @media screen and (min-width: 368px) and (max-width: 550px) {
        input,.selectbox,textarea {
          width: 100%;
        }
        .submit-btn {
          width: 100%;
          margin: 0 auto;
          }
        }
        
      @media screen and (min-width: 551px) and (max-width: 950px){

      }
      
      @media screen and (min-width: 951px) {
        form dl {
          max-width: 80%;
        } 
        input {
          max-width: 340px;
        }
      }
    }
  }
  
</style>
