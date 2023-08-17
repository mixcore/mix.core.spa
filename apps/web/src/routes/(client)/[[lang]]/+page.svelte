<script lang="ts">
  import { MyCounterButton } from 'ui';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data);
</script>

{#each data.response.items as item}
  <a href="/post/{item.seoName}"><h1>{@html item.title}</h1></a>
{/each}

<!-- <h1 class="h1 underline">Web</h1>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
