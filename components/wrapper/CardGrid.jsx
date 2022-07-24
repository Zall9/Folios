import { Container, Grid } from "@mui/material";
import CardItem from "../CardItem";
import axios from "axios";
import { useEffect, useState } from "react";
const CardGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API + "/projects")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cards = (data) => {
    return data?.map((item) => {
      return (
        <>
          <Grid
            item
            key={item.id + "grid"}
            xs={4}
            sx={{
              flexGrow: 1,
            }}
          >
            <CardItem key={item.id} data={item} />
          </Grid>
        </>
      );
    });
  };

  return (
    <Container fixed>
      <Grid alignItems="center" justifyContent="center" container spacing={3}>
        {cards(data)}
      </Grid>
    </Container>
  );
};

export default CardGrid;
