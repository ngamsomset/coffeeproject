'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter} from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { toast } from '@/app/components/ui/use-toast';


const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  fullname: z.string().min(1, {
    message: 'Fullname must be input',
  }),
  birthday: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  gender: z.string().min(1, {
    message: 'Please select any gender',
  }),
  nationality: z.string().min(6, {
    message: 'Please fill the nationality',
  }),
  postcode: z.string().min(4, {
    message: 'Postcode must be at least 4 characters.',
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function FormPage() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
      fullname: '',
      birthday: '',
      gender: '',
      nationality: '',
      postcode: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    console.log('Submitting form', data);

    const { username: email, password, fullname, birthday, gender, nationality, postcode } = data;

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fullname, birthday, gender, nationality, postcode }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Process response here
      console.log('Registration Successful', response);
      toast({ title: 'Registration Successful' });
      localStorage.setItem('formData', JSON.stringify(data));
      router.push('/questionaire');
    } catch (error: any) {
      console.error('Registration Failed:', error);
      toast({ title: 'Registration Failed', description: error.message });
    }
    
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      <div className="w-full p-8 lg:w-5/5">
        <h1 className="text-2xl font-semibold text-center">Create an account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} className='bg-white' />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" className='bg-white'/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex. John Doe" {...field} className='bg-white'/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Birthday</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" className='bg-white'/>
                  </FormControl>
                </FormItem>
              )}
            />
             <FormField
  control={form.control}
  name="gender"
  render={({ field }) => (
    <FormItem className='mb-2'>
      <FormLabel>Gender</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px', marginLeft:'10px' }}>
          <label style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'5px'}}>
          <Input {...field} type="radio" value="male" style={{ transform: 'scale(1.2)' }} />
            Male
          </label>
          <label style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'5px'}}>
            <Input {...field} type="radio" value="female" style={{ transform: 'scale(1.2)' }} />
            Female
          </label>
          <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
            <Input {...field} type="radio" value="prefer_not_to_say" style={{ transform: 'scale(1.2)' }} />
            <span style={{ whiteSpace: 'nowrap' }}>Prefer not to say</span>
          </label>
        </div></>
      </FormControl>
    </FormItem>
  )}
/>

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className='mb-2'>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex. Australian" {...field}className='bg-white' />
                  </FormControl>
                </FormItem>
              )}
            />
               <FormField
          control={form.control}
          name='postcode'
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel>Postcode</FormLabel>
              <FormControl>
                <Input placeholder='Enter your postcode' {...field}className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button type='submit' className='bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</Button>
        </div>
          </form>
        </Form>
      </div>
    </div>
  );
}