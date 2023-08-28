import React from "react";
import {
  SignUpContainer,
  Form,
  Title,
  Input,
  Anchor,
  Button,
} from "../Components/Style/Style.js";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Typography from "@mui/material/Typography";

function Signup({
  onSubmit,
  image,
  signIn,
  handleBlur,
  errors,
  handleChange,
  values,
  resetForm,
}) {
  return (
    <div>
      <SignUpContainer>
        <Form onSubmit={onSubmit} id="signup">
          <img src={image} alt="" />
          <Title>Create Account</Title>
          <Input
            type="text"
            placeholder="Employee Code"
            name="employee_code"
            value={values.employee_code}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.employee_code ? (
            <Typography sx={{ color: "red" }}>
              {errors.employee_code}
            </Typography>
          ) : null}
          <Input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={values.first_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.first_name ? (
            <Typography sx={{ color: "red" }}>{errors.first_name}</Typography>
          ) : null}
          <Input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={values.last_name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.last_name ? (
            <Typography sx={{ color: "red" }}>{errors.last_name}</Typography>
          ) : null}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email ? (
            <Typography sx={{ color: "red" }}>{errors.email}</Typography>
          ) : null}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password ? (
            <Typography sx={{ color: "red" }}>{errors.password}</Typography>
          ) : null}
          <FormControl sx={{ minWidth: 350 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Role *
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              name="role"
              autoWidth
              label="Status *"
              value={values.role}
              onChange={handleChange}
            >
              <MenuItem style={{ minWidth: 350 }} value="User">
                User
              </MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Tester">Tester</MenuItem>
            </Select>
            {errors.role ? (
              <Typography style={{ color: "red" }}>{errors.role}</Typography>
            ) : null}
          </FormControl>
          <br />
          <Button type="submit">Sign Up</Button>
          <br />
          <Button type="reset" onClick={() => resetForm()}>
            Reset
          </Button>
        </Form>
      </SignUpContainer>
    </div>
  );
}

export default Signup;
