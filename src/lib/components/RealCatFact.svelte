<script>
    import { getCatFactReal } from '$lib/helper.js';
    import { onMount } from 'svelte';
    let catFact = "";
    let catFactStatus = "fetching cat fact..."
    onMount(async () => {
        catFact = await getCatFactReal()
        catFactStatus = "cat fact has arrived!"
    });
</script>
<p>{catFactStatus}</p>
<p>{catFact}</p>