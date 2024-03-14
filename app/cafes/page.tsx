import React from 'react';
import Search from '../components/Search';
import CafeList from '../components/CafeList';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import { fetchCafePages } from '../lib/data';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCafePages(query);

  return (
    <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh]">

      <h1 className="text-3xl text-center mb-10 text-[#582F0E]">List of Cafés</h1>
      <div className='mb-12'>
        <Search placeholder="Search cafes..." />
      </div>
      <Suspense key={query + currentPage} fallback={<Loading />}>
        <CafeList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
}
