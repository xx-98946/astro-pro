import type { JSX } from "solid-js/jsx-runtime";
import { twMerge } from "tailwind-merge";
interface Props extends JSX.HTMLAttributes<HTMLDivElement> {

}
const baseClass = twMerge("border m-4 p-2 rounded-lg shadow-lg");
export default function (props: Props) {
    const mergedProps = {
        ...props,
        class: twMerge(baseClass, props.class)
    }
    return <div {...mergedProps}></div>
}