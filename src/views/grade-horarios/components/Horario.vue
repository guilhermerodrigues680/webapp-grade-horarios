<template>
  <div class="horario">
    <HorarioItem v-for="(h, idx) in horariosAulas" :key="idx" :horarioAula="h" />
    <!-- <HorarioVago /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HorarioItem from "./HorarioItem.vue";
import HorarioVago from "./HorarioVago.vue";
import Api from "@/service/api";
import { HorarioAula } from "@/models/HorarioAula";

@Component({
  components: {
    HorarioItem,
    HorarioVago,
  },
})
export default class Horario extends Vue {
  private horariosAulas: HorarioAula[] = [];

  async created(): Promise<void> {
    this.horariosAulas = await Api.getHorarios();
    console.debug(this.horariosAulas);
  }
}
</script>

<style lang="scss" scoped>
.horario {
  margin: 1rem 0;
  padding: 0 1.875rem;
  display: flex;
  flex-direction: column;
}
</style>
