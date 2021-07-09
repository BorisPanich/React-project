import React from 'react';
import { v1 } from 'uuid';
import { addPostAC, deletePost, profileReducer } from './profileReducer';
import { PostType } from './redux-store';

let state = {
    posts: [
        {id: v1(), message: 'Hallo, haw are you?', likes: 43},
        {id: v1(), message: 'My first post', likes: 52}
    ] as Array<PostType>,
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: '' as string || null,
            large: '' as string | null
        }
    },
    status: ''
}

// test('length of posts should be incremented', () => {
//     // start data
//     let action = addPostAC('it-kamasutra.com')
//
//     // action
//     let newState = profileReducer(state, action)
//
//     //expectation
//     expect(newState.posts.length).toBe(3)
// })

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})