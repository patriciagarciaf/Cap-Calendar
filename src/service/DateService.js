export class DateService {

    constructor(){
        this._button = document.getElementsByName("");
    }
    static getMonthDays(date) {
        return [];
    }
    static addMonth(date, diff) {

        date.setMonth(date.getMonth() + diff)
        returnDateService.getDayOfMonth(date);
    }
    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }
}
