import { createNewPost, fetchPost } from "../../apis/Posts";

import postActions from "./postActions";


const getPost = () => async (dispatch) => {
    try {

        const data = (await fetchPost())
        if (data.status === 200)
            dispatch({ type: postActions.FETCH, payload: data.data })
    } catch (error) {
        console.log(error)
    }
}

const createPost = (post) => async (dispatch) => {
    try {
        const response = await createNewPost(post)
        if (response.status === 200){
                console.log(response.data);
            dispatch({ type: postActions.CREATE, payload: response.data })
        }
    } catch (error) {
        console.log(error)
    }
}

export { getPost, createPost }