<template>
  <div class="view">
    <Header />
    <section>
      <PeriodoGH />
      <Horario />
    </section>

    <div class="div-demo">
      <button @click="incrementNow()">mais</button>
      <button @click="decrementNow()">menos</button>
      <div>{{ storeState.now.toLocaleString("pt-BR") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import PeriodoGH from "./components/PeriodoGH.vue";
import Horario from "./components/Horario.vue";
import { Store } from "@/store";

@Component({
  components: {
    Header,
    PeriodoGH,
    Horario,
  },
})
export default class Home extends Vue {
  private storeState = Store.state;

  incrementNow(): void {
    Store.incrementNow();
  }

  decrementNow(): void {
    Store.decrementNow();
  }
}
</script>

<style lang="scss" scoped>
.view {
  // FIXME: Remover isso
  max-width: 360px;
  margin: auto;
  border: 1px solid black;
}

.div-demo {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
