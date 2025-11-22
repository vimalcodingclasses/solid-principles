// Responsibility: Calculating pay.
class PayCalculator {
    calculatePay(employee: EmployeeData, rate: number): number {
        // Focused logic for pay calculation...
        return employee.hoursWorked * rate * 0.9;
    }
}