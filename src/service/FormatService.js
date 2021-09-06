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
}