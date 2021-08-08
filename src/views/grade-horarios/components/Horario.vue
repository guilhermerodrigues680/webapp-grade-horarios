<template>
  <div class="horario">
    <HorarioItem turno="manha" />
    <HorarioVago />
    <HorarioItem turno="tarde" />
    <HorarioItem turno="noite" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HorarioItem from "./HorarioItem.vue";
import HorarioVago from "./HorarioVago.vue";

@Component({
  components: {
    HorarioItem,
    HorarioVago,
  },
})
export default class Horario extends Vue {
  private percentualAula = 49;
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
