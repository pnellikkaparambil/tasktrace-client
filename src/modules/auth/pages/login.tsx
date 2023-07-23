import { Divider, Paper, Text } from "@mantine/core";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" align="center" weight={500}>
        Welcome to Task Trace
      </Text>
      <Divider label="Continue with email" labelPosition="center" my="lg" />
      <LoginForm />
    </Paper>
  );
};

export default LoginPage;
