import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      items: ["About Us", "Contact Us", "Complaints & Queries"],
    },
    {
      title: "Products",
      items: ["Mentorship", "Startup Services", "OpenGrowth Hub"],
    },
    {
      title: "Resources",
      items: [
        "Help & Support",
        "Sitemap",
        "Terms & Conditions",
        "Privacy & Cookies Policy",
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "linear-gradient(135deg, #f8f9fa 0%, #e0e0e0 100%)",
        py: 5,
        borderTop: "2px solid #e0e0e0",
        mt: 5,
        fontSize: "0.875rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Box display="flex" alignItems="center" mb={3}>
              <img
                src="https://www.opengrowth.com/assets/og/images/opengrowth-logo.png"
                alt="OpenGrowth Logo"
                style={{ height: "3.5em", marginRight: 8 }}
              />
            </Box>
          </Grid>
          {footerSections.map((section) => (
            <Grid item xs={12} sm={3} key={section.title}>
              <Typography
                variant="subtitle1"
                color="text.primary"
                fontWeight="600"
                gutterBottom
                sx={{ mb: 1.5 }}
              >
                {section.title}
              </Typography>
              {section.items.map((item) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  key={item}
                  sx={{ mb: 0.5 }}
                >
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3, bgcolor: "#e0e0e0" }} />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6" color="text.primary" gutterBottom>
                Subscribe to our Newsletter
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <TextField
                  label="Email Address"
                  variant="outlined"
                  size="small"
                  sx={{ mr: 2, flexGrow: 1 }}
                />
                <Button variant="contained" color="primary">
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Box display="flex" alignItems="center" flexWrap="wrap">
                <Typography variant="body2" color="text.secondary" mr={3}>
                  India
                </Typography>
                {["Terms of Service", "Privacy Policy", "Sitemap"].map(
                  (item) => (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={item}
                      mr={3}
                    >
                      <Link href="#" color="inherit" underline="hover">
                        {item}
                      </Link>
                    </Typography>
                  )
                )}
              </Box>
              <Box display="flex" alignItems="center">
                {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      aria-label={`social media ${index}`}
                      size="small"
                      sx={{
                        border: "2px solid",
                        borderColor: "text.primary",
                        borderRadius: "50%",
                        padding: "8px",
                        marginLeft: "8px",
                        "&:hover": {
                          bgcolor: "primary.main",
                          borderColor: "primary.dark",
                          color: "#fff",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
