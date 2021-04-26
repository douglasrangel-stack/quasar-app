<template>
  <q-page class="main-container">
    <h3 class="center">Starships</h3>
    <div class="row">
      <div class="col-md-4" v-for="star in starships" :key="star.created">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">{{ star.name }}</div>
            <div class="text-subtitle2">Modelo: {{ star.model }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ star.manufacturer }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageStarships",
  data() {
    return {
      starships: []
    };
  },
  mounted() {
    this.getStarships();
  },
  methods: {
    getStarships() {
      this.$axios
        .get("https://swapi.dev/api/starships/")
        .then(res => {
          console.log(res.data.results);
          this.starships = res.data.results;
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
