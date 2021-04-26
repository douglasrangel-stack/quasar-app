<template>
  <q-page class="main-container">
    <h3 class="center">Filmes</h3>
    <div class="row">
      <div class="col-md-4" v-for="film in films" :key="film.episode_id">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">{{ film.title }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ film.opening_crawl }}
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <strong>Produtora:</strong>
            {{ film.producer }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      films: []
    };
  },
  mounted() {
    this.getFilms();
  },
  methods: {
    getFilms() {
      this.$axios
        .get("https://swapi.dev/api/films/")
        .then(res => {
          this.films = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.main-container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 60px 15px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-4 {
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 30px;
}
.center {
  text-align: center;
}
</style>
