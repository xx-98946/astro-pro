import type { BaseProps } from "@/types";
import { twMerge } from "tailwind-merge";
interface Props extends BaseProps {

}
const baseClass = twMerge("border m-2 p-2 px-6 rounded-md shadow-md inline-flex cursor-pointer hover:text-blue-600 hover:border-blue-400");
export default function (props: Props) {
    const mergedProps = {
        ...props,
        class: twMerge(baseClass, props.class)
    }
    return <div {...mergedProps}></div>
}