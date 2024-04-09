export function formatQuery(q) {
    const qWords = q.split(' ');
    return qWords.filter(word => word).join('%20');
}

export function getImageUrl(backdropPath) {
    return `https://image.tmdb.org/t/p/w500/${backdropPath}`;
}
