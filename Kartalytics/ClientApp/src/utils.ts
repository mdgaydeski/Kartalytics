﻿import { format } from 'date-fns';
import { MatchRaceResult, TrackStatsRowType } from './constants/types';

export const compare = (a: TrackStatsRowType, b: TrackStatsRowType, sortAscending: boolean, property: string, index?: number) => {
    if (property === 'assetName') {
        return sortAscending ? compareTrackRowsByHeader(a, b) : compareTrackRowsByHeader(b, a);
    }

    let objA = index !== undefined ? a[property][index] : a[property];
    let objB = index !== undefined ? b[property][index] : b[property];
    if (objA === objB) {
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

export const getProgressivePointTotals = (results: MatchRaceResult[]) => {
    return results.reduce((acc, r, i) => {
        acc.push(4 - r.place + acc[i]);
        return acc;
    }, [0])
}

export const getVideoUrl = (host: string, url: string) => {
    if (host === 'YouTube') {
        return `https://youtube.com/watch?v=${url}`;
    } else if (host === 'Twitch') {
        return `https://twitch.tv/videos/${url}`;
    }
}

export const sum = (array: number[]) => array.reduce((acc, val) => acc + val, 0);

export const sumOfResults = (array: number[]) => array.reduce((acc, val, i) => acc + (val * (i + 1)));

export const xor = (a: boolean, b: boolean) => a ? !b : b;