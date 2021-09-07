class DateService {
    static getMonthDays(date) {
        return [];
    }

    static addMonth(date, diff) {

    }
    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
}