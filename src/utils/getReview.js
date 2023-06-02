import axios from "axios"

function getReview(reviewId) {

    return axios.get(`https://nc-games-sarah-hume.onrender.com/api/reviews/${reviewId}`)
    .then((res) => {
        return res.data.review
    })
    .catch((err) => {
        console.log(err)
    })
}

export default getReview