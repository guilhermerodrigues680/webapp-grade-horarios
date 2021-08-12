<template>
  <div class="periodo-gh">
    <div class="periodo-gh__botoes">
      <svg
        class="periodo-gh__botoes__botao"
        :class="{ 'periodo-gh__botoes__botao--disable': !canPrevWeek }"
        @click="prevWeek()"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#12495B" />
        <path d="M19 7L11 15L19 23" stroke="white" stroke-width="2" />
      </svg>

      <span class="periodo-gh__periodo">
        {{ currentMonday.getDate() }} - {{ currentSaturday.getDate() }}
        {{ currentSaturday | monthNameShort }}
      </span>

      <svg
        class="periodo-gh__botoes__botao"
        @click="nextWeek()"
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
      <span
        v-for="day in 6"
        :key="day"
        class="periodo-gh__item"
        :class="{ 'periodo-gh__item--active': isToday(sumDays(startOfWeekDateRef, day)) }"
      >
        <span>{{ sumDays(startOfWeekDateRef, day) | dayOfWeek }}</span>
        <span>{{ sumDays(startOfWeekDateRef, day).getDate() }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Store } from "@/store";
import { ptBR } from "date-fns/locale";
import {
  format,
  startOfWeek,
  nextMonday,
  nextSaturday,
  addDays,
  addWeeks,
  subWeeks,
  isAfter,
  isSameDay,
} from "date-fns";

console.debug(Store);

@Component({
  filters: {
    monthNameShort(value: Date): string {
      return format(value, "LLL", { locale: ptBR }).toUpperCase();
    },
    dayOfWeek(value: Date): string {
      return format(value, "EEEEEE", { locale: ptBR }).toUpperCase();
    },
  },
})
export default class PeriodoGH extends Vue {
  private storeState = Store.state;
  private startOfWeekDateRef = startOfWeek(this.storeState.now);
  private sumDays = addDays;

  private get currentMonday(): Date {
    return nextMonday(this.startOfWeekDateRef);
  }

  private get currentSaturday(): Date {
    return nextSaturday(this.startOfWeekDateRef);
  }

  private get canPrevWeek(): boolean {
    const startOfWeekDate = startOfWeek(this.storeState.now);
    const prevStartOfWeekDate = subWeeks(this.startOfWeekDateRef, 1);
    return (
      isAfter(prevStartOfWeekDate, startOfWeekDate) ||
      isSameDay(prevStartOfWeekDate, startOfWeekDate)
    );
  }

  prevWeek(): void {
    if (this.canPrevWeek) {
      this.startOfWeekDateRef = subWeeks(this.startOfWeekDateRef, 1);
    }
  }

  nextWeek(): void {
    this.startOfWeekDateRef = addWeeks(this.startOfWeekDateRef, 1);
  }

  isToday(date: Date): boolean {
    return isSameDay(date, this.storeState.now);
  }
}
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

    .periodo-gh__botoes__botao {
      cursor: pointer;

      &--disable {
        cursor: no-drop;
        circle {
          fill: #ececec;
        }
      }
    }

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
      cursor: pointer;

      &--active {
        color: #0083a2;
      }
    }
  }
}
</style>
