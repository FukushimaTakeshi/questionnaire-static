<template>
  <div id="app">
    <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">アンケートだよ</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="articles">
        <div class="column is-8 is-offset-2">
          <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">勉強会アンケートだよ</p>
                  <div class="tags has-addons level-item">
                    <span class="tag is-rounded is-info">@oreno enquete</span>
                    <span class="tag is-rounded">v 1.0.0</span>
                  </div>
                </div>
              </div>
              <div class="content article-body">
                <div class="field">
                  <label class="label">名前</label>
                  <div class="control">
                    <input class="input" type="text" name="name" v-model="answer.name">
                  </div>
                  <p class="help is-danger" v-show="!validation.name">書いてね</p>
                </div>
                <hr>

                <div class="field">
                  <label class="label">Q.1</label>
                  <p>扱った内容のレベルは?</p>
                  <p></p>
                  
                  <div class="control">
                    
                    <div class="field" v-for="(level, index) in levels" :key="index">
                      <label class="radio">
                        <input type="radio" name="level" :value="level" v-model="answer.level">
                        {{ level }}
                      </label>
                    </div>
                    <p class="help is-danger" v-show="!validation.level">選択してね</p>
                  </div>
                </div>
                <hr>

                <div class="field">
                  <label class="label">Q.2</label>
                  <p>全員参加型の輪読会でしたが、自ら積極的に発言できましたか?</p>
                  <p></p>
                  <div class="control">
                    <div class="field" v-for="(activeLevel, index) in activeLevels" :key="index">
                      <label class="radio">
                        <input type="radio" name="active" :value="activeLevel" v-model="answer.activeLevel">
                        {{ activeLevel }}
                      </label>
                    </div>
                    <p class="help is-danger" v-show="!validation.activeLevel">選択してね</p>
                  </div>
                </div>

                <div class="field" v-if="answer.activeLevel === activeLevels[2] || answer.activeLevel === activeLevels[3]">
                  <label class="label">Q.2-1</label>
                  <p>その理由は?</p>
                  <p></p>
                  <div class="control">
                    <div class="field" v-for="(reason, index) in reasons" :key="index">
                      <label class="radio">
                        <input type="radio" name="reason" :value="reason" v-model="answer.reason">
                        {{ reason }}
                      </label>
                    </div>
                    <p class="help is-danger" v-show="!validation.reason">選択してね</p>
                    <div class="field">
                      <input class="input" type="text" name="reasonComment" placeholder="それは、具体的にどんなこと？" 
                        v-model="answer.reasonComment"
                      >
                    </div>
                  </div>
                  <p class="help is-danger" v-show="!validation.reasonComment">書いてくだちい (´；ω；｀)</p>
                </div>
                <hr>

                <div class="field">
                  <label class="label">Q.3</label>
                  <p>次に輪読会や勉強会に参加するとしたら、どんなテーマがいい？ (複数選択可)</p>
                  <p class="help is-danger" v-show="!validation.nextTheme">選択してね</p>
                  <div class="control">
                    <div class="field" v-for="(nextTheme, index) in nextThemes" :key="index">
                      <b-tooltip :label="nextTheme.tooltip" position="is-right">
                        <label class="checkbox">
                          <input type="checkbox" :id="index" :value="nextTheme.comment" v-model="answer.nextThemes">
                          {{ nextTheme.comment }}
                        </label>
                        <div class="block" v-if="nextTheme.added">
                          <button class="delete is-medium" @click="removeTheme(nextTheme)" />
                        </div>
                      </b-tooltip>
                    </div>

                    <div class="field has-addons">
                      <p class="control is-expanded">
                        <input class="input" type="text" placeholder="他にやりたいテーマがあれば書いてね" v-model="themeText">
                      </p>
                      <p class="control">
                        <button class="button is-light" @click="addTheme()">追加するよお</button>
                      </p>
                    </div>
                    <span class="help is-danger" v-show="themeTextInValid">ちょっと長いかな (;´・ω・)</span>
                  </div>
                </div>
                <hr>

                <div class="field">
                  <label class="label">Q.4</label>
                  <p>その他、感想や要望など、言いたいことなんでも</p>
                  <div class="control">
                    <textarea class="textarea" placeholder="適当に書いてね^^" v-model="answer.freeComment"></textarea>
                  </div>
                  <p class="help is-danger" v-show="!validation.freeComment">(# ﾟДﾟ) 長すぎッ！</p>
                </div>
                <hr>

                <div class="field">
                  <div class="control">
                    <button @click="registerAnswer()" class="button is-block is-info is-fullwidth">送信するよ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'app',
  data() {
    return {
      levels: [
        '既に知っていることだった (簡単だった)',
        'ちょうどよかった',
        'ついていくのがやっと',
        '難しくて理解できなかった'
      ],
      activeLevels: [
        'できた！',
        'まぁまぁできたかな^^',
        'あまりできなかったよ',
        'ほとんどできなかったorz'
      ],
      reasons: [
        '技術的なこと',
        '技術以外なこと'
      ],
      nextThemes: [
        { comment: 'プログラミング言語の基本的なところ', tooltip: 'ex.基本文法やクラスとは? など入門書に書いてあるような基礎的な内容などです' },
        { comment: 'プログラミング言語を深く掘り下げ、イディオムや問題解決のための言語独特の手法', tooltip: 'ex.書籍でいう「Effective〜」に代表される言語学習の第2フェーズ的位置づけの内容' },
        { comment: '良いコードを書くための方法論', tooltip: 'リーダブルコードに近いものを別のテーマで' },
        { comment: '設計に関するテーマ1 (デザインパターン、オブジェクト指向のこころなど)', tooltip: '' },
        { comment: '設計に関するテーマ2 (DDD、Clean Architectureのようなもの)', tooltip: '' },
        { comment: '正直、何したらいいかわからない', tooltip: '(´；ω；｀)' }
      ],
      themeText: '',
      answer: {
        name: '',
        level: '',
        activeLevel: '',
        reason: '',
        reasonComment: '',
        nextThemes: [],
        freeComment: ''
      }
    }
  },
  computed: {
    validation() {
      const answer = this.answer
      const optional = (answer.activeLevel === this.activeLevels[2] || answer.activeLevel === this.activeLevels[3])

      return {
        name: !!answer.name.trim(),
        level: !!answer.level.trim(),
        activeLevel: !!answer.activeLevel.trim(),
        reason: (optional ? !!answer.reason.trim() : true),
        reasonComment: (optional ? !!answer.reasonComment.trim() : true),
        nextTheme: !(answer.nextThemes.length === 0),
        freeComment: (answer.freeComment.length < 1000)
      }
    },
    themeTextInValid() {
      return (this.themeText.length > 100)
    },
    isValid() {
      const validation = this.validation
      return Object.keys(validation).every((key) => {
        return validation[key]
      })
    }
  },
  methods: {
    async registerAnswer() {
      if (!this.isValid) { 
        this.danger()
        return
      }
      await axios.post(`${process.env.VUE_APP_API_BASE_PATH}/questionnaire`, qs.stringify({ answer: this.answer }))
        .then((res) => {
          if (res.status === 200) { return }
        })
        .catch((res) => {
          // FIXME: CROS未設定のため、あとで直す
          this.$toast.open({
            message: '登録しました',
            type: 'is-warning'
          })
          throw res
        })
    },
    addTheme() {
      const theme = this.themeText.trim()
      if (!theme) { return }
      this.nextThemes.push({
        comment: theme,
        tooltip: '',
        added: true
      })
			this.themeText = ''
    },
    removeTheme(item) {
      const index = this.nextThemes.indexOf(item)
      this.nextThemes.splice(index, 1)
    },
    danger() {
      this.$toast.open({
        duration: 3000,
        message: `ちゃんと入力できてないよ！`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  }
}
</script>
<style lang="scss">
.articles {
  margin: 5rem 0;
  margin-top: -100px;
}
</style>
