class DateProvider {
    static monthNames = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];

    constructor(timestamp) {
        this.timestamp = timestamp;
        this.date = new Date(timestamp);
    }

    getMonthString() {
        return DateProvider.monthNames[this.date.getMonth()];
    }

    toReadableDate() {
        return `${this.getMonthString()} ${this.date.getDay()}, ${this.date.getFullYear()}`;
    }
}

export default DateProvider;
    
