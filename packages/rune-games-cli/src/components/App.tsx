import { Text } from "ink"
import React from "react"

import { Create } from "../flows/Create.js"
import { List } from "../flows/List.js"
import { Logout } from "../flows/Logout.js"
import { Update } from "../flows/Update/Update.js"
import { Upload } from "../flows/Upload/Upload.js"
import { cliCommand, cli } from "../lib/cli.js"
import { packageJson } from "../lib/packageJson.js"

import { LoginGate } from "./LoginGate.js"
import { VersionCheckGate } from "./VersionCheckGate.js"

export function App() {
  const { command, args, commandInvalid, flags } = cliCommand()

  if (commandInvalid) {
    return <Text color="red">Invalid command `{command}`</Text>
  }

  return (
    <VersionCheckGate>
      {cli.flags.version ? (
        <Text>{packageJson.version}</Text>
      ) : !command || command === "help" ? (
        <Text>{cli.help}</Text>
      ) : command === "logout" ? (
        <Logout />
      ) : command === "create" ? (
        <Create args={args} />
      ) : (
        <LoginGate>
          {command === "list" ? (
            <List />
          ) : command === "upload" ? (
            <Upload flags={flags} />
          ) : command === "update-info" ? (
            <Update args={args} />
          ) : null}
        </LoginGate>
      )}
    </VersionCheckGate>
  )
}
