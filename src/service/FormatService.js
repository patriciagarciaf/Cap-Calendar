class FormatService{
    static getTime(date){
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
          
        const formatter = new Intl.DateTimeFormat('es-ES', {
            timeZone: 'Europe/Madrid', ...timeOptions
        });
        return formatter.format(date);
    }

    static getDate(date){
        const formatter = new Intl.DateTimeFormat('es-ES',{dateStyle: 'full'});
        return formatter.format(date);
    }

    static getMonth(date){
        const formatter = new Intl.DateTimeFormat('es-ES',{year: 'numeric', month: 'long'});
        return formatter.format(date);
    }
}