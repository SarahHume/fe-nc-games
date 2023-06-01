import axios from "axios"

function fetchReviews() {

    return axios.get("https://nc-games-sarah-hume.onrender.com/api/reviews")
    .then((res) => {
        return res.data.reviews
    })
    .catch((err) => {
        console.log(err)
    })
}

export default fetchReviews