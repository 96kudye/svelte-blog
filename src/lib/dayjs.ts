import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDatetime = (time: string) => dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
export const formatDate = (time: string) => dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD');
