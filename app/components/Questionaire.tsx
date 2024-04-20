'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
  question1: z.string().min(1, {
    message: 'The question 1 must be fill.',
  }),
  question2: z.string().min(1, {
    message: 'The question 2 must be fill.',
  }),
  question3: z.string().min(1, {
    message: 'The question 3 must be fill.',
  }),
  question4: z.string().min(1, {
    message: 'The question 4 must be fill.',
  }),
  question5: z.string().min(1, {
    message: 'The question 5 must be fill.',
  }),
  question6: z.string().min(1, {
    message: 'The question 6 must be fill.',
  }),
  question7: z.string().min(1, {
    message: 'The question 7 must be fill.',
  }),
  question8: z.string().min(1, {
    message: 'The question 8 must be fill.',
  }),
  question9: z.string().min(1, {
    message: 'The question 9 must be fill.',
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function FormQuestionaire() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',

    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Submitting questionaire form', data);

    const { question1, question2, question3, question4, question5, question6, question7, question8, question9 } = data;

    try {
      const response = await fetch('/api/auth/questionaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question1, question2, question3, question4, question5, question6, question7, question8, question9 }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Process response here
      console.log('Registration Questionaire Successful', response);
      toast({ title: 'Registration Questionaire Successful' });
    } catch (error: any) {
      console.error('Registration Questionaire Failed:', error);
      toast({ title: 'Registration Questionaire Failed', description: error.message });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
 
  

    <label>Let us know your coffee preference (choose the one that matches your taste the most)</label>
                <FormField
  control={form.control}
  name="question1"
  render={({ field }) => (
    <FormItem>
      <FormLabel>1. According to the origin of coffee bean, which one is your favourite?</FormLabel>
      <FormControl>
        <><label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Ethiopia
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Kenya
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="3"
          />
          Sumatra
        </label></>
      </FormControl>
    </FormItem>
  )}
/>

        

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
