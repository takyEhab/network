import React, { useContext } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { UserContext } from './userContext';
import { useSnackbar } from 'notistack';
import { api } from './axios'

export default function NewPost(props) {
  const [post, setPost] = React.useState('')
  const [isErr, setErr] = React.useState(false)
  const { refresh, CONFIG } = useContext(UserContext)
  const { enqueueSnackbar } = useSnackbar();

  const AddPost = (post) => {
    api.post('posts/', { post }, CONFIG).then(() => refresh())
  }

  const HandelChange = (event) => {
    setPost(event.target.value)
  }

  const HandleClick = () => {
    if (post.length > 5) {
      AddPost(post)

      enqueueSnackbar('Posted', { variant: 'success' });

      props.setOpen(false);
    } else { setErr(true) }
  }

  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Write New Post..."
        multiline
        rows={5}
        style={{ width: '100%', marginTop: '2%' }}
        onChange={HandelChange}

      />

      <br />
      <Button onClick={HandleClick}>Post</Button>

      <Slide direction="up" in={isErr} mountOnEnter unmountOnExit>
        <Alert severity="warning">you should at least type 5 letters</Alert>
      </Slide>
    </div>
  )
}
