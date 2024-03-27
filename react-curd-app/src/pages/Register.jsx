import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    // const [user, setUser] = useState("");
    const [error, setError] = useState("")
    const naviget = useNavigate()

    // const hendleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser({ ...user, [name]: value })
    // }


    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const YupValidation = Yup.object({
        firstName: Yup.string()
            .min(3, "Must be 3 characters or Gretar")
            .required("Required firstName Bro"),
        lastName: Yup.string()
            .min(3, "Must be 3 characters or Gretar")
            .required("Required lastName Bro"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string().
            required("Required Name")
    })


    const handleSubmit = async (values, props) => {
        console.log(values);
        try {
            const res = await axios.post("https://node-react-loginsystam.vercel.app/api/auth/register", values);
            naviget("/login")
            console.log("resss", res);
        } catch (err) {
            setError(err)
        }
        props.resetForm();
    }

    return (
        <>
            <Container>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Register</Typography>
                    <Box sx={{ mt: 3 }}>
                        <Formik
                            initialValues={initialValue}
                            validationSchema={YupValidation}
                            onSubmit={handleSubmit}
                        >
                            {
                                (props) => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        autoComplete="given-name"
                                                        name="firstName"
                                                        required
                                                        fullWidth
                                                        id="firstName"
                                                        label="First Name"
                                                        value={props.values.firstName}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        autoFocus
                                                        error={props.errors.firstName && props.touched.firstName}
                                                        helperText={props.touched.firstName && props.errors.firstName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="lastName"
                                                        label="Last Name"
                                                        name="lastName"
                                                        autoComplete="family-name"
                                                        value={props.values.lastName}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        error={props.errors.lastName && props.touched.lastName}
                                                        helperText={props.touched.lastName && props.errors.lastName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Email Address"
                                                        name="email"
                                                        autoComplete="email"
                                                        value={props.values.email}
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        error={props.errors.email && props.touched.email}
                                                        helperText={props.touched.email && props.errors.email}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        value={props.values.password}
                                                        onChange={props.handleChange}
                                                        autoComplete="new-password"
                                                        onBlur={props.handleBlur}
                                                        error={props.errors.password && props.touched.password}
                                                        helperText={props.touched.password && props.errors.password}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Sign Up
                                            </Button>
                                        </Form>
                                    )
                                }
                            }

                        </ Formik>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login">Already have an account? Sign in.</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Register