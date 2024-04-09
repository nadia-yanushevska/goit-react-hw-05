export function formatQuery(q) {
    const qWords = q.split(' ');
    return qWords.filter(word => word).join('%20');
}

export function getImageUrl(backdropPath) {
    return `https://image.tmdb.org/t/p/w500/${backdropPath}`;
}

export function getCommentDate(fullDate) {
    return fullDate.slice(0, fullDate.indexOf('T'));
}

export function getCommentTime(fullDate) {
    return fullDate.slice(fullDate.indexOf('T') + 1, fullDate.lastIndexOf(':'));
}
