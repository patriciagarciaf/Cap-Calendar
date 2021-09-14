export class DateService {

    static getMonthDays(date) {
        function calendarMonth(date) {
            let calendar = [];
            const firstDayCalendar = getFirstDayCalendar(date);
            let i = 1;
            for (i = 0; i < 42; i++) {
                let fecha = new Date(firstDayCalendar);
                calendar.push({ date: fecha, 
                                isToday: DateService.isToday(firstDayCalendar, new Date()), 
                                isThisMonth: DateService.isThisMonth(firstDayCalendar, date), 
                                isSelected: false });
                firstDayCalendar.setDate(firstDayCalendar.getDate() + 1);
            }
            return calendar;
        }
        function getFirstDayCalendar(date) {
            let firstDay = new Date(date);
            firstDay.setDate(1);
            while (firstDay.getDay() != 1) { 
                firstDay.setDate(firstDay.getDate() - 1); 
            }
            return firstDay;
        }
        return calendarMonth(date);
    }
    static isThisMonth(date, today) {
        return date.getMonth() === today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
}
