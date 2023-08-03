import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LayoutComp = () => {
  return (
    <>
      <Container sx={{ backgroundColor: "red", color: "skyblue" }}>
        Hello world
      </Container>
    </>
  );
};

// const LayoutComp = () => {
//   return (
//     <>
//       <Container
//         sx={{ backgroundColor: "grey", p: 2, mt: 2, maxWidth: "80vw" }}
//       >
//         <Grid
//           container
//           justifyContent={"center"}
//           alignItems="center"
//           direction={"row-reverse"}
//           gridTemplateRows={4}
//           gridTemplateColumns={3}
//         >
//           <Grid item gridRow={1} gridColumn={1} color="red">
//             ראובן
//           </Grid>
//           <Grid item>שמעון</Grid>
//           <Grid item>לוי</Grid>
//           <Grid item>יהודה</Grid>
//           <Grid item>יששכר</Grid>
//           <Grid item>זבולון</Grid>
//           <Grid item>גד</Grid>
//           <Grid item>אשר</Grid>
//           <Grid item>נפתלי</Grid>
//           <Grid item>דן</Grid>
//           <Grid item>יוסף</Grid>
//           <Grid item>בנימין</Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

export default LayoutComp;
