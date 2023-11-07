import { DateTimeString } from "../helper/datetime";

export function _currentDatetime(): DateTimeString {
    return new Date().toISOString();
}