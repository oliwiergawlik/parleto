const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function getFirstSunday(year, month){
    const yearNum = parseInt(year);
    const monthNum = parseInt(month);
    
    const firstDay = new Date(yearNum, monthNum - 1, 1);
    const firstSunday = new Date(yearNum, monthNum - 1, 1 + (7 - firstDay.getDay()) % 7);

    return firstSunday.getDate();
}

function getExpenses(expenses) {
    let expArr = [];
    for (const category in expenses) {
        expArr = expArr.concat(expenses[category])
    }
    
    return expArr;
}


function solution(expenses){
    const result = {};
    
    for (const date in expenses){
        const [year, month] = date.split('-');
        const firstSunday = getFirstSunday(year, month);

        let allExpenses = [];

        for (const day in expenses[date]) {
            if (Number(day) <= firstSunday) {
                allExpenses = allExpenses.concat(getExpenses(expenses[date][day]))
            }
        }
    }
    
    return result;
}

console.log(solution(expenses))
