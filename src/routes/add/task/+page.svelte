<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Alert from "$lib/components/ui/alert";
  import { CheckCircle2, CopyCheckIcon, CopyIcon } from "lucide-svelte";
  import { fly } from "svelte/transition";
  import { CheckmarkIcon } from "svelte-french-toast";
  import { addToast } from "$lib/scripts/helper/toaster";
  import Footer from "$lib/components/custom/footer.svelte";
  import {socials} from '$lib/data/socialLinks'
  const copyData: string = ` Grow your whatsapp views with this amazing tool!🔥🔥 Gain up to *1k views* by using wabuzz to gain active whatsapp contacts🚀. start gaining here: https://wabuzz.vercel.app`;
  let copied: boolean = false;
  async function copyContent(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      addToast("text copied", "success");
      copied = true;

      setTimeout(() => (copied = false), 1500);
    } catch (err) {
      addToast("error copying text", "error");
      copied = false;
    }
  }
</script>

<div class="w-full grid overflow-x-hidden place-items-center  p-6">
  <div class="max-w-lg bg-white border rounded-lg p-6">
    <h2
      in:fly={{ y: -20 }}
      class="scroll-m-20 text-3xl font-bold tracking-tight font-head mb-2 flex items-center gap-x-2"
    >
      Contact Submitted <CheckmarkIcon />
    </h2>
    <p class=" w-full text-muted-foreground" in:fly={{ y: 20, delay: 100 }}>
      Your contact has been successfully submitted to the wabuzz system. Please
      follow these next steps to get verified:
    </p>
    <ol class="list-decimal list-outside pl-4 space-y-2 mt-8">
      <li in:fly={{ y: 20, delay: 200 }}>Copy the text below to your keyboard</li>
      <div in:fly={{ y: 20, delay: 200 }}
        class="!my-6 relative p-6 rounded-md border font-mono text-muted-foreground bg-muted text-xs"
      >
        {copyData}

        <Button
          on:click={async () => {
            copyContent(copyData);
          }}
          variant="secondary"
          size="sm"
          class="absolute bottom-1 right-1 text-xs"
        >
         {#if copied}
          <CheckCircle2 size='18' />
         {:else}
          <CopyIcon size="18" />
         {/if}
        </Button>
      </div>
      <li in:fly={{ y: 20, delay: 300 }}>
        Share the copied text on your status and once it reaches <b>30 views</b
        >, send a screenshot to the submission channel of wabuzz
        whatsapp community. Join it <a
          href={socials.whatsapp.submission}
          target="_blank"
         
          class="!p-0 !m-0 lowercase text-primary hover:border-b border-primary font-head"
        >
          here.</a
        >
      </li>
      <li in:fly={{ y: 20, delay: 400 }}>
        Once the admin confirms you screenshot, they'll update your status on
        wabuzz to verified & your contact will be added to the file for this
        batch.
      </li>
      <li in:fly={{ y: 20, delay: 500 }}>
        Please make sure you submit your screenshot latest 24 hours before the
        VCF file drops.
      </li>

      <li in:fly={{ y: 20, delay: 600 }}>
        You can find this tasks in our <Button
          href={socials.whatsapp.community}
          variant="link"
          class="p-0 m-0 lowercase"
        >
          WhatsApp community.</Button
        >
      </li>
      <li in:fly={{ y: 20, delay: 700 }}>
        Make sure you read our terms & conditions well while using this site.
      </li>
    </ol>
    <div class="mt-6" in:fly={{ y: 20, delay: 800 }}>
      <Alert.Root>
        <Alert.Title class='text-destructive font-head'>Note</Alert.Title>
        <Alert.Description>
          Only those who do the above tasks and get verified will have access to
          the VCF file when it is made available
        </Alert.Description>
      </Alert.Root>
    </div>
  </div>
</div>

<Footer/>
