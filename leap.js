let year = prompt("Enter the year to check for");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("year " + year + " is a leap year");
}
else {
    console.log("year " + year + " is not a leap year");
}
