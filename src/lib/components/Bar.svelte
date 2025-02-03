<script lang="ts">
    export let id: any;
    export let value: number;
    export let percentage: number;
    export let isCurrent: boolean;
    export let isFound: boolean;
    export let isSecondary: boolean;

    $: colour = isFound
        ? 'bg-green-500'
        : isCurrent
        ? 'bg-orange-500'
        : isSecondary
        ? 'bg-yellow-500'
        : 'bg-blue-500';
</script>

<div
    id="{id}"
     style="height: {percentage}%"
     class="h-full w-10 text-white font-semibold rounded {colour}"
>
    <p class="text-center">{value}</p>
</div>

