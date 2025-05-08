import * as React from 'react';
import { Html, Head, Body, Text} from '@react-email/components';

export const EmailTemplate = ({ firstName, message, email,phone }) => (
  <Html>
    <Head />
    <Body>
      <Text>From: {firstName}!</Text>
      <Text>Email: {email}</Text>
      <Text>Phone No: {phone}</Text>
      <Text>{message}</Text>

    

    </Body>
  </Html>
);