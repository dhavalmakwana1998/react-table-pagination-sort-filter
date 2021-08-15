import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[300],
  },
  add: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
    zIndex: theme.zIndex.tooltip,
  },
}));

function PostPagination() {
  const classes = useStyles();

  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    setPost(response.data);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <>
      {posts.length ? (
        <Container className={classes.root}>
          <div className="container d-flex justify-content-center">
            <Pagination
              className="my-3"
              count={10}
              defaultPage={page}
              variant="outlined"
              color="primary"
              onChange={handleChange}
            />
          </div>
          <Typography
            variant="h5"
            color="primary"
            style={{ marginBottom: "20px" }}
            align="center"
          >
            PostPagination With MUI Demo
          </Typography>

          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item lg={3} sm={6} xs={12}>
                <Card>
                  <CardHeader
                    style={{ height: "60px", overflowY: "hidden" }}
                    avatar={
                      <Avatar style={{ background: "#3f51b5" }}>
                        {post.id}
                      </Avatar>
                    }
                    title={post.title}
                  />
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://picsum.photos/id/237/150/100"
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        style={{ height: "105px", overflowY: "hidden" }}
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button variant="contained" color="primary">
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <div className="container d-flex justify-content-center">
              <Pagination
                className="my-3"
                count={10}
                defaultPage={page}
                variant="outlined"
                color="primary"
                onChange={handleChange}
              />
            </div>
          </Grid>
        </Container>
      ) : (
        <h1 className="text-center">DAta not found</h1>
      )}
    </>
  );
}

export default PostPagination;
