/*You’re given two integers x and y as (x1, x2) and (y1, y2). An integer range is a list of numbers. The x range includes every number from x1 to x2 (inclusive). Similarly, the y range includes every number from y1 to y2. 
Return the sum of the numbers that only exist in both ranges.
A function call of sum_matching_range(1,10,5,20) -> returns 45

For x1,x2,y1,y2 return a sum of x y occurring in both ranges.
If (1,10,5,20), then 5+6+7+8+9+10=45*/

function sum_matching_range(x1, x2, y1, y2) {
    var sum = 0;
    for ( x1; x1 < x2; x1++){
        for (y1; y1 < y2; y1++){
            if(x1==y1){
                sum+=x1;
            }
        }
    }
   
    console.log(sum);
}
