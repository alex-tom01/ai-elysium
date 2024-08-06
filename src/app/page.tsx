
import Hero from "@/components/Hero";
import { Box, Grid } from "@mui/material";
import Image from "next/image";


export default function Home() {
  return (
    <main style={{background: 'red'}}>
        <Hero />
        <nav>
          <Box sx={{width: '100%', height: 100, background: "#fff"}}>
            {/* <Image
              src={"/logo.jpg"}
              alt={"Blurr AI"}
              width={100}
              height={50}
            /> */}
          </Box>
        </nav>
        <Grid container sx={{bgcolor: 'blue', height: '50rem'}} spacing={2}>
          {/* image gallary */}
          <Grid item sx={{bgcolor: 'gray', height: '20rem', width: '100%'}}> 
              <Grid container direction={"row"} sx={{bgcolor: 'blue', height: '20rem'}} spacing={2} >
                <Grid item xs={12} md={6} sx={{bgcolor: 'gray', height: '20rem', width: '100%', display: "flex"}}> 
                  <Box sx={{display: 'flex', border: "1px solid red", width: 400, height: '18rem', bgcolor: 'red'}}></Box>
                  <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap', border: "1px solid red", width: 400, height: '18rem' }}>
                    <Box sx={{width: 180, height: '10rem', bgcolor: 'yellow'}}> asdlfj </Box>
                    <Box sx={{width: 180, height: '10rem', bgcolor: 'yellowgreen'}}>asfdsdf</Box>
                    <Box sx={{width: 180, height: '10rem', bgcolor: 'yellow'}}>asdfas</Box>
                    <Box sx={{width: 180, height: '10rem', bgcolor: 'yellowgreen'}}>asfdsdf</Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{bgcolor: 'black', height: '20rem', width: '100%'}}>

                </Grid>
              </Grid>
          </Grid>
          <Grid item sx={{bgcolor: 'lightblue', height: '100%', width: '100%'}}>
            <Grid container direction={"row"} sx={{bgcolor: 'blue',}} spacing={2} >
                <Grid item xs={12} md={2} sx={{bgcolor: 'gray', height: '100%', width: '100%', display: "flex"}}> 
                  <p>Link</p>
                  <p>Link1</p>
                </Grid>
                <Grid item xs={12} md={10} sx={{bgcolor: 'orange', height: '100%', width: '100%'}}>
                  <Box>This  is box</Box>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
    </main>
  );
}
