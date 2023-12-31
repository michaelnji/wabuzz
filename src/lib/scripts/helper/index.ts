import type { ContactDetails } from "$lib/types";
import { setItemValue } from "../localStorage";
import { saveAs } from "file-saver";
import { isArray } from "mathjs";
import { v4 as uuidv4 } from "uuid";
import vCardsJS from "vcards-js";

export const toggleUserGuide = (state: boolean): boolean => {
  setItemValue("show-notice", !state);
  return !state;
};

export const isValidName = (name: string = ""): boolean => {
  const re = /^[^0-9]+$/g;
  const found: boolean = re.test(name);
  return found;
};

export const isValidPhone = (phone: string = ""): boolean => {
  const re = /^[0-9]+$/g;
  const found: boolean = re.test(phone);
  return found;
};

export const sanitizer = (dirtyString: string): string => {
  let cleansedString: string = dirtyString;
  const badChars: string = "^?/\"!@#$%&*()_+-=><,.;:{}[]'|";
  for (let i = 0; i < badChars.length - 1; i++) {
    cleansedString = cleansedString.replaceAll(badChars[i], "");
  }
  return cleansedString;
};

export const saveVcfFile = (vcfData: string) => {
  try {
    const blob = new Blob([vcfData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `WABUZZ_0${uuidv4()}.vcf`);
  } catch (err) {
    return err;
  }
};

export const createVcard = (
  data: ContactDetails[] | unknown,
  batch: string
): string => {
  const vCard = vCardsJS();
  let finalVcard = "";
  if (isArray(data)) {
    data.forEach((e) => {
      vCard.cellPhone = e.phone;
      vCard.name = `wb-${batch}`;
      vCard.firstName = e.name;
      finalVcard = finalVcard + vCard.getFormattedString();
    });
  }

  return finalVcard;
};

export const isEmptyObject = (obj: object) => {
  return JSON.stringify(obj) === "{}";
};
