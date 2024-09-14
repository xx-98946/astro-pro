import Title from "@/components/Title";
import Card from "@/components/Card";
import Button from "@/components/Button";
export default function Page() {
    const handleClick = () => {
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

                <Button onClick={handleClick}>按钮</Button>
                <Button class="text-blue-600 border-blue-400 hover:text-white hover:bg-blue-600 hover:border-transparent">按钮</Button>

                <Button class="text-white bg-blue-600 border-transparent hover:text-white hover:bg-blue-700 hover:shadow-xl">按钮</Button>
            </Card>
        </section>
    );
}
