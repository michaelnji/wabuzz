<script lang="ts">
  import UserNotice from "$lib/components/custom/add/userNotice.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as Select from "$lib/components/ui/select";
  import { isValidName } from "$lib/scripts/helper";
  import {
    createForm,
    type FelteErrorEvent,
    type FelteSuccessEvent,
  } from "felte";

  const countries = [
    { value: "+237", label: "Cameroon" },
    { value: "+234", label: "Nigeria" },
  ];

  let selectedCountryCode: unknown = "xxx";
  let name: string = "";
  let phone: string = "";
  let country: unknown = "";
  let nameError: boolean = false;
  let numberError: boolean = false;

  const { form } = createForm({
    onSubmit: (values) => {
      // ...
    },
  });

  function handleSuccess(event: FelteSuccessEvent) {
    const { response, ...context } = event.detail;
    // Do something with the response.
  }

  function handleError(event: FelteErrorEvent) {
    const { error, ...context } = event.detail;
  }

  $: {
    if (!isValidName(name)) nameError = true;
    else nameError = false;

    if (phone.length < 8) numberError = true;
    else numberError = false;
  }
</script>

<UserNotice />

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
            <Input type="text" id="name" bind:value={name} required />
            {#if nameError}
              <p class="text-sm text-muted-foreground">
                Numbers are not allowed in names.
              </p>
            {/if}
          </div>
          <div class="flex flex-col w-full gap-1.5">
            <Label for="country"
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
                name="country"
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
            {/if}
          </div>

          <Button type="submit" class="w-full mt-4" size="lg"
            >Submit Contact</Button
          >
        </div>
      </form>
    </div>
  </div>
</div>
