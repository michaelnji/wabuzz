<script>
  import Footer from "$lib/components/custom/footer.svelte";
import i from "$lib/images/themesile_terms.svg";
</script>

<div
  class="pt-8 mx-auto max-w-4xl w-full flex flex-col items-center justify-center"
>
  <img src={i} alt="privacy illustration" class="w-full max-w-sm mb-8" />
  <div>
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center font-head"
    >
      Terms of Use
    </h1>
    <p class="leading-7 [&:not(:first-child)]:mt-6 text-center">
      This outlines the policies to abide to when using wabuzz and its services.
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
    Eligibility
    </h2>

    <ol class="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">
      <li>
       You must be at least 18 years old and have an active whatsapp account.
      </li>
     
      <li>
       You must be a member of the wabuzz whatsapp community.
      </li>
     
     
     
    </ol>
    
     <h2
      class=" mt-12  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-head"
    >
   Verification Process
    </h2>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
      When you submit your contact to wabuzz, the following steps are followed to verify you:
    </p>
    <ol class="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">
      <li>
        You complete your  task and submit the screenshot to the appropriate channel.
      </li>
     
      <li>
       A wabuzz moderator/admin verifies your task and adds your contact to the verified list on the wabuzz system.
      </li>
      <li>
       Your contact is compiled along with others on the day the file drops on the wabuzz system.
      </li>
     
     
     
    </ol>
     <h2
      class=" mt-12  scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-head"
    >
  Getting Banned
    </h2>
 <p class="leading-7 [&:not(:first-child)]:mt-6">
      Wabuzz has strict rules, and failure to respect these rules can lead to your contact gettting banned, some major reasons being:
    </p>
    <ol class="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">
      <li>
        Spamming of contacts gained from wabuzz.
      </li>
     
      <li>
       Spamming the wabuzz whatsapp/telegram community with unsolicited ads
      </li>
      <li>
       Your contact getting reported for scam/ fraudelent activity.
      </li>
     <p class="text-xl text-muted-foreground my-6">
     If your contact gets banned, you will need to contact an admin to get it unbanned. If the reason is for scams, it <b>WILL NOT</b> be unbanned
    </p>
     
     
    </ol>
    
   </div>
  </div>
</div>
<div class="mt-24">
    <Footer/>
</div>