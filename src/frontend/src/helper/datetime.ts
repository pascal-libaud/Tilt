export type DateTimeString = string;

export let currentDateTime: () => DateTimeString;

export function setCurrentDateTime(c: () => DateTimeString) {
    currentDateTime = c;
}
