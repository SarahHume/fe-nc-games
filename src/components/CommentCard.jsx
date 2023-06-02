import { useEffect, useState } from "react";

function CommentCard({com}) {
    return (
        <li>
            <h4>{com.author}</h4>
            <p>{com.body}</p>
            <p>Votes: {com.votes}</p>
        </li>
    )
}

export default CommentCard