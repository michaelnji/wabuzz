<script lang="ts">
  import Time from "svelte-time";
  import { addDays, isTomorrow} from 'date-fns'
  import { getReadableDate } from "$lib/scripts/helper/time";
  export let date: Date | number;
  export let name : string = 'batch-0'
export let finishes : Date | number
  // const yesterday = 
</script>

{#if date}
  {#if getReadableDate(finishes) == getReadableDate(addDays(new Date(), 1))}
   <!-- banner - start -->
  <div
    class=" bg-primary/10 px-4 py-3 flex items-center justify-center sm:pr-8 md:px-8 min-w-screen"
  >
    <div
      class="order-1 mx-auto items-center font-head mb-2 max-w-screen-sm text-base text-primary/90 sm:order-none sm:mb-0 sm:w-auto md:text-md"
    >
      <span class="capitalize">{name}</span> available till <b>
        <Time timestamp={finishes} />
      </b>
    </div>

  </div>
  <!-- banner - end -->

  {:else if isTomorrow(addDays(new Date(), 1))}
    <!-- banner - start -->
  <div
    class=" min-w-screen bg-primary/10 px-4 py-3 flex items-center justify-center sm:pr-8 md:px-8"
  >
    <div
      class="order-1 mx-auto items-center font-head mb-2 max-w-screen-sm text-base text-primary/90 sm:order-none sm:mb-0 sm:w-auto md:text-md"
    >
      <span class="capitalize">{name}</span> drops <b>
        <Time timestamp={date}  />
      </b>
    </div>

  </div>
  <!-- banner - end -->
  {/if}
{/if}
