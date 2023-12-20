import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="post__form">
                <input 
                className="post__input"
                type='text'
                placeholder="What's on your mind?"
                />
            </div>
        );
    };
};

export default PostForm;