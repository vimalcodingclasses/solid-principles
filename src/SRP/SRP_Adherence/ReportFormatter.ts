// Responsibility: Formatting data for reports.
class ReportFormatter {
    format(employee: EmployeeData, reportType: 'csv' | 'json'): string {
        if (reportType === 'csv') {
            return `${employee.name},${employee.hoursWorked}`;
        }
        return JSON.stringify({ name: employee.name, hoursWorked: employee.hoursWorked });
    }
}