<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  //   尺寸和边距
  export let width = 640;
  export let height = 600;
  export let marginTop = 20;
  export let marginRight = 20;
  export let marginBottom = 30;
  export let marginLeft = 40;

  let svg: SVGSVGElement;

  onMount(() => {
    /**
     * 创建上坐标轴
     * topX 是数据
     * 根据数据挂载到g标签上，通过transform定位g的位置
     */
    const topX = d3
      .scaleLinear()
      .domain([0, 50])
      .range([marginLeft, width - marginRight]);

    d3.select(svg)
      .append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(d3.axisTop(topX));

    // 创建下坐标轴
    const bottomX = d3
      .scaleLinear()
      .domain([50, 100])
      .range([marginLeft, width - marginRight]);

    d3.axisBottom(bottomX)(
      d3
        .select(svg)
        .append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
    );
  });
</script>

<svg {height} {width} bind:this={svg} class="border"></svg>
