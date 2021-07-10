import { format } from 'date-fns';

export const formatDate = (date: string) => {
    return date
        ? format(new Date(`${date} 00:00:00`), 'dd MMM yyyy')
        : 'Date unknown'
}

export const getPlaceTotals = (resultsArray: number[]) => {
    return resultsArray.reduce((acc, res) => {
        acc[res - 1]++;
        return acc;
    }, [0, 0, 0, 0]);
}

export const getPoints = (placeTotals: number[]) => {
    return placeTotals.reduce((acc, place, i) => {
        return acc + ((3 - i) * place);
    }, 0);
}