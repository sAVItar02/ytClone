const API_KEY = "AIzaSyAtDYd6GfrFXAcUSa2j4-O_5avs5zeTBrQ";

export const MOST_POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=" + API_KEY;

export const GET_CHANNEL_BY_ID = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const GET_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";