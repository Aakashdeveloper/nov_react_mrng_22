import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom'


const PostDetails = (props) => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    
    return(
        <>
            <div className="panel panel-info">
                <div className="panel-heading">
                    {params.topic} Details
                </div>
                <div className="panel-body">
                    <h2>{params.topic} Details Page</h2>
                    <p>
                        {params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h2>You are on page number {searchParams.getAll('page')}</h2>
                </div>
            </div>
        </>
    )
}

export default PostDetails;