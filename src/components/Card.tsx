import type { BaseProps } from "@/types";
import { twMerge } from "tailwind-merge";
interface Props extends BaseProps {

}
const baseClass = twMerge("border m-4 p-2 rounded-lg shadow-lg");
export default function(props: Props) {
    const mergedProps = {
        ...props,
        class: twMerge(baseClass, props.class)
    }
    return <div {...mergedProps}></div>
}