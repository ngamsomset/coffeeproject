import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from '../components/loginform';

export default async function LoginPage() {
  const session = await getServerSession();
  console.log({ session });

  if (session) {
    redirect('/');
  }

  return (
    <section className='h-[75vh] flex items-center justify-center'>
      <div className='w-[600px] p-12'>
        <LoginForm />
      </div>
    </section>
  );
}
