import axios from "axios"

function fetchComments(reviewId) {

    return axios.get(`https://nc-games-sarah-hume.onrender.com/api/reviews/${reviewId}/comments`)
    .then((res) => {
        return res.data.comments
    })
    .catch((err) => {
        console.log(err)
    })
}

export default fetchComments