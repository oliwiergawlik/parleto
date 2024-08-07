const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
};

function getFirstSunday(year, month){
    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10) - 1;
    
    const firstDay = new Date(yearNum, monthNum, 1);
    const firstSunday = new Date(yearNum, monthNum, 1 + (7 - firstDay.getDay()) % 7);

    return firstSunday.getDate();
}

function getMedian(numbers) {
    if (!Array.isArray(numbers)) numbers = Object.values(numbers);
    if (numbers.length === 0) return 0;
    
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    const middle = Math.floor(n / 2);

    return n % 2 === 0
        ? (numbers[middle - 1] + numbers[middle]) / 2
        : numbers[middle];
}

function solution(expenses){
    const result = {};
    
    for (const date in expenses){
        const [year, month] = date.split('-');
        const firstSunday = getFirstSunday(year, month);

        let dateExpenses = [];

        for (const day in expenses[date]) {
            if (Number(day) <= firstSunday) {
                for (const category in expenses[date][day]) {
                    dateExpenses = dateExpenses.concat(expenses[date][day][category]);
                }
            }
        }

        result[date] = getMedian(dateExpenses);
    }
    
    return getMedian(result);
}

console.log(solution(expenses));
