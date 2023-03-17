<template>
  <section class="container" :data-sb-object-id="post.sys.id">
    <p class="back">
      <nuxt-link exact to="/">Back to Home</nuxt-link>
    </p>
    <h1 data-sb-field-path=".title">{{ post.fields.title }}</h1>
    <div
      class="image"
      data-sb-field-path=".coverArt"
      :style="
        `background: url(https:${post.fields.coverArt.fields.file.url}) center center no-repeat`
      "
    ></div>
    <article data-sb-field-path=".articleBody" v-html="$md.render(post.fields.articleBody)"></article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      );
      return post[0];
    }
  },
  head() {
    return {
      title: this.post.fields.title
    };
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 20px;
}

.image {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  background-size: 100% auto !important;
}
</style>
