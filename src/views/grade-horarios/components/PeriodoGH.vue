<template>
  <div class="periodo-gh">
    <div class="periodo-gh__botoes">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#12495B" />
        <path d="M19 7L11 15L19 23" stroke="white" stroke-width="2" />
      </svg>

      <span class="periodo-gh__periodo">7-13 Agosto</span>

      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle r="15" transform="matrix(-1 0 0 1 15 15)" fill="#12495B" />
        <path d="M11 7L19 15L11 23" stroke="white" stroke-width="2" />
      </svg>
    </div>
    <div class="periodo-gh__calendario">
      <span class="periodo-gh__item">
        <span>SEG</span>
        <span>7</span>
      </span>
      <span class="periodo-gh__item periodo-gh__item--active">
        <span>TER</span>
        <span>8</span>
      </span>
      <span class="periodo-gh__item">
        <span>QUA</span>
        <span>9</span>
      </span>
      <span class="periodo-gh__item">
        <span>QUI</span>
        <span>10</span>
      </span>
      <span class="periodo-gh__item">
        <span>SEX</span>
        <span>11</span>
      </span>
      <span class="periodo-gh__item">
        <span>SAB</span>
        <span>12</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PeriodoGH extends Vue {}
</script>

<style lang="scss" scoped>
.periodo-gh {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 1.875rem;
  box-shadow: 0px 16px 16px -16px rgba(0, 0, 0, 0.25);

  .periodo-gh__botoes {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .periodo-gh__periodo {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.1em;
    }
  }

  .periodo-gh__calendario {
    display: flex;
    justify-content: space-between;
    padding: 0 1.875rem;

    .periodo-gh__item {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;

      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.25rem;

      &--active {
        color: #0083a2;
      }
    }
  }
}
</style>
