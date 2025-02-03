import {currIndex, secondaryIndex, items} from "../../store";
import delay from "$lib/algorithms/delay";

async function merge(arr: any, left: number, mid: number, right: number) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    const leftArr = new Array(n1);
    const rightArr = new Array(n2);

    // fill left and right arr
    for (let i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
    }

    for (let i = 0; i < n1; i++) {
        rightArr[i] = arr[mid + 1 + i];
    }

    let i = 0, j = 0;
    let k: number = left;

    // merge arrays back together
    while (i < n1 && j < n2) {
        currIndex.set(i);
        secondaryIndex.set(j);

        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }

        items.update((items) => {
            items[k] = arr[k];
            return items;
        })

        await delay(100);
        k++;
    }

    // put remaining elements in if there is any
    while (i < n1) {
        arr[k] = leftArr[i];

        items.update((items) => {
            items[k] = arr[k];
            return items;
        })

        i++;
        k++;
    }

    // put remaining elements in if there is any
    while (j < n2) {
        arr[k] = rightArr[j];

        items.update((items) => {
            items[k] = arr[k];
            return items;
        })

        j++;
        k++;
    }
}

async function sort(arr: number, left: number, right: number) {
    if (left >= right) { return; }

    const mid = Math.floor(left + (right - left) / 2);
    await sort(arr, left, mid);
    await sort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
}

export default async function mergeSort(arr: any) {
    await sort(arr, 0, arr.length - 1);
}