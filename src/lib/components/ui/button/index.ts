import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap ring-offset-background transition easing-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-head duration-300 disabled:!bg-gray-200 disabled:!text-gray-600 active:scale-95 uppercase",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90 ",
			destructive:
				"bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline:
				"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary:
				"bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-3",
			sm: "h-9  px-3",
			lg: "h-12 px-8 text-lg",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
