import React from 'react';
import { Title } from '@mantine/core';
import SecuredRoute from '../components/VariantA/Layouts/SecuredRoute';
import Main from '../components/VariantA/Layouts/Main';

export default function Dashboard() {
  return (
    <SecuredRoute>
      <Main>
        <section className="bg-gray-50">
          <Title>Dashboard page (Protected Route)</Title>
        </section>
      </Main>
    </SecuredRoute>
  );
}
