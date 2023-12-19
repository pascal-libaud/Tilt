import { DateTimeString } from "../domain/datetime";

export function _currentDatetime(): DateTimeString {
    return new Date().toISOString();
}