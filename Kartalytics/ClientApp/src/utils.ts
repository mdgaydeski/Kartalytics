import { format } from 'date-fns';

export const formatDate = (date: string) => {
    return date
        ? format(new Date(`${date} 00:00:00`), 'dd MMM yyyy')
        : 'Date unknown'
}

export const sum = (array: number[]) => array.reduce((acc, val) => acc + val, 0);