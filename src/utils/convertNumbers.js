export const convertNumbers = (num) => {
    switch (num.toString().length) {
        case 4:
        case 5:
        case 6: 
            return `${(num/1000).toFixed(0)}K views`
        case 7:
        case 8:
            return  `${(num/1000000).toFixed(1)}M views`
        default: 
            return `${num} views`
    }
}