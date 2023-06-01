import { useEffect, useState } from "react"

function Reviews() {
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        fetch("https://nc-games-sarah-hume.onrender.com/api/reviews")
        .then((res) => {
            return res.json();
        })
        .then(({reviews}) => {
            setReviewList([...reviews])
        })
    }, [])
    
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

export default Reviews