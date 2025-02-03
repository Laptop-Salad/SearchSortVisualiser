import {writable} from 'svelte/store';

export const currIndex = writable(0);
export const found = writable(-500);
export const secondaryIndex = writable(0);
export const items = writable([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);