function countdown(number) {
    if (number >= 0) {
        console.log(number);
        setTimeout(function() {
            countdown(number - 1);
        }, 1000);
    };
    if (number == 0) {
        console.log("Blessed Is The Man");
        console.log("Worthy Is The Lamb");
    };
};
