<script lang="ts">
    export let href: null|string = null;
    export let action: any = null;
    export let name: string;
</script>

<li>
    {#if href !== null}
        <a href="{href}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {name}
        </a>
    {:else}
        <button on:click="{action}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {name}
        </button>
    {/if}
</li>
