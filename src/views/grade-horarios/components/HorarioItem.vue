<template>
  <!-- Item de Horario -->
  <div
    class="horario__item"
    :class="[
      classeTurno,
      {
        'horario__item--aula-ocorrendo': percentualAula === 0 || percentualAula,
      },
    ]"
  >
    <span class="horario__icon">
      <span class="horario__icon__linha"></span>
      <span
        v-show="percentualAula === 0 || percentualAula"
        class="horario__icon__linha__aula-ocorrendo"
        :style="{ '--percentual-aula': `${percentualAula}%` }"
      ></span>
    </span>
    <span class="horario__inicio-fim">
      <span>9:30</span>
      <span>9:30</span>
    </span>
    <span class="horario__card horario__item">
      <span class="horario__card__local">Sala X Predio 22</span>
      <span class="horario__card__turma">1263.1.01</span>
      <span class="horario__card__disciplina">Fundamentos de engenharia</span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HorarioItem extends Vue {
  @Prop({
    type: String,
    default: "manha",
    validator(value) {
      return ["manha", "tarde", "noite"].includes(value);
    },
  })
  readonly turno!: string;

  @Prop({
    type: Number,
    validator(value) {
      return value >= 0 && value <= 100;
    },
  })
  readonly percentualAula!: number;

  get classeTurno(): string {
    return `horario__item--${this.turno}`;
  }
}
</script>

<style lang="scss" scoped>
.horario__item {
  display: flex;
  column-gap: 0.5rem;
  padding: 0.5rem 0.375rem;
  border: 0.125rem solid transparent;

  &--aula-ocorrendo {
    background: rgba(#ff9d28, 0.12);
    border-color: #ff9d28;
    border-radius: 0.5rem;
  }

  .horario__icon {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &::before,
    &::after {
      content: "";
      display: block;
      height: 0.625rem;
      width: 0.625rem;
      border-radius: 50%;
    }

    &::before {
      border: 0.125rem solid #71c7db;
    }

    &::after {
      background: #71c7db;
    }

    .horario__icon__linha {
      flex: 1;
      width: 0.125rem;
      background: #71c7db;
    }

    .horario__icon__linha__aula-ocorrendo {
      --percentual-aula: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: (0.625rem / 2) 0px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: var(--percentual-aula, 0%);
        left: 0;
        transform: translate(-50%, -50%);
        height: 0.625rem;
        width: 0.625rem;
        border-radius: 50%;
        background: #ff9d28;
      }
    }
  }

  .horario__inicio-fim {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1rem;

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .horario__card {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background: #71c7db;
    border-radius: 0.5rem;

    .horario__card__local {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #626262;
    }

    .horario__card__turma {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      color: #000000;
    }

    .horario__card__disciplina {
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      color: #000000;
    }
  }

  &--tarde {
    $variant-color1: #1f9fc9;
    .horario__icon {
      &::before {
        border-color: $variant-color1;
      }

      &::after {
        background: $variant-color1;
      }

      .horario__icon__circulo-inicio circle {
        stroke: $variant-color1;
      }

      .horario__icon__linha {
        background: $variant-color1;
      }

      .horario__icon__circulo-fim circle {
        stroke: $variant-color1;
        fill: $variant-color1;
      }
    }

    .horario__card {
      background: $variant-color1;
    }
  }

  &--noite {
    $variant-color2: #005b63;
    .horario__icon {
      &::before {
        border-color: $variant-color2;
      }

      &::after {
        background: $variant-color2;
      }

      .horario__icon__linha {
        background: $variant-color2;
      }
    }

    .horario__card {
      background: $variant-color2;

      .horario__card__local {
        color: #c4c4c4;
      }

      .horario__card__turma {
        color: #ffffff;
      }

      .horario__card__disciplina {
        color: #ffffff;
      }
    }
  }
}
</style>
