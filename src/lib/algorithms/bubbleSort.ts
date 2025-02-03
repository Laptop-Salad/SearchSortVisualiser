import {currIndex, secondaryIndex, items} from "../../store";
import delay from "$lib/algorithms/delay";

export default async function bubbleSort(arr: any) {
    let i: number;
    let j: number;
    let temp: number;
    let swapped: boolean;

    for (i = 0; i < arr.length; i++) {
        swapped = false;

        for (j = 0; j < arr.length; j++) {
            currIndex.set(j);
            secondaryIndex.set(j+1);

            if (arr[j] > arr[j + 1]) {
                temp = arr[j];

                arr[j] = arr[j + 1];
                items.update((items) => {
                    items[j] = arr[j];
                    return items;
                })

                arr[j + 1] = temp;
                items.update((items) => {
                    items[j + 1] = temp;
                    return items;
                })

                swapped = true;
            }

            await delay(100);
        }

        if (!swapped) { break; }
    }
}