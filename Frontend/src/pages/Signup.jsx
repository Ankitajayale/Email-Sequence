import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomizedInput from '../input';
import { IoIosLogIn } from 'react-icons/io';
import toast from 'react-hot-toast';
import { useAuth } from '../pages/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      toast.loading("Signing Up!", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    }
