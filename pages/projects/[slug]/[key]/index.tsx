import { Title, Input, Table, Pagination, Breadcrumbs, Anchor } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { FaArrowLeft } from 'react-icons/fa';
import Main from '../../../../components/VariantA/Layouts/Main';
import SecuredRoute from '../../../../components/VariantA/Layouts/SecuredRoute';

export default function ProjectDetail() {
    const router = useRouter();
    const [vendor, setVendor] = useState('');
    const { key } = router.query;
    const items = [
        { title: 'Projects', href: '/projects' },
        { title: `${vendor}`, href: `/projects/${vendor}` },
        { title: `${key}`, href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    const myData = {
        projects:
            [
                { project_id: '01', name: 'apple' },
                { project_id: '02', name: 'dell' },
                { project_id: '03', name: 'acer' },
                { project_id: '04', name: 'HP' },
                { project_id: '05', name: 'samsung' },
                { project_id: '06', name: 'hair' },
                { project_id: '07', name: 'national' },
                { project_id: '08', name: 'realme' },
                { project_id: '09', name: 'blackbarry' },
                { project_id: '10', name: '4tech' },
            ],
    };
    useEffect(() => {
        setVendor(`${localStorage.getItem('vendor')}`);
        // console.log(
        //     localStorage.getItem('device'),
        //     localStorage.getItem('vendor')
        // );
    }, []);

    return (
        <SecuredRoute>
            <Main>
                <section className="">
                    <div className="pt-2">
                        <Breadcrumbs>{items}</Breadcrumbs>
                    </div>
                    <div className="mt-4 flex justify-between items-end">
                        <div className="">
                            <div className="flex items-center ">
                                <FaArrowLeft size={25} className="cursor-pointer hover:text-[#bd1f35]" onClick={() => { router.back; }} />
                                <Title className="ml-4 text-[#bd1f35]">Devices</Title>
                            </div>
                        </div>
                        <div className="mr-4">
                            <Input
                              icon={<GrSearch size={18} />}
                              placeholder="Search"
                              radius="xl"
                            />
                        </div>
                    </div>
                    <div className="">
                        <Table verticalSpacing="xs" striped fontSize="sm" highlightOnHover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.projects.map((item) => (
                                    <tr key={item.project_id} className="cursor-pointer">
                                        <td>{item.project_id}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="flex justify-end items-center">
                            <Pagination
                              total={10}
                              radius="xl"
                              styles={() => ({
                                    control: {
                                        '&[data-active]': {
                                            backgroundImage: 'blue',
                                        },
                                    },
                                })}
                            />
                        </div>
                    </div>
                </section>
            </Main>
        </SecuredRoute>
    );
}
