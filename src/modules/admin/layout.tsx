import { Component, ReactNode } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Stack,
  Button,
  UnstyledButton,
  Group,
  Avatar,
  Text,
} from "@mantine/core";
import { IconDatabase, IconSettings } from "@tabler/icons-react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const items: {
    name: string;
    icon: ReactNode;
    link: string;
  }[] = [
    { name: "Dashboard", icon: <IconDatabase />, link: "/home" },
    // { name: "Users", icon: IconDatabase },
    // { name: "Products", icon: IconDatabase },
    // { name: "Orders", icon: IconDatabase },
    { name: "Settings", icon: <IconSettings />, link: "/settings" },
  ];
  return (
    <div>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="0">
            <div className="flex flex-col justify-between h-full">
              <Stack spacing={0}>
                {items.map((item) => (
                  <NavLink
                    to={item.link}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-blue-200" : ""
                    }
                  >
                    <UnstyledButton className="py-4 px-4">
                      <Group>
                        <div>{item.icon}</div>
                        <div>
                          <Text>{item.name}</Text>
                        </div>
                      </Group>
                    </UnstyledButton>
                  </NavLink>
                ))}
              </Stack>

              <div className="p-3">
                <UnstyledButton>
                  <Group>
                    <Avatar size={40} color="blue">
                      BH
                    </Avatar>
                    <div>
                      <Text>Bob Handsome</Text>
                      <Text size="xs" color="dimmed">
                        bob@handsome.inc
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              </div>
            </div>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Outlet />
      </AppShell>
    </div>
  );
};
export default AdminLayout;
