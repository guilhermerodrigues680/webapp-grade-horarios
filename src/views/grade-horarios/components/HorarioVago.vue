<template>
  <!-- FIXME: Fazer codicional -->
  <!-- Espaco entre Horarios -->
  <span class="horario__item__espaco-horarios"></span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HorarioVago extends Vue {}
</script>

<style lang="scss" scoped>
.horario__item__espaco-horarios {
  display: flex;
  align-items: center;
  padding: 0.25rem 0rem 0.25rem 0.375rem;

  &::before {
    content: "";
    display: block;
    height: 0.625rem;
    width: 0.625rem;
    background: #ff9d28;
    border-radius: 50%;
  }

  &::after {
    flex: 1;
    content: "";
    display: block;
    height: 0.125rem;
    background: #ff9d28;
  }
}
</style>
