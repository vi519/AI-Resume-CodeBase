const currentDate = new Date(); // Creates a new Date object representing the current date and time
export const currentYear = currentDate.getFullYear();
export function formatDateToMonthYear(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // Handle invalid date
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }