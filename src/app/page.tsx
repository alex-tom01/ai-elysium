import Example from "@/components/example";
import { Box } from "@mui/material";
import Image from "next/image";


export default function Home() {
  return (
    <main style={{background: 'red'}}>
        {/* <div>This is Effigenics</div> */}
        <nav>
          <Box sx={{width: 100, height: 50}}>
            <Image
              src={"/logo.jpg"}
              alt={"Effegenics company"}
              width={100}
              height={50}
            />
          </Box>
        </nav>
        <Example />
    </main>
  );
}
