// @ts-ignore
import moment from "moment";

export function formatDate(date: Date): string {
  return moment(date).format("MMM D, YYYY");
}
