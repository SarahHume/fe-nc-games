import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fetchReviews from "../utils/fetchReviews";

function ReviewList() {
    const [reviewList, setReviewList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReviews()
        .then((reviews) => {
            setReviewList([...reviews])
        })
        .then(() => {
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading === true) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <ul>
                    {reviewList.map((review) => {
                        return <li key={review.review_id}>
                            <>
                            <h2><Link to= {`/reviews/${review.review_id}`}>{review.title}</Link></h2>
                            <img src={review.review_img_url}/>
                            </>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ReviewList