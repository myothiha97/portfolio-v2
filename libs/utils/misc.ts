import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";
export type Year = `${number}${number}${number}${number}`;
export type DateRangeFormat = `${Month}/${Year} - ${Month}/${Year}`;

export const getTotalWorkExperience = (
  dateString: DateRangeFormat,
  isPresent?: boolean
): string => {
  const [startStr, endStrRaw] = dateString.split(" - ");
  const endStr = isPresent ? dayjs().format("MM/YYYY") : endStrRaw;

  const startDate = dayjs(startStr, "MM/YYYY");
  const endDate = dayjs(endStr, "MM/YYYY");

  const totalMonths = endDate.diff(startDate, "month") + 1;

  if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths > 1 ? "s" : ""}`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) {
    result += ` ${months} month${months > 1 ? "s" : ""}`;
  }

  return result;
};
