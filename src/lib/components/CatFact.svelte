<script>
    import { getCatFactReal } from '$lib/helper.js';
    import { onMount } from 'svelte';
    let catFact = "fetching cat fact..."
    onMount(async () => {
        catFact = await getCatFactReal()
    });
</script>

<p>{catFact}</p>