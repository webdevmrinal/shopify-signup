import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
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
      sx={{ bgcolor: "#f8f9fa", py: 5, borderTop: "2px solid lightgray" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Box display="flex" alignItems="center" mb={2}>
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
                fontSize={"1.2em"}
                fontWeight={"500"}
                gutterBottom
              >
                {section.title}
              </Typography>
              {section.items.map((item) => (
                <Typography variant="body2" color="text.secondary" key={item}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3, bgcolor: "text.primary" }} />
        <Box
          mt={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="body2" color="text.secondary" mr={3}>
              India
            </Typography>
            {["Terms of Service", "Privacy Policy", "Sitemap"].map((item) => (
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
            ))}
          </Box>
          <Box>
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
                      bgcolor: "action.hover",
                    },
                  }}
                >
                  <Icon fontSize="small" color="primary" />
                </IconButton>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
