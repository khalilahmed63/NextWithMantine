import { Title, Input, Table, Pagination, Anchor, Breadcrumbs } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { GrSearch } from 'react-icons/gr';
import SecuredRoute from '../../../components/VariantA/Layouts/SecuredRoute';
import Main from '../../../components/VariantA/Layouts/Main';

export default function ProjectDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const items = [
        { title: 'Projects', href: '/projects' },
        { title: `${slug}`, href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    const myData = {
        vendors:
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

    return (
        <SecuredRoute>
            <Main>
                <section className=" ">
                    <div className="pt-2">
                        <Breadcrumbs>{items}</Breadcrumbs>
                    </div>
                    <div className="mt-4 flex justify-between items-end">
                        <div className="">
                            <div className="flex items-center ">
                                <Link href="/projects" passHref>
                                    <FaArrowLeft size={25} className="cursor-pointer hover:text-[#bd1f35] " />
                                </Link>
                                <Title className="ml-4 text-[#bd1f35]">Vendor</Title>
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
                                    <th>Vendor Name</th>
                                    <th>Support Email</th>
                                    <th>Support Phone</th>
                                    <th>Device Group</th>
                                    <th>Device Count</th>
                                    <th>Last updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData.vendors.map((item) => (
                                    <tr key={item.project_id} className="cursor-pointer" onClick={() => { localStorage.setItem('device', `${item.name}`); router.push(`/projects/${slug}/${item.name}`); }}>
                                        <td>{item.project_id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.name}</td>
                                        <td>{item.name}</td>
                                        <td>{item.name}</td>
                                        <td>{item.name}</td>
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
