<script lang="ts">
     import Dropdown from "$lib/components/dropdown/Dropdown.svelte";
     import Item from "$lib/components/dropdown/Item.svelte";
     import Bar from "$lib/components/Bar.svelte";
     import Separator from "$lib/components/Separator.svelte";
     import Button from "$lib/components/Button.svelte";

     import {currIndex, found, secondaryIndex, items} from "../store";

     import linearSearch from "$lib/algorithms/linearSearch";
     import binarySearch from "$lib/algorithms/binarySearch";
     import bubbleSort from "$lib/algorithms/bubbleSort";
     import mergeSort from "$lib/algorithms/mergeSort";
     import insertionSort from "$lib/algorithms/insertionSort";

     let type: string = "sort";
     let algo: string = "insertion";
     let toFind = 3;

     function setAlgo(new_type: string, new_algo: string) {
         reset();

         type = new_type;
         algo = new_algo;
     }

     function capitaliseFirst(text: string) {
         return text.charAt(0).toUpperCase() + text.slice(1);
     }

     /**
      * Durstenfeld Shuffle
      */
     function randomise() {
         for (let i = $items.length - 1; i >= 0; i--) {
             const newPos = Math.floor(Math.random() * (i + 1));
             let temp = $items[i];

             $items[i] = $items[newPos];
             $items[newPos] = temp;
         }
     }

     function resetItems() {
         $items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
     }

     function reset() {
         currIndex.set(0);
         secondaryIndex.set(0);
         found.set(-500);
     }

     function doAlgo() {
         reset();

         if (type === "search") {
             doSearch();
         } else {
             doSort();
         }
     }

     function doSort() {
         switch (algo) {
             case "bubble":
                 bubbleSort($items);
                 break;
             case "merge":
                 mergeSort($items);
                 break;
             case "insertion":
                 insertionSort($items);
                 break;
         }
     }

     function doSearch() {
         switch (algo) {
             case "linear":
                 linearSearch($items, toFind);
                 break;
             case "binary":
                 resetItems()
                 binarySearch($items, toFind);
                 break;
         }
     }
</script>

<div class="h-20 p-5">
    <h1 class="font-semibold text-xl">{capitaliseFirst(algo)} {capitaliseFirst(type)}</h1>
</div>

<div class="p-5 flex space-x-2">
    <Dropdown id="searchAlgos" label="Search algorithms">
        <Item action={() => setAlgo('search', 'binary')} name="Binary Search" />
        <Item action={() => setAlgo('search', 'linear')} name="Linear Search" />
    </Dropdown>

    <Dropdown id="sortingAlgos" label="Sorting algorithms">
        <Item action={() => setAlgo('sort', 'merge')} name="Merge Sort" />
        <Item action={() => setAlgo('sort', 'insertion')} name="Insertion Sort" />
        <Item action={() => setAlgo('sort', 'bubble')} name="Bubble Sort" />
    </Dropdown>

    <Separator />

    <Button action={() => randomise()}>
        Randomise
        <i class="fa-solid fa-shuffle ms-2"></i>
    </Button>

    <Button action={() => doAlgo()}>
        {capitaliseFirst(type)}
        <i class="fa-solid fa-circle-play ms-2"></i>
    </Button>
</div>

<div class="flex mt-20 space-x-2 h-[50vh] items-end justify-center">
    {#each $items as i, index}
        <Bar
            id={i}
            value={i}
            percentage={(i/20) * 100}
            isCurrent={$currIndex === index}
            isFound={$found === index}
            isSecondary={$secondaryIndex === index}
        />
    {/each}
</div>