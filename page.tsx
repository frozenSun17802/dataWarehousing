"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import BasicSelect from "./select";



export default () => {
  return (
    <Container maxWidth='lg' sx={{backgroundColor: '', mt:4}}>

      <Box sx={{ flexGrow: 1, mb:4 }}>
        <Typography variant="h2" component="h2">New starter details</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, mb:2 }}>
        <Typography variant="h5" component="h5">Personal info</Typography>
      </Box>
      <Box component='form' sx={{ flexGrow: 1, mb:6 }}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <InputLabel 
              sx={{fontWeight: 700, mb:0.5}}
              required
              htmlFor="first-name">First name
            </InputLabel>
          <TextField 
            fullWidth
            id="first-name" 
            variant="outlined" 
            size="small"
            placeholder="e.g. Maria"
          />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel 
              sx={{fontWeight: 700, mb:0.5}}
              required
              htmlFor="family-name">Family name
            </InputLabel>
            <TextField 
              fullWidth
              id="family-name" 
              variant="outlined"
              size="small"
              placeholder="e.g. Gutierrez"
             />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel 
              sx={{fontWeight: 700, mb:0.5}}
              htmlFor="preferred-name">Preferred name
            </InputLabel>
          <TextField 
            fullWidth
            id="preferred-name" 
            variant="outlined" 
            size="small"
            placeholder="e.g. Mary"
          />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel 
              sx={{fontWeight: 700, mb:0.5}}
              required
              htmlFor="personal-number">Personal mobile number
            </InputLabel>
            <TextField 
              fullWidth
              id="personal-number" 
              variant="outlined" 
              size="small"
              placeholder="e.g. +61 435 123 456"
             />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel 
              sx={{fontWeight: 700, mb:0.5}}
              required
              htmlFor="email">Personal email
            </InputLabel>
          <TextField 
            fullWidth
            id="email" 
            variant="outlined" 
            size="small"
            placeholder="e.g. name@gmail.com"
          />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mb:2 }}>
        <Typography variant="h5" component="h5">Work info</Typography>
      </Box>
      <Box component='form' sx={{ flexGrow: 1, mb:6 }}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BasicSelect></BasicSelect>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}