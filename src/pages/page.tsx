import Title from "@/components/Title";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Page() {
    const handleClick = (e: MouseEvent) => {
        console.log(e)
        alert("点击事件")
    }
    return (
        <section class="overflow-auto h-full">
            <Card>
                <Title class="text-3xl border-b shadow-sm">卡片组件</Title>
                <Card>
                    <Title class="text-2xl border-b shadow-sm">卡片标题</Title>
                    <p>卡片占位文本内容</p>
                    <p>卡片占位文本内容</p>
                </Card>
            </Card>

            <Card>
                <Title class="text-3xl border-b shadow-sm">标题组件</Title>
                <Title class="text-6xl">一级标题</Title>
                <Title class="text-5xl">二级标题</Title>
                <Title class="text-4xl">三级标题</Title>
                <Title class="text-3xl">四级标题</Title>
                <Title class="text-2xl">五级标题</Title>
                <Title class="text-xl">六级标题</Title>
            </Card>

            <Card>
                <Title class="text-3xl border-b shadow-sm">按钮组件</Title>

                <p class="p-2">按钮有多种状态，为了保持样式一致，需要同步修改所有状态。</p>

                <ol class="p-2 list-inside">
                    <li class="list-decimal">默认状态：默认样式</li>
                    <li class="list-decimal">disabled:状态：按钮被禁用时的状态</li>
                    <li class="list-decimal">hover:enabled:状态：鼠标移入时的状态</li>
                    <li class="list-decimal">active:enabled:状态：按钮选中时的状态</li>
                </ol>

                <div>

                    <Button >蓝色按钮</Button>
                    <Button class="text-blue-500 border-blue-400">蓝色按钮</Button>
                    <Button disabled>蓝色按钮禁用</Button>

                </div>

                <div>
                    <Button class="disabled:text-red-300 disabled:border-red-200 enabled:hover:bg-red-500 enabled:hover:border-red-500 enabled:active:bg-red-600 enabled:active:border-red-600">红色按钮</Button>
                    <Button class="text-red-500 border-red-400 disabled:text-red-300 disabled:border-red-200 enabled:hover:bg-red-500 enabled:hover:border-red-500 enabled:active:bg-red-600 enabled:active:border-red-600">红色按钮</Button>
                    <Button disabled class="text-red-500 border-red-400 disabled:text-red-300 disabled:border-red-200 ">红色按钮禁用</Button>
                </div>

                <div>
                    <Button class="disabled:text-orange-300 disabled:border-orange-200 enabled:hover:bg-orange-500 enabled:hover:border-orange-500 enabled:active:bg-orange-600 enabled:active:border-orange-600">橙色按钮</Button>
                    <Button class="text-orange-500 border-orange-400 disabled:text-orange-300 disabled:border-orange-200 enabled:hover:bg-orange-500 enabled:hover:border-orange-500 enabled:active:bg-orange-600 enabled:active:border-orange-600">橙色按钮</Button>
                    <Button disabled class="text-orange-500 border-orange-400 disabled:text-orange-300 disabled:border-orange-200 ">橙色按钮禁用</Button>
                </div>

                <div>
                    <Button class="disabled:text-green-300 disabled:border-green-200 enabled:hover:bg-green-500 enabled:hover:border-green-500 enabled:active:bg-green-600 enabled:active:border-green-600">绿色按钮</Button>
                    <Button class="text-green-500 border-green-400 disabled:text-green-300 disabled:border-green-200 enabled:hover:bg-green-500 enabled:hover:border-green-500 enabled:active:bg-green-600 enabled:active:border-green-600">绿色按钮</Button>
                    <Button disabled class="text-green-500 border-green-400 disabled:text-green-300 disabled:border-green-200 ">绿色按钮禁用</Button>
                </div>
            </Card>

            <Card>
                <Title>其他组件</Title>
            </Card>
        </section>
    );
}
