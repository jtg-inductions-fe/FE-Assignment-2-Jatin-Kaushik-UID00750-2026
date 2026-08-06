import { DAYS_OF_WEEK } from '@constant';
import { DayHours } from '@types';

/**
 * Converts a "HH:MM" string format into a comparable numeric minute integer
 */
const parseTimeToMinutes = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
};

/**
 * Computes whether a restaurant is closed right now
 */
export const checkIsRestaurantClosed = (
    operatingHours: DayHours[],
): boolean => {
    const now = new Date();

    const daysMap = Object.values(DAYS_OF_WEEK);
    const currentDayName = daysMap[(now.getDay() + 6) % 7];

    const todaysSchedule = operatingHours.find(
        (h) => h.day.toLowerCase() === currentDayName.toLowerCase(),
    );

    // Default to closed if no schedule matches or if explicitly marked as closed
    if (!todaysSchedule || todaysSchedule.isClosed) {
        return true;
    }

    // Optional safety check
    if (!todaysSchedule.openTime || !todaysSchedule.closeTime) {
        return true;
    }

    // Calculate current time metrics in minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = parseTimeToMinutes(todaysSchedule.openTime);
    const closeMinutes = parseTimeToMinutes(todaysSchedule.closeTime);

    // Standard business hours logic within the same day block
    if (closeMinutes > openMinutes) {
        return currentMinutes < openMinutes || currentMinutes > closeMinutes;
    }

    // Overnight hours logic (e.g., Open 18:00 to 02:00 next day)
    return currentMinutes < openMinutes && currentMinutes > closeMinutes;
};
