import React, { useState } from "react";
import Slider from "react-slick";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
  MenuItem,
  Box,
  IconButton,
  Link,
  Divider,
  Autocomplete,
  Chip,
  Paper,
  Menu,
  Snackbar,
  Alert,
} from "@mui/material";
import Footer from "./Footer";
import {
  LinkedIn,
  Google,
  Facebook,
  Visibility,
  VisibilityOff,
  ArrowDropDown,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./LoginPage";

const interests = [
  "Artificial Intelligence",
  "Blogging",
  "Dance",
  "Data Science",
  "Demand Engagement",
  "Entrepreneur",
  "Finance",
  "Fractional",
  "Human Resource",
  "Leadership",
  "Learning languages",
];

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Australia",
  "New Zealand",
  "China",
  "Japan",
  "India",
  "South Korea",
  "South Africa",
  "Nigeria",
  "Egypt",
  "Kenya",
  "Russia",
  "Turkey",
  "Saudi Arabia",
  "Iran",
  "United Arab Emirates",
  "Vietnam",
  "Thailand",
  "Indonesia",
  "Malaysia",
  "Philippines",
  "Singapore",
  "Pakistan",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "Israel",
  "Jordan",
  "Lebanon",
  "Iraq",
  "Syria",
  "Ukraine",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
];

const images = [
  "https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?fit=crop&w=500&h=700",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=500&h=700",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=500&h=700",
];

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    interest: [],
    country: "",
  });
  const [open, setOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);
    setFormData({ ...formData, [name]: value });
  };
  const handleInterestChange = (event, newValue) => {
    console.log(`Selected Interests: ${newValue}`);
    setSelectedInterests(newValue);
    setFormData({ ...formData, interest: newValue });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    console.log("FormData before submission: ", formData);
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSnackbarMessage("Data submitted successfully!");
        setSnackbarSeverity("success");
        setOpen(true);
        // Reload the page after a successful submission
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Adjust the timeout as needed
      } else {
        if (result.message === "User already exists.") {
          setSnackbarMessage("User already exists. Please use a different email.");
          setSnackbarSeverity("error");
          setOpen(true);
        } else {
          setSnackbarMessage("Failed to submit data.");
          setSnackbarSeverity("error");
          setOpen(true);
        }
      }
    } catch (error) {
      setSnackbarMessage("Error submitting data.");
      setSnackbarSeverity("error");
      setOpen(true);
    }
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  const navItems = [
    { title: "Hire", items: ["Find Talent", "Post a Job", "Hiring Solutions"] },
    {
      title: "Enable",
      items: ["Training Programs", "Certifications", "Resources"],
    },
    {
      title: "Grow",
      items: ["Business Solutions", "Marketing Services", "Consulting"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      {showLogin ? (
        <LoginPage />
      ) : (
        <>
          <AppBar position="sticky" color="default" elevation={0}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1em",
                bgcolor: "white",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <Link href="#" flexGrow={0}>
                <img
                  src="https://www.opengrowth.com/assets/og/images/opengrowth-logo.png"
                  alt="OpenGrowth Logo"
                  style={{ height: "3.5em" }}
                />
              </Link>

              <Box>
                {navItems.map((item, index) => (
                  <NavMenuItem key={index} title={item.title} items={item.items} />
                ))}
                <Button
                  sx={{
                    marginRight: 3,
                    fontWeight: "600",
                    fontSize: "1em",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                  color="inherit"
                  TouchRippleProps={{ style: { color: "transparent" } }}
                >
                  About Us
                </Button>
                <Button
                  sx={{
                    marginRight: 3,
                    fontWeight: "600",
                    fontSize: "1em",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                  color="inherit"
                  TouchRippleProps={{ style: { color: "transparent" } }}
                >
                  Contact
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "2em" }}
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Container maxWidth="xl" sx={{ mt: 4, pb: 12 }}>
            <Grid container spacing={4} justifyContent="center" alignItems={"center"}>
              <Grid item xs={12} md={6}>
                <Slider {...settings}>
                  {images.map((url, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100%",
                        height: "700px",
                        overflow: "hidden",
                        borderRadius: "10px",
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  ))}
                </Slider>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{ borderRadius: "16px", border: "1px solid lightgray" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ px: 4, py: 1, fontWeight: "600" }}
                    gutterBottom
                  >
                    Signup on OpenGrowth
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: ".75em",
                      mb: 2,
                      px: 4,
                      py: 1,
                    }}
                  >
                    <Button
                      startIcon={<LinkedIn sx={{ color: "#0077B5" }} />}
                      variant="outlined"
                      fullWidth
                      sx={{
                        py: 1,
                        gridColumnStart: "span 2",
                        border: "1px solid lightgray",
                        "&:hover": {
                          border: "1px solid lightgray",
                        },
                      }}
                      TouchRippleProps={{ style: { color: "#0077B5" } }}
                    >
                      Sign up with LinkedIn
                    </Button>
                    <Button
                      startIcon={<Google sx={{ color: "#DB4437" }} />}
                      variant="outlined"
                      fullWidth
                      TouchRippleProps={{ style: { color: "#DB4437" } }}
                      sx={{
                        py: 1,
                        border: "1px solid lightgray",
                        "&:hover": {
                          border: "1px solid lightgray",
                        },
                      }}
                    >
                      Sign up with Google
                    </Button>
                    <Button
                      startIcon={<Facebook sx={{ color: "#1877F2" }} />}
                      variant="outlined"
                      fullWidth
                      TouchRippleProps={{ style: { color: "#1877F2" } }}
                      sx={{
                        py: 1,
                        border: "1px solid lightgray",
                        "&:hover": {
                          border: "1px solid lightgray",
                        },
                      }}
                    >
                      Sign up with Facebook
                    </Button>
                  </Box>
                  <Divider sx={{ px: 4, my: 2, fontSize: ".75em" }}>OR</Divider>
                  <form style={{ padding: "0 2rem" }} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          name="firstName"
                          label={
                            <>
                              First Name <span style={{ color: "red" }}>*</span>
                            </>
                          }
                          InputLabelProps={{
                            sx: {
                              "& .MuiInputLabel-asterisk": {
                                display: "none",
                              },
                            },
                          }}
                          variant="outlined"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          name="lastName"
                          label={
                            <>
                              Last Name <span style={{ color: "red" }}>*</span>
                            </>
                          }
                          InputLabelProps={{
                            sx: {
                              "& .MuiInputLabel-asterisk": {
                                display: "none",
                              },
                            },
                          }}
                          variant="outlined"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          required
                          name="email"
                          label={
                            <>
                              Email Address <span style={{ color: "red" }}>*</span>
                            </>
                          }
                          InputLabelProps={{
                            sx: {
                              "& .MuiInputLabel-asterisk": {
                                display: "none",
                              },
                            },
                          }}
                          variant="outlined"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="password"
                          label={
                            <>
                              Password <span style={{ color: "red" }}>*</span>
                            </>
                          }
                          InputLabelProps={{
                            sx: {
                              "& .MuiInputLabel-asterisk": {
                                display: "none",
                              },
                            },
                          }}
                          type={showPassword ? "text" : "password"}
                          variant="outlined"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Autocomplete
                          multiple
                          id="interest-selector"
                          options={interests} // This should be an array
                          value={selectedInterests} // This should be an array
                          onChange={handleInterestChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label={
                                <>
                                  Interest <span style={{ color: "red" }}>*</span>
                                </>
                              }
                              InputLabelProps={{
                                sx: {
                                  "& .MuiInputLabel-asterisk": {
                                    display: "none",
                                  },
                                },
                              }}
                              placeholder="Select interests"
                              // required
                            />
                          )}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                key={option}
                                variant="primary"
                                label={option}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                        />

                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          name="country"
                          label={
                            <>
                              Country <span style={{ color: "red" }}>*</span>
                            </>
                          }
                          InputLabelProps={{
                            sx: {
                              "& .MuiInputLabel-asterisk": {
                                display: "none",
                              },
                            },
                          }}
                          variant="outlined"
                          value={formData.country}
                          required
                          onChange={handleChange}
                        >
                          {countries.map((country, index) => (
                            <MenuItem value={country} key={index}>
                              {country}
                            </MenuItem>
                          ))}
                        </TextField>

                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button variant="contained" color="primary" type="submit" >
                          Register Now
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
                  <Typography
                    color="secondary.main"
                    variant="body2"
                    sx={{ px: 4, m: 2, textAlign: "center" }}
                  >
                    By registering, I agree to the OpenGrowth Academy{" "}
                    <Link color="primary" href="#">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link color="primary" href="#">
                      Privacy Policy
                    </Link>
                  </Typography>
                </Paper>
                <Typography
                  color="secondary.main"
                  variant="body2"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  Are you interested in becoming an expert?{" "}
                  <Link href="#">Sign up here!</Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Footer />
        </>
      )}
    </Box>
  );
};

export default SignupPage;

const NavMenuItem = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{
          marginRight: 3,
          fontWeight: "600",
          fontSize: "1em",
          textTransform: "capitalize",
          "&:hover": { background: "transparent", textDecoration: "underline" },
        }}
        TouchRippleProps={{ style: { color: "transparent" } }}
      >
        {title}
      </Button>
      <Menu
        sx={{ borderRadius: "2em" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
