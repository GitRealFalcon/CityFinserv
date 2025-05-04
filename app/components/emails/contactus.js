import * as React from 'react';
import { Html, Head, Body, Text } from '@react-email/components';

export const EmailTemplate = ({ firstName,message,email }) => (
  <Html>
    <Head />
    <Body>
      <Text>Client {firstName}!</Text>
      <Text>Client Email {email}!</Text>
      <Text>{message}</Text>

    </Body>
  </Html>
);