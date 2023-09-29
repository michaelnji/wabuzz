<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog";
  import type { ContactDetails } from "$lib/types";
  import { flyAndScale } from "$lib/utils";
  import { fly } from "svelte/transition";

  export let showNotice: boolean = false;
  export let details: ContactDetails;
</script>

{#if showNotice}
  <Dialog.Root open={showNotice} preventScroll={false}>
    <Dialog.Content class="max-h-screen">
      <Dialog.Header>
        <Dialog.Title class="font-head text-3xl"
          >Your contact exists</Dialog.Title
        >
      </Dialog.Header>
      <div>
        <p>
          The number <b>{details.phone}</b> exists in our system with name {details.name}
        </p>
        <h3 class="text-lg font-medium font-head mt-6 mb-3 opacity-90">
          Details
        </h3>
        <div class="bg-gray-50 bg-opacity-90 p-2 rounded-md text-sm mt-1 mb-4">
          <p class="flex items-center gap-x-2">
            <span class="opacity-80">Name</span>
            <span class="font-head font-medium">{details.name}</span>
          </p>
          <div class="my-2 border w-full opacity-60 dark:border-gray-600" />
          <p class="flex items-center gap-x-2">
            <span class="opacity-80">Phone</span>
            <span class="font-head font-medium">{details.phone}</span>
          </p>
          <div class="my-2 border w-full opacity-60 dark:border-gray-600" />
          <p class="flex items-center gap-x-2">
            <span class="opacity-80">Country</span>
            <span class="font-head font-medium">{details.country}</span>
          </p>
          <div class="my-2 border w-full opacity-60 dark:border-gray-600" />
          <p class="flex items-center gap-x-2">
            <span class="opacity-80">Verification status</span>
            <span class="font-head font-medium"
              ><Badge
                variant={details.verification_status == "banned"
                  ? "destructive"
                  : "secondary"}>{details.verification_status}</Badge
              ></span
            >
          </p>
          {#if details.verification_status == "banned"}
            <div class="my-2 border w-full opacity-60 dark:border-gray-600" />
            <p class="flex items-center gap-x-2">
              <span class="opacity-80">Reason for ban</span>
              <span class="font-head font-medium"
                ><Badge variant="secondary">{details.ban_reason}</Badge></span
              >
            </p>
          {/if}
        </div>
      </div>
    </Dialog.Content>
  </Dialog.Root>
{/if}
