<script lang="ts">
    export let id;
    export let label;

    let visible: boolean = false;

    function toggleVisible() { visible = !visible; }
</script>

<div class="relative">
    <button id="{id}" on:click="{toggleVisible}" data-dropdown-toggle="dropdown" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        {label}
        <i class="fa-solid {visible ? 'fa-caret-up' : 'fa-caret-down'} ms-2"></i>
    </button>

    {#if visible}
        <div class="absolute z-10 mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="{id}">
                <slot></slot>
            </ul>
        </div>
    {/if}
</div>