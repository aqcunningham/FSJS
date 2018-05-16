// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```

const attendanceCheck = (dayWeek) => {
    let newArr = [];
    for (let i = 0; i < classRoom.length; i++){
        const currStudent = classRoom[i];

        const studentName = (Object.keys(currStudent)[0]);

        const studetnAttendanceArray = currStudent[studentName];

        for (let j = 0; j < studetnAttendanceArray.length; j++){
            const dayObj = studetnAttendanceArray[j];

            const nameOfDay = Object.keys(dayObj)[0];
            const presentDay = dayObj[nameOfDay];

            if (nameOfDay === dayWeek && presentDay) newArr.push(studentName);
        }
    }
    return newArr;
}

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
