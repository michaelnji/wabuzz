import toast from "svelte-french-toast";

export function addToast(message:string, type:string, duration = 4500) {
  const config = {
    duration,

    style:
      "border-radius: 10px; font-size: 14px !important; background: #FFF; color: #555;",
  };
  if (type === "success") {
    toast.success(message, config);
  } else if (type === "error") {
    toast.error(message, config);
  } else {
    toast(message, config);
  }
}


