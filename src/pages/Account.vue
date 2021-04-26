<template>
  <q-page class="main-container">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h6">{{ user }}</div>
        </q-card-section>
      </q-card>
    </div>
    <h3 class="center">Filmes na minha conta</h3>
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
  name: "PageAccount",
  data() {
    return {
      user: "",

      films: []
    };
  },
  mounted() {
    this.getUser();
    this.getFilms();
  },
  methods: {
    getUser() {
      this.$axios
        .get("https://swapi.dev/api/people/1/")
        .then(res => {
          this.user = res.data.name;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getFilms() {
      this.$axios
        .get("https://swapi.dev/api/people/1/")
        .then(res => {
          var itens = res.data.films;
          itens.forEach(element => {
            this.$axios
              .get(element)
              .then(res => {
                this.films.push(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          });
        })
        .catch(err => {
          console.log(err);
        });
      //var list = itens.films;
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
