import type { Language, LocalizedString } from '@/types/content';

export function pickLocalized(field: LocalizedString, lang: Language): string {
  return field[lang] || field.en;
}

const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianDigits(input: string | number): string {
  return String(input).replace(/[0-9]/g, (d) => persianDigits[Number(d)]);
}

export function toLocaleDigits(input: string | number, lang: Language): string {
  return lang === 'fa' ? toPersianDigits(input) : String(input);
}

const jalaliMonths = [
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند',
];

const gregorianMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function gregorianToJalali(gy: number, gm: number, gd: number): [number, number, number] {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy: number;
  if (gy <= 1600) {
    jy = 621;
  } else {
    jy = 979;
  }
  gy -= gy <= 1600 ? 621 : 1600;
  const gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400) -
    80 +
    gd +
    g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  const jm =
    days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 31);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 31);
  return [jy, jm, jd];
}

export function formatDate(isoDate: string, lang: Language): string {
  const date = new Date(isoDate);
  if (lang === 'fa') {
    const [jy, jm, jd] = gregorianToJalali(
      date.getUTCFullYear(),
      date.getUTCMonth() + 1,
      date.getUTCDate()
    );
    return `${toPersianDigits(jd)} ${jalaliMonths[jm - 1]} ${toPersianDigits(jy)}`;
  }
  return `${gregorianMonths[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

export function formatYear(isoDate: string, lang: Language): string {
  const date = new Date(isoDate);
  if (lang === 'fa') {
    const [jy] = gregorianToJalali(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
    return toPersianDigits(jy);
  }
  return String(date.getUTCFullYear());
}
