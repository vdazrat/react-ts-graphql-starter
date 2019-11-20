import React from 'react';
import { storiesOf } from '@storybook/react';
import Main from './'

storiesOf('routes|Main', module)
  .add('with text', () => (
    <Main />
  ));
