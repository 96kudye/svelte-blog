import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDatetime = (time: string) => dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
export const formatDate = (time: string) => dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD');
export const toUnix = (time: string) => dayjs.utc(time).tz('Asia/Tokyo').unix();
export const toISO8601 = (unixtime: number) => dayjs.unix(unixtime).utc().toISOString();
