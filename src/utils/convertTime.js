export const calculateTime = (publishedAt) => {
    const pubAt = new Date(publishedAt);
    const timeElapsed =  Date.now() - pubAt;
    switch(timeElapsed.toString().length) {
        case 6:
        case 7:
        case 8:
            return `${Math.floor(timeElapsed/(1000 * 60 * 60))} hours ago`
        case 9: 
            return `${Math.floor(timeElapsed/(1000 * 60 * 60 * 24))} day/s ago`
        default: 
            return `${pubAt.toLocaleString('default', {month: 'long'})} ${pubAt.getDate()}`
    }
}