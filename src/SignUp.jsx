import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { LinkedIn, Google, Facebook } from "@mui/icons-material";

const SignUp = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full flex">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="https://academy.opengrowth.com/assets/images/courses/11.png"
            alt="Signup"
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6">Signup on OpenGrowth</h2>
          <div className="flex justify-between mb-4 gap-4">
            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              style={{ padding: "5px 30px" }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<Google />}
              style={{ padding: "5px 30px" }}
            >
              Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<Facebook />}
              style={{ padding: "5px 35px" }}
            >
              Facebook
            </Button>
          </div>
          <div className="text-center text-gray-500 mb-4">or</div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
            />
            <FormControl fullWidth className="mb-4">
              <InputLabel>Interest</InputLabel>
              <Select variant="outlined">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Interest 1</MenuItem>
                <MenuItem value={20}>Interest 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="mb-4">
              <InputLabel>Country</InputLabel>
              <Select variant="outlined">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Country 1</MenuItem>
                <MenuItem value={20}>Country 2</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mb-4"
            >
              Register Now
            </Button>
          </div>
          <div className="mt-5 text-center text-gray-500 text-sm">
            By registering, I agree to the OpenGrowth Academy{" "}
            <a href="#" className="text-blue-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
