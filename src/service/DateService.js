class DateService{
    getMonthDays(date){
        return [ ];
    }

    addMonth(date, diff){

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
}