import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    console.log(props.match.params.topic)
    return(
        <>
            <div className="panel panel-info">
                <div className="panel-heading">
                    {props.match.params.topic} Details
                </div>
                <div className="panel-body">
                    <h2>{props.match.params.topic} Details Page</h2>
                    <p>
                        {props.match.params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <h2>You are on page number {props.location.search.split('=')[1]}</h2>
                </div>
            </div>
        </>
    )
}

export default PostDetails;