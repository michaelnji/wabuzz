<script lang="ts">
  import ContactSubmitted from "./../../lib/components/custom/add/contactSubmitted.svelte";
  import UserNotice from "$lib/components/custom/add/userNotice.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as Select from "$lib/components/ui/select";
  import { isValidName, isValidPhone } from "$lib/scripts/helper";
  import type { AddContactResponse, ContactDetails } from "$lib/types";
  import {
    createForm,
    type FelteErrorEvent,
    type FelteSuccessEvent,
  } from "felte";
  import { countries } from "$lib/data/countries";
  import { addToast } from "$lib/scripts/helper/toaster";
  import { Loader, Loader2, LucideLoader } from "lucide-svelte";
  import ContactExistsNotice from "$lib/components/custom/add/contactExistsNotice.svelte";
  import { BxLoader, BxLoaderAlt, BxLoaderCircle } from "svelte-boxicons";

  let selectedCountryCode: unknown = "xxx";
  let name: string = "";
  let phone: string = "";
  let country: unknown = "";
  let nameError: boolean = false;
  let numberError: boolean = false;
  let phoneNotValid: boolean = false;
  let isloading: boolean = false;
  let contactExists: boolean = false;
  let submitted: boolean = false;
  let contact: ContactDetails;

  function handleSuccess(event: FelteSuccessEvent) {
    const { response, ...context } = event.detail;
    console.log(response);
  }

  function handleError(event: FelteErrorEvent) {
    const { error, ...context } = event.detail;
    console.log(error);
  }

  const { form } = createForm({
    async onSubmit(values, context) {
      if (!isValidName(name)) {
        addToast("Name cannot contain numbers", "error");
        return;
      }
      if (phone.length < 8) {
        addToast("Phone number is too short", "error");
        return;
      }
      if (country === "xxx") {
        addToast("Please select a country", "error");
        return;
      }

      if (!isValidPhone(phone)) {
        addToast("Phone number is invalid", "error");
        return;
      }
      contactExists = false;
      submitted=false
      isloading = true;
      const userDetail: ContactDetails = {
        name,
        phone: selectedCountryCode + phone,
        country,
        country_code: selectedCountryCode ? selectedCountryCode : "",
        verification_status: "not verified",
        ban_reason: "",
      };

      const res = await fetch("/api/add", {
        method: "POST",
        body: JSON.stringify({ ...userDetail }),
        headers: {
          "content-type": "application/json",
        },
      });

      let data = await res.json();
      isloading = false;

      let { status, data: contactInfo, message } = data;

      if (status == 500) {
        addToast(message, "error");
        return;
      }
      if (contactInfo.exist) {
        addToast("Contact exists", "error");
        contact = contactInfo;
        contactExists = true;
        return;
      }
      submitted = true;
      addToast(message, "success");
      return;
    },
  });

  $: {
    if (!isValidName(name)) nameError = true;
    else nameError = false;

    if (phone.length < 8) numberError = true;
    else numberError = false;

    if (!isValidPhone(phone)) phoneNotValid = true;
    else phoneNotValid = false;
  }
</script>

<UserNotice />
<ContactExistsNotice showNotice={contactExists} details={contact} />
<ContactSubmitted showNotice={submitted} />
<div class="w-screen h-screen grid place-items-center">
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2
        class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-head mx-auto max-w-max mb-4"
      >
        Submit your contact
      </h2>
      <p class=" mb-6 mx-auto max-w-max">
        Please fill in this form to submit your contact to wabuzz's system
      </p>
      <form use:form class="mx-auto max-w-lg rounded-lg border">
        <div class="flex flex-col gap-4 p-6">
          <div class="flex flex-col w-full gap-1.5">
            <Label for="name"
              >Name <span class="text-destructive text-xl">*</span></Label
            >
            <Input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              required
            />
            {#if nameError}
              <p class="text-sm text-muted-foreground">
                Numbers are not allowed in names.
              </p>
            {/if}
          </div>
          <div class="flex flex-col w-full gap-1.5">
            <Label for="selectedCountryCode"
              >Country <span class="text-destructive text-xl">*</span></Label
            >
            <Select.Root
              required
              onSelectedChange={(value) => {
                selectedCountryCode = value ? value.value : "";
                country = value ? value.label : "";
              }}
            >
              <Select.Trigger class="w-full">
                <Select.Value placeholder="Select a country" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Label>Country</Select.Label>
                  {#each countries as country}
                    <Select.Item value={country.value} label={country.label}
                      >{country.label}</Select.Item
                    >
                  {/each}
                </Select.Group>
              </Select.Content>
              <Select.Input
                name="selectedCountryCode"
                bind:value={selectedCountryCode}
                required
              />
            </Select.Root>
          </div>
          <div class="flex flex-col w-full gap-1.5">
            <Label for="phone"
              >Phone Number <span class="text-destructive text-xl">*</span
              ></Label
            >
            <div class="w-full flex items-center">
              <div
                class="h-full p-2 rounded-md bg-muted rounded-tr-none rounded-br-none border border-muted"
              >
                {selectedCountryCode}
              </div>
              <Input
                name="phone"
                type="text"
                id="phone"
                class=" rounded-tl-none rounded-bl-none"
                bind:value={phone}
                disabled={selectedCountryCode === "xxx"}
                required
              />
            </div>
            {#if selectedCountryCode == "xxx"}
              <p class="text-sm text-muted-foreground">
                Please select a country.
              </p>
            {:else if numberError}
              <p class="text-sm text-muted-foreground">
                Phone number is too short.
              </p>
            {:else if phoneNotValid}
              <p class="text-sm text-muted-foreground">
                Phone number is invalid.
              </p>
            {/if}
          </div>

          <Button type="submit" class="w-full mt-4" disabled={isloading} size="lg">
            {#if isloading}
             <div class="animate animate-spin"> <Loader /></div>
            {:else}
              Submit Contact
            {/if}
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>
