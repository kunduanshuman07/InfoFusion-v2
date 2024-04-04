export const formatDateAndTime = (timestamp: any) => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate: string = new Intl.DateTimeFormat('en-IN', options).format(date);
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';
    const formattedTime: string = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    const formattedDateWithSuffix: string = `${formattedDate}`;
    const finalFormattedDateTime: string = `${formattedDateWithSuffix} ${formattedTime}`;
    return finalFormattedDateTime;
}
