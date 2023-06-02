import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getReview from "../utils/getReview"
import CommentList from "./CommentList"

function Review() {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { reviewId } = useParams()

    useEffect(() => {
        getReview(reviewId)
        .then((review) => {
            setReview(review)
        })
        .then(() => {
            setIsLoading(false)
        })
    }, [reviewId])

    if (isLoading === true) {
        return <p>Loading review...</p>
    } else {
        return (
            <div>
                <h2>{review.title}</h2>
                <img src={review.review_img_url}/>
                <h3>Game by {review.designer}</h3>
                <h4>Author: {review.owner}</h4>
                <p>{review.review_body}</p>
                <h3>Comments:</h3>
                <CommentList reviewId={reviewId}/>
            </div>
        )
    }
}

export default Review