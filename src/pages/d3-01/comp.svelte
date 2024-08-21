<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";

  // Declare the chart dimensions and margins.
  //   尺寸和边距
  export let width = 640;
  export let height = 600;
  export let marginTop = 20;
  export let marginRight = 20;
  export let marginBottom = 30;
  export let marginLeft = 40;

  let svg: SVGSVGElement;

  onMount(() => {
    const topX = d3
      .scaleLinear()
      .domain([0, 50])
      .range([marginLeft, width - marginRight]);

    const bottomX = d3
      .scaleLinear()
      .domain([50, 100])
      .range([marginLeft, width - marginRight]);

    d3.select(svg)
      .append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(d3.axisTop(topX));

    d3.select(svg)
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisTop(bottomX));

    /**
     * const pos = d3
      .select(svg)
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`);

    d3.axisBottom(x)(pos);
    */
  });
</script>

<svg {height} {width} bind:this={svg} class="border"></svg>
