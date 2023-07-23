import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
} from "@mantine/core";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Box w={400}>
        <Outlet />
      </Box>
    </div>
  );
};

export default AuthLayout;
