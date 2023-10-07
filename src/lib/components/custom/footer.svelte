<script>
  import { socials } from "$lib/data/socialLinks";
  import { BxlTelegram, BxlTwitter, BxlWhatsapp, BxlWhatsappSquare } from "svelte-boxicons";

</script>
<div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center border-t pt-6">
      <!-- nav - start -->
      <nav class="mb-4 font-medium flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <a href="https://mykenji.vercel.app" target="_blank" class="text-gray-500 transition duration-100 hover:text-primary active:text-primary">Created by Myke</a>
        <a href="/terms" class="text-gray-500 transition duration-100 hover:text-primary active:text-primary">Terms & conditions</a>
        <a href="/privacy-policy" class="text-gray-500 transition duration-100 hover:text-primary active:text-primary">Privacy policy</a>
        
      </nav>
      <!-- nav - end -->

      <!-- social - start -->
      <div class="flex gap-4">
        <a href={socials.whatsapp.community} target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
         <BxlWhatsapp/>
        </a>

        <a href={socials.telegram} target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
         <BxlTelegram/>
        </a>       
        <!-- <a href={socials.twitter} target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
         <BxlTwitter/>
        </a>        -->
      </div>
      <!-- social - end -->
    </div>

    <div class="py-8 text-center text-sm text-gray-400">© 2023 - Present wabuzz. All rights reserved.</div>
  </footer>
</div>