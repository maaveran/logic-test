class Logic {

    questionNumberOne(numberToCheck: number) {
        if (numberToCheck < 2) {
            return false
        } else {
            for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
                if (numberToCheck % i === 0) {
                    return false
                }
            }
        }

        return true
    }

    questionNumberTwo(listOfNumber: number[]) {
        let largestNumber = listOfNumber[0];
        for (let i = 1; i < listOfNumber.length; i++) {
            if (listOfNumber[i] > largestNumber) {
                largestNumber = listOfNumber[i];
            }
        }

        return largestNumber
    }

    questionNumberThree(number: number) {
        let tmp: string = ""
        for (let i = 1; i <= number; i++) {
            let output = '';
            for (let j = 1; j <= i; j++) {
                output += j + ' ';
            }
            tmp += output + '\n'
        }

        return tmp
    }

    questionNumberFour(listOfNumber: number[]) {
        let n: number = listOfNumber.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (listOfNumber[j] > listOfNumber[j + 1]) {
                    let temp: number = listOfNumber[j];
                    listOfNumber[j] = listOfNumber[j + 1];
                    listOfNumber[j + 1] = temp;
                }
            }
        }

        return listOfNumber
    }

    questionNumberFive(rows: number, cols: number) {
        let tmp : string  = "";
        const matrix: number[][] = [];
        let counter = 1;
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = counter;
                counter++;
            }
        }

        const transposedMatrix: number[][] = [];
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j] = [];
            for (let i = 0; i < rows; i++) {
                transposedMatrix[j][i] = matrix[i][j];
            }
        }

        for (let row of transposedMatrix) {
            tmp += row.join(' ') + '\n';
        }

        return tmp
    }
}

const logic = new Logic()

//console.log(logic.questionNumberOne(2))
//console.log(logic.questionNumberTwo([11, 6, 31, 201, 99, 861, 1, 7, 14, 79]))
//console.log(logic.questionNumberThree(8))
//console.log(logic.questionNumberFour([99, 2, 64, 8, 111, 33, 65, 11, 102, 50]))
//console.log(logic.questionNumberFive(3,4))