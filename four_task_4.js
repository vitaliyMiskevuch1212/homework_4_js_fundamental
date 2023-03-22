(function (){
    class MonthException extends Error {
        constructor(message) {
            super(message);
            this.name = "MonthException";
        }
    }
    function showMonthName(month){
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "Juli",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]

        if(month < 1 || month > 12){
            throw new MonthException("Incorrect month number!!!")
        } return monthNames[month - 1];
    }
    try{
        console.log(showMonthName(5));
        console.log(showMonthName(1));
        console.log(showMonthName(33));

    }catch (e) {
        console.log(`${e.name} ${e.message}`);
    }
})()