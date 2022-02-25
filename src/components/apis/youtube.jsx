import axios from "axios";
const KEY = 'AIzaSyB-EKLXlO75edFfdpm7QX0yx8llpk7DAxc';
export default axios.create(
   {
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:49,
        key:KEY 

    }
   }
)