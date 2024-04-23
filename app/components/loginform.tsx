'use client'
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import from 'next/router' instead of 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Submitting form', data);

    const { email, password } = data;

    try {
      const response: any = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      console.log({ response });
      if (!response?.error) {
        router.push('/');
        
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Process response here
      console.log('Login Successful', response);
      toast({ title: 'Login Successful' });
    } catch (error: any) {
      console.error('Login Failed:', error);
      toast({ title: 'Login failed, please try again' });
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      <div className="w-full p-8 lg:w-2/5">
        <h1 className="text-2xl font-semibold text-center">Welcome, MATE!</h1>
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="username"
              type="text"
              placeholder="myemail@example.com"
              {...form.register('email')} // Use form.register for input binding
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" 
              id="password"
              type="password"
              placeholder="password"
              {...form.register('password')} // Use form.register for input binding
            />
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
              Forgot Password?
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              type='submit'
              className='bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Opening....' : 'Login'}
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-2/5"></span>
            <a href="#" className="text-xs text-gray-500 uppercase">OR</a>
            <span className="border-b w-1/5 md:w-2/5"></span>
          </div>
          <div className="mt-4 flex flex-col items-center pd-1">
            <div className="mb-4">Sign up with us!</div>
            <div>
              <Link href="/signuptest">
              <button
                className="bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign up
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:block lg:w-3/5 bg-cover bg-hero opacity-78"></div>
    </div>
  );
}
