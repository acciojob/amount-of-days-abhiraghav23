function daysOfAYear(year){
        if ((year % 4==0 && year % 100 !=0 )||(year % 400===0)){
			return 365;
		}
	else{
         return 366;
	}
}
console.log(daysOfAYear(2022));
console.log(daysOfAYear(2024));
console.log(daysOfAYear(1900));
console.log(daysOfAYear(2000));

