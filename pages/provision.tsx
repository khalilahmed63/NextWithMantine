import { Table, Title, Tabs } from '@mantine/core';
import Main from '../components/VariantA/Layouts/Main';
import SecuredRoute from '../components/VariantA/Layouts/SecuredRoute';

export default function Provision() {
  return (
    <SecuredRoute>
      <Main>
        <section className=" ">
          <Title className="mb-6 text-[#bd1f35]">Provision</Title>
          <Tabs defaultValue="device">
            <Tabs.List>
              <Tabs.Tab value="device" color="#bd1f35">device</Tabs.Tab>
              <Tabs.Tab value="devices">devices</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="device" pt="xs">
              <div className="">
                <Table verticalSpacing="xs" fontSize="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Key</th>
                      <th>Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2332</td>
                      <td>fas1230456</td>
                      <td>#</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="devices" pt="xs">
              <div className="">
                <Table verticalSpacing="xs" fontSize="sm" striped highlightOnHover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Key</th>
                      <th>Symbol</th>
                      <th>Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2332</td>
                      <td>fas1230456</td>
                      <td>#</td>
                      <td>#</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tabs.Panel>
          </Tabs>
        </section>
      </Main>
    </SecuredRoute>
  );
}
