import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';

storiesOf('Button', module)
.add('secondary', () => (
  <Button
    onClick={action('clicked')}
  >
    Hello World
  </Button>
))
.add('primary', () => (
  <Button
    primary
    onClick={action('clicked')}
  >
    Hello World
  </Button>
));
