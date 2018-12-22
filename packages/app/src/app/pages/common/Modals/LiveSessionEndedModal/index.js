import React from 'react';
import { inject } from 'mobx-react';

import Button from 'app/components/Button';
import Row from 'common/components/flex/Row';

import { Container } from './elements';
import { Heading, Explanation } from '../elements';

function LiveModeEnded({ signals }) {
  return (
    <Container>
      <Heading>Owner left the session</Heading>
      <Explanation>
        The host left the live session, you can{"'"}t make any edits while there
        is no owner. You can either fork the sandbox or wait for the owner to
        come back.
      </Explanation>

      <Row justifyContent="space-around">
        <Button small href="/s">
          Create Sandbox
        </Button>
        <Button
          small
          onClick={() => {
            signals.editor.forkSandboxClicked();
            signals.modalClosed();
          }}
        >
          Fork Sandbox
        </Button>
      </Row>
    </Container>
  );
}

export default inject('signals')(LiveModeEnded);
