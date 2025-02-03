import {currIndex, found} from "../../store";
import delay from "$lib/algorithms/delay";

export default async function linearSearch(items: any, toFind: number) {
    for (let i = 0; i < items.length; i++) {
        currIndex.set(i);

        if (items[i] === toFind) {
            found.set(i);
            return i;
        }

        await delay(500);
    }
}