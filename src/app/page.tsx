
import Hero from "@/components/Hero";
import { Box } from "@mui/material";
import Image from "next/image";


export default function Home() {
  return (
    <main style={{background: 'red'}}>
        <nav>
          <Box sx={{width: 100, height: 50}}>
            <Image
              src={"/logo.jpg"}
              alt={"Blurr AI"}
              width={100}
              height={50}
            />
          </Box>
        </nav>
        <Hero />
    </main>
  );
}
