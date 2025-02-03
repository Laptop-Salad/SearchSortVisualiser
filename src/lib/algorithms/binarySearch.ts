import {currIndex, found} from "../../store";
import delay from "$lib/algorithms/delay";

export default async function binarySearch(items: any, toFind: number) {
    let low = 0;
    let high = items.length - 1;
    let mid;

    let midItem;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);
        midItem = items[mid];

        currIndex.set(mid);

        // found element at middle
        if (midItem === toFind) {
            found.set(mid);
            return mid;
        }

        if (midItem > toFind) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

        await delay(500);
    }

    return -1;
}