import fetchComments from "../utils/fetchComments";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

function CommentList(reviewId) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(reviewId.reviewId)
        .then((comments) => {
            setComments(comments)
        })
        .then(() => {
            setIsLoading(false)
        })
    }, [])

    if (isLoading === true) {
        return <p>Loading comments...</p>
    } else if (comments.length === 0) {
        return <p>No comments for this review</p>
    } else {
        return (
            <div>
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return <CommentCard key={comment.comment_id} com={comment}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList