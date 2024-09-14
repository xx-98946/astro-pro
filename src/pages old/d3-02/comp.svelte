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
    const leftY = d3
      .scaleLinear()
      .domain([0, 50])
      .range([height - marginBottom, marginTop]);

    d3.select(svg)
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(leftY));

    const rightY = d3
      .scaleLinear()
      .domain([50, 100])
      .range([height - marginBottom, marginTop]);

    d3.select(svg)
      .append("g")
      .attr("transform", `translate(${width -  marginLeft},0)`)
      .call(d3.axisRight(rightY));
  });
</script>

<svg {height} {width} bind:this={svg} class="border"></svg>
