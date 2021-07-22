import { format } from 'date-fns';
import { TrackStatsRowType } from './constants/types';

export const compareAscending = (a: any, b: any) => a - b;

export const compareDescending = (a: any, b: any) => b - a;

export const compareTrackRowsByName = (a: TrackStatsRowType, b: TrackStatsRowType) => {
    const nameA = a.assetName.toLowerCase();
    const nameB = b.assetName.toLowerCase();
    return nameA === nameB ? a.assetId - b.assetId : nameA > nameB ? 1 : -1;
}

export const formatDate = (date: string) => {
    return date
        ? format(new Date(`${date} 00:00:00`), 'dd MMM yyyy')
        : 'Date unknown'
}

export const sum = (array: number[]) => array.reduce((acc, val) => acc + val, 0);

export const sumOfResults = (array: number[]) => array.reduce((acc, val, i) => acc + (val * (i + 1)));