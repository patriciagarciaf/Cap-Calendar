class DateService {
    static getMonthDays(date) {
        return [];
    }

    static addMonth(date, diff) {

    }


    timer();
daysWeek();

timer(date){

    return new Intl.DateTimeFormat('en-GB', {dateStyle: 'full'}).format(date);
}

daysWeek(){

    for (let i = 0; i < DAYSOFWEEK.length(); i++)
		{
			return DAYSOFWEEK[i] + "  ";
		}
}

    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() == today.getFullYear()
    }

}