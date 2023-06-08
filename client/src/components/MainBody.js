import React from 'react';

export default function MainBody() {

    //don't forget to properly hook this up with the DB later. This is just for styling purposes
    const posts = ['placeholder1', 'placeholder2', 'placeholder3']

    return (
        <div>
        <div>
            <button id='newPost'>Create Post</button>
        </div>

        <ul id='postList'>
            {posts.map((post) => (
                <li className='posts'>{post}</li>
            ))}
        </ul>

        </div>
    )
}