<template>
  <div class="horario">
    <!-- Item de Horario -->
    <div class="horario__item">
      <span class="horario__icon">
        <svg
          class="horario__icon__circulo-inicio"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="4" stroke="#71C7DB" stroke-width="2" />
        </svg>
        <span class="horario__icon__linha"></span>
        <svg
          class="horario__icon__circulo-fim"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="5"
            cy="5"
            r="4"
            fill="#71C7DB"
            stroke="#71C7DB"
            stroke-width="2"
          />
        </svg>
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

    <!-- Espaco entre Horarios -->
    <span class="horario__item__espaco-horarios"></span>

    <!-- Item de Horario 2 -->
    <div class="horario__item horario__item--tarde">
      <!-- <span class="horario__icon">
        <svg class="horario__icon__circulo-inicio" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="4" stroke="#71C7DB" stroke-width="2"/>
        </svg>
        <span class="horario__icon__linha"></span>
        <svg class="horario__icon__circulo-fim" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="4" fill="#71C7DB" stroke="#71C7DB" stroke-width="2"/>
        </svg>
      </span> -->
      <span class="horario__icon">
        <span class="horario__icon__linha"></span>
        <span class="horario__icon__linha__aula-ocorrendo"></span>
      </span>

      <span class="horario__inicio-fim">
        <span>9:30</span>
        <span>9:30</span>
      </span>

      <span class="horario__card">
        <span class="horario__card__local">Sala X Predio 22</span>
        <span class="horario__card__turma">1263.1.01</span>
        <span class="horario__card__disciplina">Fundamentos de engenharia</span>
      </span>
    </div>

    <!-- Item de Horario 3 -->
    <div class="horario__item horario__item--noite">
      <span class="horario__icon">
        <svg
          class="horario__icon__circulo-inicio"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="4" stroke="#71C7DB" stroke-width="2" />
        </svg>
        <span class="horario__icon__linha"></span>
        <svg
          class="horario__icon__circulo-fim"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="5"
            cy="5"
            r="4"
            fill="#71C7DB"
            stroke="#71C7DB"
            stroke-width="2"
          />
        </svg>
      </span>

      <span class="horario__inicio-fim">
        <span>9:30</span>
        <span>9:30</span>
      </span>

      <span class="horario__card">
        <span class="horario__card__local">Sala X Predio 22</span>
        <span class="horario__card__turma">1263.1.01</span>
        <span class="horario__card__disciplina">Fundamentos de engenharia</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Horario extends Vue {}
</script>

<style lang="scss" scoped>
.horario {
  margin: 1rem 0;
  padding: 0 1.875rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .horario__item__espaco-horarios {
    display: flex;
    align-items: center;

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

  .horario__item {
    display: flex;
    column-gap: 0.5rem;

    .horario__icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .horario__icon__circulo-inicio {
      }

      .horario__icon__linha {
        flex: 1;
        width: 0.125rem;
        background: #71c7db;
      }

      .horario__icon__circulo-fim {
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
        position: relative;

        // FIXME: OUTRA ABORDAGEM
        &::before,
        &::after {
          content: "";
          display: block;
          height: 0.625rem;
          width: 0.625rem;
          border-radius: 50%;
        }

        &::before {
          border: 0.125rem solid $variant-color1;
        }

        &::after {
          background: $variant-color1;
        }
        //

        .horario__icon__linha__aula-ocorrendo {
          // TODO: Para melhora mapear o intervalo é necessário javascript
          --percentual-aula: 50%;
          position: absolute;
          top: var(--percentual-aula, 0%);
          left: 0;
          transform: translateY(-50%);
          height: 0.625rem;
          width: 0.625rem;
          border-radius: 50%;
          background: #ff9d28;
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
        .horario__icon__circulo-inicio circle {
          stroke: $variant-color2;
        }

        .horario__icon__linha {
          background: $variant-color2;
        }

        .horario__icon__circulo-fim circle {
          stroke: $variant-color2;
          fill: $variant-color2;
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
}
</style>
