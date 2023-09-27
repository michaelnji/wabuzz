<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Tabs from "$lib/components/ui/tabs";
  import { toggleUserGuide } from "$lib/scripts/helper";
  import { getOrSetItem } from "$lib/scripts/localStorage";
  import { onMount } from "svelte";
  let showNotice: boolean = true;
  let activeTab:string = 'Guidelines'
  onMount(() => {
    showNotice = getOrSetItem("show-notice", true);
  });
</script>

{#if showNotice}
  <Dialog.Root
  open={true}
  preventScroll={false}
  closeOnEscape={false}
  closeOnOutsideClick={false}
>
  <Dialog.Content class="overflow-y-scroll max-h-screen">
    <Dialog.Header>
      <Dialog.Title class="font-head text-3xl">Before you start</Dialog.Title>
    </Dialog.Header>
    <Tabs.Root value={activeTab} class="w-full mt-4">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Trigger value="Guidelines">Guidelines</Tabs.Trigger>
        <Tabs.Trigger value="How to Submit">How to Submit</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="Guidelines">
        <div class="mt-8">
          <p>Wabuzz has a set of guidelines for utilizing its services:</p>
          <br />
          <ul class="list-disc list-outside pl-4 space-y-2">
            <li>Contacts gained from this site are for business use only!</li>
            <li>
              We have a strict no-spam policy. read more <a
                href="/terms"
                class="underline text-primary">here</a
              >.
            </li>
            <li>
              All contacts will be prefixed with <Badge variant="secondary"
                >-wabuzz</Badge
              >
            </li>
            <li>
              Make sure you follow the <b>verification task</b> (will be shown to
              you after you submit your contact), as only those who complete it will
              gain access to the VCF file.
            </li>
            <li>
              Make sure you read & understand our <a
                href="/terms"
                class="underline text-primary">terms & conditions</a
              > before continuing.
            </li>
          </ul>
           <!-- <Button class='mt-8 w-full' on:click={()=>{
          if(activeTab == 'Guidelines') activeTab = 'How to Submit'
          else activeTab = 'Guidelines'
          }}>Next</Button> -->
        </div>
      </Tabs.Content>
      <Tabs.Content value="How to Submit">
        <div class="mt-8">
          <p>This is how to submit your contact:</p>
          <br />
          <ul class="list-disc list-outside pl-4 space-y-2">
            <li>Enter your number only once per batch</li>
            <li>
              Enter your name as you would like it to appear on Whatsapp. No
              numbers are allowed in names.
            </li>
            <li>
              Make sure to select your country when entering your phone number
            </li>
            <li>
              Make sure you verify your information before submission as this
              cannot be modified once submitted.
            </li>
          </ul>

          <Button class='mt-8 w-full' on:click={()=>showNotice = toggleUserGuide(showNotice)}>I understand</Button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </Dialog.Content>
</Dialog.Root>

{/if}