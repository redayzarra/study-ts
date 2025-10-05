// We can define the input and the output of the function
function calculateTax(income: number, taxYear: number = 2023): number {
    if (taxYear > 2023) {
        return income;
    }
    return income * 1.2;
}

calculateTax(10_000);

