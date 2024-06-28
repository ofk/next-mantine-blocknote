"use client";

import dynamic from "next/dynamic";

import { AppShell, Button, Menu } from "@mantine/core";
import { Spotlight, spotlight } from "@mantine/spotlight";

const Editor = dynamic(() => import("./editor"), { ssr: false });

export default function HomePage() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Messages</Menu.Item>
            <Menu.Item>Gallery</Menu.Item>
            <Menu.Item>Search</Menu.Item>
            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item>Transfer my data</Menu.Item>
            <Menu.Item color="red">Delete my account</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Button onClick={spotlight.open}>Open spotlight</Button>
        <Spotlight
          actions={[
            {
              id: "home",
              label: "Home",
              description: "Get to home page",
              onClick: () => console.log("Home"),
            },
            {
              id: "dashboard",
              label: "Dashboard",
              description: "Get full information about current system status",
              onClick: () => console.log("Dashboard"),
            },
            {
              id: "documentation",
              label: "Documentation",
              description:
                "Visit documentation to lean more about all features",
              onClick: () => console.log("Documentation"),
            },
          ]}
          nothingFound="Nothing found..."
          highlightQuery
          searchProps={{
            placeholder: "Search...",
          }}
        />
      </AppShell.Header>
      <AppShell.Main>
        <Editor />
      </AppShell.Main>
    </AppShell>
  );
}
