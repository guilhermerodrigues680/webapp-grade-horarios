<template>
  <header>
    <svg
      class="header__icon"
      width="32"
      height="23"
      viewBox="0 0 32 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.939341 10.4393C0.353554 11.0251 0.353554 11.9749 0.939341 12.5607L10.4853 22.1066C11.0711 22.6924 12.0208 22.6924 12.6066 22.1066C13.1924 21.5208 13.1924 20.5711 12.6066 19.9853L4.12132 11.5L12.6066 3.01472C13.1924 2.42893 13.1924 1.47919 12.6066 0.893398C12.0208 0.307611 11.0711 0.307611 10.4853 0.893398L0.939341 10.4393ZM32 10L2 10V13L32 13V10Z"
        fill="white"
      />
    </svg>
    <span class="header__title"> Grade de Horários </span>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
  height: 3.5rem;
  background: #12495b;
  display: flex;
  align-items: center;
  padding: 0 1.875rem;
  column-gap: 1rem;

  .header__icon path {
    fill: white;
  }

  .header__title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
}
</style>
