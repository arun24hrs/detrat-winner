import React from "react";
import getProducts from "./api/getProducts";
import MiniDrawer from "../../components/Drawer";
import Card from "../../components/ProdCard";
import { Avatar, Box, Button, Grid, Item, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Drawer from "../../components/Drawer";

const Posts = () => {
  const [products, setProducts] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  return (
    <Stack direction={"row"} position={"relative"} width={"80%"}>
      <Stack direction={"column"} spacing={10} width={"300px"} margin={"auto"}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products && products.map((el) => <Card data={el} key={el.id} />)
        )}
      </Stack>
      <Box position={"fixed"} top={0} right={0} zIndex={4}>
      <Drawer/>
      </Box>
      <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} spacing={2} position={"fixed"} right={0}
      sx={{width:300,
      height:"100vh",
      backgroundColor: "#ddd", textAlign:"center"}}>
          <Avatar alt="Travis Howard"sx={{ width: 80, height: 80, bgcolor:deepPurple[500], mb:"30px" }}/>
          <Typography variant="h5">User Name</Typography>
          <Typography variant="body1">user@detrator.com</Typography>
          <Button variant="contained">View Profile</Button>
          <Button variant="outlined">Edit Profile</Button>
          
      </Stack>
    </Stack>
  );
};

export default Posts;
