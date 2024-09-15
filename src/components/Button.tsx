import type { JSX } from "solid-js/jsx-runtime";
import { twMerge } from "tailwind-merge";
interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {

}
const baseClass = twMerge(
    "border m-2 p-2 px-6 rounded-md shadow-md inline-flex cursor-pointer",
    "disabled:text-blue-300 disabled:border-blue-200 disabled:cursor-not-allowed",
    "enabled:hover:text-white enabled:hover:bg-blue-500 enabled:hover:border-blue-500",
    "enabled:active:text-white enabled:active:bg-blue-600 enabled:active:border-blue-600",
    
);
export default function (props: Props) {
    const mergedProps = {
        ...props,
        class: twMerge(baseClass, props.class)
    }
    return <button {...mergedProps}></button>
}