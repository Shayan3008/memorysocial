import React, { useState } from 'react'
import { Typography, Paper, Button, TextField } from '@material-ui/core';
import useStyleForm from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/post';
export default function Form() {
    const style = useStyleForm();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '', title: '', selectedFile: '', tag: '', message: ''
    })
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(postData);
        dispatch(createPost(postData))
        // clear()
    }

    const clear = () => setPostData({
        creator: '', title: '', selectedFile: '', tag: '', message: ''
    })
    return (
        <Paper className={style.paper}>
            <form autoComplete='off' noValidate className={`${style.form} ${style.root}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Memories Creator</Typography>
                <TextField name='creator' label='creator' variant='outlined' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name='title' label='title' variant='outlined' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name='tag' label='tag' variant='outlined' fullWidth value={postData.tag} onChange={(e) => setPostData({ ...postData, tag: e.target.value })} />
                <TextField name='message' label='message' variant='outlined' fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <div className={style.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => { 
                            setPostData({ ...postData, selectedFile: base64}) }}
                    />
                </div>
                <Button className={style.buttonSubmit} size='large' fullWidth color='primary' variant='contained' type='submit'>Submit</Button>
                <Button className={style.buttonSubmit} size='large' fullWidth color='secondary' variant='contained' type='button' onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}
