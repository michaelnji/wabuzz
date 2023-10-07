<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { socials } from "$lib/data/socialLinks";
  import { BxQuestionMark } from "svelte-boxicons";
</script>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl font-head"
      >
        Frequently asked questions
      </h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        Here you can find all the information you need to start using wabuzz.
      </p>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            What is wabuzz?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          Wabuzz (whatsapp buzz) is a platform that helps its users grow their
          whatsapp audience through a process called recurring contact
          accumulation.
        </p>
      </div>
      <!-- question - end -->
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            How do I gain contacts here?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          Simply head on to the <Button
            href="/add"
            variant="secondary"
            size="sm">add contact</Button
          > page and fill in your information, then come back on sunday and head
          on to the <Button href="/download" variant="secondary" size="sm"
            >download</Button
          > page to download the vcf file.
        </p>
      </div>
      <!-- question - end -->
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            How To Install The VCF File?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          Simply tap the file and choose the location you want the file to be
          saved. If you have just one location, you'll simply receive a message
          saying the file will be imported shortly.
        </p>
      </div>
      <!-- question - end -->
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            How To Get The File If I Miss Download Deadline?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          Simply head on to the <Button href={socials.whatsapp.community} variant="link" size="sm"
            >WhatsApp group</Button
          > or go to the <Button href={socials.telegram} variant="link" size="sm"
            >Telegram channel</Button
          > to download the VCF file.
        </p>
      </div>
      <!-- question - end -->
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            What about Permanent Verification?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          Permanent verification allows you to automatically gain from every
          batch of contacts without having to manually enter your phone number
          every time. you also get a special emoji added to your contact before
          it is added to the VCF file. Permanent verification costs <b
            >2500CFA/month</b
          >
          or <b>500CFA/week</b>
        </p>
      </div>
      <!-- question - end -->
      <!-- question - start -->
      <div class="rounded-lg border p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-bold font-head text-primary sm:text-lg md:text-xl">
            How Can I Get Permanent Verification?
          </h3>

          <span
            class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary"
            ><BxQuestionMark />
          </span>
        </div>

        <p class="text-gray-700">
          <Button href={socials.whatsapp.admin} variant="secondary" size="sm">Click here</Button> to
          chat with the admin concerning permanent verification & pricing.
        </p>
      </div>
      <!-- question - end -->
    </div>
  </div>
</div>