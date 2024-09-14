import type { BaseProps } from "@/types";
import { twMerge } from "tailwind-merge";

interface Props extends BaseProps { }
const baseClass = twMerge("text-3xl p-2 font-bold");

export default function (props: Props) {
    const mergedProps = {
        ...props,
        class: twMerge(baseClass, props.class)
    }
    return <h1 {...mergedProps} />
}



