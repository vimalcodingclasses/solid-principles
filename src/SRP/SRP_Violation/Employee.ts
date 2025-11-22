class Employee {
    constructor(public name: string, public hoursWorked: number) { }

    // RESPONSIBILITY 1: Business Logic (Calculation)
    calculatePay(rate: number): number {
        // Logic for complex pay calculation...
        return this.hoursWorked * rate * 0.9; // 90% after tax
    }

    // RESPONSIBILITY 2: Persistence (Data Management)
    saveToDatabase(): void {
        // Logic to open connection, format SQL, and save data...
        console.log(`Saving ${this.name} data to SQL database...`);
    }

    // RESPONSIBILITY 3: Presentation (Formatting/Reporting)
    formatReport(reportType: 'csv' | 'json'): string {
        if (reportType === 'csv') {
            return `${this.name},${this.hoursWorked}`;
        }
        return JSON.stringify({ name: this.name, hoursWorked: this.hoursWorked });
    }
}