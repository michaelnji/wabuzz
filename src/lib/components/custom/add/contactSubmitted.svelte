<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Alert from "$lib/components/ui/alert";
  import {CalendarCheck,  CopyIcon, UserCheckIcon } from "lucide-svelte";
  import { fly } from "svelte/transition";
  export let showNotice: boolean = false;
</script>

{#if showNotice}
  <Dialog.Root open={showNotice} preventScroll={false}>
    <Dialog.Content class="max-h-[90%] overflow-y-scroll">
      <Dialog.Header>
        <Dialog.Title  class="font-head text-2xl flex items-center gap-x-3">Contact Submitted <UserCheckIcon/> </Dialog.Title
        >
      </Dialog.Header>
      <div>
        <p class=" w-full" in:fly={{y:20, delay:100}}>
          Your contact has been successfully submitted to the wabuzz system.
          Please follow these next steps to get verified:
        </p>
        <ol class="list-decimal list-outside pl-4 space-y-2 mt-4">
          <li>copy the text below to your keyboard</li>
          <div class="!my-6 relative p-6 rounded border font-mono font-bold">
            Grow your whatsapp views with this amazing tool!🔥🔥 Gain up to 1k
            views by using wabuzz to gain whatsapp contacts🚀. Submit your
            contact now:👀🔗✨ https://wabuzz.vercel.app

            <Button
              variant="secondary"
              size="sm"
              class="absolute bottom-1 right-1 text-xs"
            >
              <CopyIcon size="13" />
            </Button>
          </div>
          <li>
            Share the copied text on your status and once it reaches <b
              >30 views</b
            >, send a screenshot to the screenshot submission channel of wabuzz whatsapp community. Join it <Button
              href="/"
              target='_blank'
              variant="link"
              class="p-0 m-0 lowercase"
            >
              here.</Button
            >
          </li>
          <li>
            Once the admin confirms you screenshot, they'll update your status
            on wabuzz to verified & your contact will be added to the file for
            this batch.
          </li>
          <li>
           Please make sure you submit your screenshot 24hours before the VCF file drops.
          </li>
          <li class="fleX w-full items-center">
            Come back to wabuzz <Badge
              variant="secondary"
              class=" gap-x-2 inline-flex max-w-max uppercase"
            >
              <CalendarCheck size="16" /> Sunday, 12TH OCT @12PM</Badge
            > to get access to the VCF file
          </li>
          <li>
           You can find this tasks in our <Button
              href="/"
              variant="link"
              class="p-0 m-0 lowercase"
            >
              WhatsApp community.</Button
            >
          </li>
          <li>
            Make sure you read our terms & conditions well while using this
            site.
          </li>
        </ol>
        <div class="mt-6"> 
          <Alert.Root>
            <Alert.Title>Note</Alert.Title>
            <Alert.Description>
            Only those who do the above tasks and get verified will have access to the VCF file when it is made available

            </Alert.Description>
          </Alert.Root>
        </div>
      </div>
    </Dialog.Content>
  </Dialog.Root>
{/if}
