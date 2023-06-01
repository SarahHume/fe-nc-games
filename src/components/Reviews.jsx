import { useEffect, useState } from "react"
import fetchReviews from "../utils/fetchData";

function Reviews() {
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
                            <h2>{review.title}</h2>
                            <img src={review.review_img_url}/>
                            </>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Reviews