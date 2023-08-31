import Board from '@/components/Board';
import MainLayout from '@/layouts/MainLayout';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {

  const res = await fetch(`http://localhost:5001/api/projects/${params.slug}`);
  // console.log('123', res.ok);
  if (!res.ok) {
    notFound();
  }

  return (
    <>
      <MainLayout>
          <div className="flex flex-col w-full">
            
          </div>
      </MainLayout>
    </>
  );
}
