<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog";
  import { ArrowRight } from "lucide-svelte";
  export let showNotice: boolean = false;
</script>

{#if showNotice}
  <Dialog.Root open={showNotice} preventScroll={false}>
    <Dialog.Content class="max-h-screen">
      <Dialog.Header>
        <Dialog.Title class="font-head text-2xl text-center"
          >Contact Submitted</Dialog.Title
        >
      </Dialog.Header>
      <div>
        <p class='text-center w-full'>
         Your contact has been successfully submitted to the wabuzz system. Please click the button below for the next steps to get verified:
        </p>
       
        <Button href='/add/task' class='mt-8 w-full' on:click={()=>showNotice = false}>Next step <span class="ml-2"><ArrowRight/></span> </Button>
      </div>
    </Dialog.Content>
  </Dialog.Root>
{/if}
