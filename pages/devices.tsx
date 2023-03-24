import { Title } from '@mantine/core';
import React from 'react';
import Main from '../components/VariantA/Layouts/Main';
import SecuredRoute from '../components/VariantA/Layouts/SecuredRoute';

export default function Devices() {
  return (
    <SecuredRoute>
      <Main>
        <section className="bg-gray-50">
          <Title>Devices page (Protected Route)</Title>
        </section>
      </Main>
    </SecuredRoute>
  );
}
