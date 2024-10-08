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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Footer from "./Footer";
import {
  LinkedIn,
  Google,
  Facebook,
  Visibility,
  VisibilityOff,
  ArrowDropDown,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./LoginPage";
import OGLogo from "./assets/OG-Logo.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LinkedInIcon, GoogleIcon, FacebookIcon } from "./Icons";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters long")
      .required("Password is required"),
    interests: Yup.array().min(1, "At least one interest is required"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      interests: [],
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event, newValue) => {
    setSelectedInterests(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="#"
            flexGrow={0}
            py={1}
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
              width: { xs: "100%", md: "fit-content" },
            }}
          >
            <img
              src={OGLogo}
              alt="OpenGrowth Logo"
              style={{ height: "3.5em" }}
              onClick={() => {
                navigate("/");
              }}
            />
          </Link>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item, index) => (
              <NavMenuItem key={index} title={item.title} items={item.items} />
            ))}
            <Button
              sx={{
                marginRight: 3,
                fontWeight: "600",
                fontSize: "1em",
                textTransform: "capitalize",
                borderRadius: "2em", // Default border radius
                padding: "0.5em 1em", // Default padding
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.1)", // Light background on hover
                  borderRadius: "1.5em", // Border radius on hover
                  padding: "0.7em 1.2em", // Increased padding on hover
                },
                "&:active": {
                  background: "rgba(0, 0, 0, 0.2)", // Slightly darker background on click
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
                borderRadius: "2em", // Default border radius
                padding: "0.5em 1em", // Default padding
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.1)", // Light background on hover
                  borderRadius: "1.5em", // Border radius on hover
                  padding: "0.7em 1.2em", // Increased padding on hover
                },
                "&:active": {
                  background: "rgba(0, 0, 0, 0.2)", // Slightly darker background on click
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
              sx={{ 
                borderRadius: "2em", // Default border radius
                textTransform: "none",
                marginRight: 2,
                padding: "0.5em 1em", // Default padding
                "&:hover": {
                  borderRadius: "1.5em", // Border radius on hover
                  padding: "0.7em 1.2em", // Increased padding on hover
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box
            sx={{
              padding: "2.5em 1em",
              display: "flex",
              flexDirection: "column",
              gap: "1.5em",
            }}
          >
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
              sx={{ borderRadius: "2em" ,textTransform: "none", marginRight: 2 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Container
        maxWidth="l"
        sx={{
          mt: 4,
          pb: 3,
          maxWidth: '1462px', // Set custom maxWidth
          border: '1px solid lightgray', // Apply additional styling if needed
          borderRadius: '16px', // Apply additional styling if needed
          boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', // Apply additional styling if needed
        }}
        className="md:border md:mb-6 md:pt-6 md:shadow-lg md:rounded-xl"
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems={"center"}
        >
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
                  startIcon={<LinkedInIcon height={30} />}
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
                ></Button>
                <Button
                  startIcon={<GoogleIcon height={28} />}
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
                ></Button>
                <Button
                  startIcon={<FacebookIcon height={30} />}
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
                ></Button>
              </Box>
              <Divider sx={{ px: 4, my: 2, fontSize: ".75em" }}>OR</Divider>
              <form
                onSubmit={formik.handleSubmit}
                style={{ padding: "0 2rem" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
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
                      {...formik.getFieldProps("firstName")}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      // required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
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
                      // required
                      {...formik.getFieldProps("lastName")}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      // required
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
                      {...formik.getFieldProps("email")}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
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
                      // required
                      {...formik.getFieldProps("password")}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                      id="interests"
                      // required
                      options={interests}
                      getOptionLabel={(option) => option}
                      value={formik.values.interests}
                      onChange={(event, value) => {
                        formik.setFieldValue("interests", value);
                        formik.setFieldTouched("interests", true);
                      }}
                      onBlur={() => formik.setFieldTouched("interests", true)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Interests"
                          variant="outlined"
                          error={
                            formik.touched.interests &&
                            Boolean(formik.errors.interests)
                          }
                          helperText={
                            formik.touched.interests && formik.errors.interests
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
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
                      // required
                      {...formik.getFieldProps("country")}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                    >
                      {countries.map((country, index) => {
                        return (
                          <MenuItem value={country} key={country}>
                            {country}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Register Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
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
        <div className="w-full flex items-center justify-between md:flex-1 md:place-items-end md:pb-6">
                <div className="">
                <button className="text-sm text-[#616161] py-2"
                onClick={() => {
                  navigate("/", { state: { fromSignup: true } });
                }}
                style={{ marginTop: '3em' }}>
                      &lt; Back
                    </button>
                </div>
                <div className="space-x-3">
                  {/* <button
                    className="text-sm text-[#616161]"
                    onClick={() => setStep(101)}
                  >
                    Skip All
                  </button>
                  <button
                    className="text-sm text-[#616161]"
                    onClick={() => setStep(step < 100 ? step + 100 / 2 : step)}
                  >
                    Skip
                  </button>
                  <button
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3f3f3f] text-white"
                    onClick={() => setStep(step < 100 ? step + 100 / 2 : step)}
                  >
                    Next
                  </button> */}
                </div>
              </div>
      </Container>
{/* 
      <button
        onClick={() => {
          navigate("/", { state: { fromSignup: true } });
        }}
      >
        Back
      </button> */}

      <Footer />
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
          borderRadius: "2em",
          padding: "0.5em 1em",
          "&:hover": { 
            background: "rgba(0, 0, 0, 0.1)", 
            borderRadius: "1.5em",
            padding: "0.7em 1.2em",
          },
          "&:active": { 
            background: "rgba(0, 0, 0, 0.2)",
          },
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
          <MenuItem key={index} onClick={handleClose}
          sx={{ 
            borderRadius: "2em", // Default border radius
            padding: "0.5em 1em", // Default padding
            "&:hover": { 
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Light background on hover
              borderRadius: "1.5em", // Border radius on hover
              padding: "0.7em 1.2em", // Increased padding on hover
            }, 
            "&:focus": { 
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Ensure focus also has background
              borderRadius: "1.5em", // Border radius on focus
              padding: "0.7em 1.2em", // Increased padding on focus
            },
          }} 
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
