/*Write a method to return the degrees of the angle formed by the two hands of the clock at any given time,to the nearest 
integer.*/

function clock_angles (hour, minute){
	var angl = Math.abs(hour-minute)*30;
if(angl>180){
return (360-angl)}
else {
return angl;

	}
}
