<template>
  <div class="horario">
    <HorarioItem turno="manha" :percentualAula="percentualAula" />
    <HorarioItem turno="tarde" />
    <HorarioItem turno="noite" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HorarioItem from "./HorarioItem.vue";

@Component({
  components: {
    HorarioItem,
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
  row-gap: 1rem;
}
</style>
