import { Container, AppBar, Grow, Grid, Typography } from "@material-ui/core";
import usestyle from "./styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "./redux/actions/post";
import Form from "./components/Forms";
import Posts from "./components/Posts";
const App = () => {
  const style = usestyle()
  const selector = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(selector);
  useEffect(() => {
    dispatch(getPost())
  }, [dispatch])
  return (
    <Container >
      <Grow in timeout={2000}>

        <AppBar className={style.appbar} position="static" color="inherit">
          <Typography className={style.heading} align="center" variant="h2">
            Memories
          </Typography>
        </AppBar>
      </Grow>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xl={12} sm={8}>
            <Posts>
              </Posts>
          </Grid>
          <Grid item xl={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App