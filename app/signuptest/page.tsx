import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import FormPage from '../components/RegisterForm';

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <section className='bg-black flex items-center justify-center'>
      <div className='w-[600px] m-12 bg-[#EDE0D4]'>
        <FormPage />
      </div>
    </section>
  );
}
