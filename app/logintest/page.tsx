import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from '../components/loginform';

export default async function LoginPage() {
  const session = await getServerSession();
  
  if (session) {
    redirect('/');
  }

  return (
    <section className='flex items-center justify-center'>
      <div className='w-[1200px] m-12 mb-3 pb-3'>
        <LoginForm />
      </div>
    </section>
  );
}
