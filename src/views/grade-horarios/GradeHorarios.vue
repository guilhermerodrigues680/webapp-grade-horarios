<template>
  <div class="view">
    <Header />
    <section>
      <PeriodoGH />
      <Horario />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import PeriodoGH from "./components/PeriodoGH.vue";
import Horario from "./components/Horario.vue";

@Component({
  components: {
    Header,
    PeriodoGH,
    Horario,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.view {
  // FIXME: Remover isso
  max-width: 360px;
  margin: auto;
  border: 1px solid black;
}
</style>
