import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
        ? theme.palette.grey[900]
        : theme.palette.grey[200],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary.white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary.white">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary.white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary.white">
              123 Maman Street, New York, USA
            </Typography>
            <Typography variant="body2" color="text.secondary.white">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary.white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary.white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary.white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://google.com">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}