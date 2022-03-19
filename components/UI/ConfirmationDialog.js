import React from 'react'
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

const ConfirmationDialog = (props) => {
  return (
    <Dialog
        opened={props.opened}
        onClose={props.onCloseClicked}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          {props.message}
        </Text>

        <Group align="flex-end">
          <Button color="red" onClick={props.onSubmitClicked}>Yes, Delete</Button>
          <Button onClick={props.onCloseClicked}>No, Cancel</Button>
        </Group>
      </Dialog>
  )
}

export default ConfirmationDialog