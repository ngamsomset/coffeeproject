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
    },
  });
  const router = useRouter();


  const onSubmit = async (data: FormData) => {
    console.log('Submitting form', data);
    
    const { username: email, password, fullname, birthday, gender, nationality } = data;
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fullname, birthday, gender, nationality }),
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='example@example.com' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Password' {...field} type='password' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fullname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Ex. John Doe' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='birthday'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birthday</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} type='date' />
              </FormControl>
            </FormItem>
          )}
        />
                <FormField
  control={form.control}
  name="gender"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Gender</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
          <label>
            <Input {...field} type="radio" value="male" />
            Male
          </label>
          <label>
            <Input {...field} type="radio" value="female" />
            Female
          </label>
          <label>
            <Input {...field} type="radio" value="prefer_not_to_say" />
            Prefer not to say
          </label>
        </div></>
      </FormControl>
    </FormItem>
  )}
/>

                <FormField
          control={form.control}
          name='nationality'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationality</FormLabel>
              <FormControl>
                <Input placeholder='Ex. Australian' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
