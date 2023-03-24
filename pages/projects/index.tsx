/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Anchor, Breadcrumbs, Input, Table, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GrSearch } from 'react-icons/gr';
import SecuredRoute from '../../components/VariantA/Layouts/SecuredRoute';
import Main from '../../components/VariantA/Layouts/Main';

export default function Projects() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`/api/data?page=${currentPage}`);
      const data = await response.json();
      setProducts(data.items);
      setTotalPages(data.totalPages);
      setTotalItems(data.totalItems);
    }

    fetchProducts();
  }, [currentPage]);

  const [query, setQuery] = useState<any>('');
  const router = useRouter();
  function searchArray(array: any[], Query: string) {
    const results = array.filter(item => {
      for (const key in item) {
        if (item[key].toString().toLowerCase().includes(Query.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    return results;
  }
  const results = searchArray(products, `${query}`);

  const items = [
    { title: 'Projects', href: '/projects' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <SecuredRoute>
      <Main>
        <section className="">
          <div className="pt-2">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="mt-4 flex justify-between items-end">
            <div className="">
              <Title className=" text-[#bd1f35]">Projects</Title>
            </div>
            <div className="mr-4">
              <Input
                icon={<GrSearch size={18} />}
                placeholder="Search"
                radius="xl"
                value={query}
                onChange={(e : any) => setQuery(e.target.value)}
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
                {results.map((item) => (
                  <tr key={item.id} className="cursor-pointer" onClick={() => { localStorage.setItem('vendor', `${item.name}`); router.push(`/projects/${item.name}`); }}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="">
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">{totalItems}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <div
                        className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={() => { currentPage > 1 && setCurrentPage(currentPage - 1); }}
                      >
                        <span className="">Previous</span>
                        {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </div>
                      {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        10
                      </a>
                      <div
                        className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={() => { currentPage < totalPages && setCurrentPage(currentPage + 1); }}
                      >
                        <span className="">Next</span>
                        {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </SecuredRoute>
  );
}
