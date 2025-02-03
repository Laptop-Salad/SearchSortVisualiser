import {currIndex, secondaryIndex, items} from "../../store";
import delay from "$lib/algorithms/delay";

export default async function insertionSort(arr: any) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            currIndex.set(j);
            secondaryIndex.set(j + 1);

            arr[j + 1] = arr[j];
            items.update((items) => {
                items[j+1] = arr[j+1];
                return items;
            })

            j = j - 1;

            await delay(500);
        }

        arr[j + 1] = key;
        items.update((items) => {
            items[j+1] = arr[j+1];
            return items;
        })
    }
}