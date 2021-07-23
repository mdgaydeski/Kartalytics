import { format } from 'date-fns';
import { TrackStatsRowType } from './constants/types';

export const compare = (a: TrackStatsRowType, b: TrackStatsRowType, sortAscending: boolean, property?: string, index?: number) => {
    let objA = property !== undefined ? index !== undefined ? a[property][index] : a[property] : a;
    let objB = property !== undefined ? index !== undefined ? b[property][index] : b[property] : b;
    if (objA === objB || property === undefined) {
        return compareTrackRowsByHeader(a, b)
    }
    return sortAscending ? objA - objB : objB - objA;
}

export const compareTrackRowsByHeader = (a: TrackStatsRowType, b: TrackStatsRowType) => {
    if (a.assetType === 'player' && b.assetType === 'player') {
        const nameA = a.assetName.toLowerCase();
        const nameB = b.assetName.toLowerCase();
        return nameA === nameB ? a.assetId - b.assetId : nameA > nameB ? 1 : -1;
    }
    return a.assetId - b.assetId;
}

export const formatDate = (date: string) => {
    return date
        ? format(new Date(`${date} 00:00:00`), 'dd MMM yyyy')
        : 'Date unknown'
}

export const sum = (array: number[]) => array.reduce((acc, val) => acc + val, 0);

export const sumOfResults = (array: number[]) => array.reduce((acc, val, i) => acc + (val * (i + 1)));