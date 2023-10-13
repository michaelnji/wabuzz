<script>
  import Footer from "$lib/components/custom/footer.svelte";
import i from "$lib/images/themesile_privacy.svg";
</script>

<div
  class="pt-8 mx-auto max-w-4xl w-full flex flex-col items-center justify-center"
>
  <img src={i} alt="privacy illustration" class="w-full max-w-sm mb-8" />
  <div>
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center font-head"
    >
      Privacy Policy
    </h1>
    <p class="leading-7 [&:not(:first-child)]:mt-6 text-center">
      This outlines the policies we abide by to handle your data & privacy.
    </p>

   <div class="px-4 py-8 mt-12 rounded-xl border border-muted w-full mx-auto max-w-xl">
     <h2
      class="  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-head"
    >
      Introduction
    </h2>

    <ul class="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
      <li>
        <b>You</b>, <b>user</b> refers to anybody who submits thier contact information to the wabuzz system
      </li>
      <li>
        <b>Us</b>, <b>We</b> refers to the creators & moderators of the wabuzz system
      </li>
     
    </ul>

     <h2
      class=" mt-12  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-head"
    >
     Information we collect
    </h2>

    <ol class="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
      <li>
       We collect your contact information such as name, country, and phone number
      </li>
      <li>
       We also store anonymous data as cookies & temporary information about your usage of the site that allows for the proper functioning of the system
      </li>
      <li>
       We DO NOT SELL your information to third parties and your information is deleted at the end of every batch
      </li>
     
     
    </ol>
    
   </div>
  </div>
</div>
<div class="mt-24">
    <Footer/>
</div>