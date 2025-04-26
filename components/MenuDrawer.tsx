import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface MenuDrawerProps {
  readonly toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  readonly state: boolean;
}

export default function MenuDrawer({ toggleDrawer, state }: MenuDrawerProps) {
  const menuItems = [
    { text: "Головна", href: "/", icon: <HomeIcon /> },
    { text: "Усі пости", href: "/posts", icon: <ListIcon /> },
    { text: "Створити пост", href: "/posts/create", icon: <AddCircleIcon /> },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="Menu Drawer"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, href, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={state}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}
