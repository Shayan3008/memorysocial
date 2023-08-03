import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@material-ui/core'
import ThumbsUp from '@material-ui/icons/ThumbUpAltSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import useStylePost from './styles'
import moment from 'moment';
export default function Post(props) {
    const post = props.post;
    const styleClass = useStylePost()
    return (
        <Card className={styleClass.card}>
            <CardMedia component='img' className={styleClass.media} src={post.selectedFile} />
            <div className={styleClass.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styleClass.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => { }}>
                    <MoreHoriz fontSize='default' />
                </Button>
            </div>
            <CardContent>
            <Typography variant='h5' className={styleClass.title} gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={styleClass.cardActions}>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <ThumbsUp fontSize='small'/>
                    likes:{post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <DeleteIcon fontSize='small'/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}
