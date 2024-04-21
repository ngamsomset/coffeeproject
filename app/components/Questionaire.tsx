'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import React, { useEffect } from 'react';
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
    username: z.string(),
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
        username: '',
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
  useEffect(() => {
    // Retrieve form data from local storage
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const { username } = JSON.parse(storedData);
      console.log('Parsed form data:', username); // Log the parsed data to the console
      form.setValue('username', username); // Set the username value in the form
      // Set default form values with the retrieved data for other questions
      
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const onSubmit = async (data: FormData) => {
    console.log('Submitting questionaire form', data);

    const {username,question1, question2, question3, question4, question5, question6, question7, question8, question9 } = data;

    try {
      const response = await fetch('/api/auth/questionaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,question1, question2, question3, question4, question5, question6, question7, question8, question9 }),
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
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
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
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="4"
          />
          Colombia 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="5"
          />
          Other
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question2"
  render={({ field }) => (
    <FormItem>
      <FormLabel>2. What is your prefer roast level for your coffee?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Light
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Light-Medium 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="3"
          />
          Medium
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="4"
          />
          Medium-Dark  
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="5"
          />
          Dark
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question3"
  render={({ field }) => (
    <FormItem>
      <FormLabel>3. What is your prefer acidity level for your coffee?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Light
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Light-Medium 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="3"
          />
          Medium
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="4"
          />
          Medium-Dark  
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="5"
          />
          Dark
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question4"
  render={({ field }) => (
    <FormItem>
      <FormLabel>4. What is your prefer body level for your coffee?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Low
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Low-Medium 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="3"
          />
          Medium
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="4"
          />
          Medium-High  
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="5"
          />
          High
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question5"
  render={({ field }) => (
    <FormItem>
      <FormLabel>5. What kind of brewing method do you prefer?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Espresso
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Filter 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="3"
          />
          French press 
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="4"
          />
          Cold brew  
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="5"
          />
          Other
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question6"
  render={({ field }) => (
    <FormItem>
      <FormLabel>6. Do you take price into an account?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Yes!
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          I don’t mind paying extra for a good cup of coffee!  
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question7"
  render={({ field }) => (
    <FormItem>
      <FormLabel>7. Do you take a cafe atmosphere into an account?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Yes!
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Not really  
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question8"
  render={({ field }) => (
    <FormItem>
      <FormLabel>8. Normally do you sit in or take away?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label>
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Sit in
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          Take away 
        </label></div>
        </>
      </FormControl>
      </FormItem>
  )}
  />
  <FormField
  control={form.control}
  name="question9"
  render={({ field }) => (
    <FormItem>
      <FormLabel>9. Do you prefer go to a cafe that serves food?</FormLabel>
      <FormControl>
        <><div style={{ display: 'flex', gap: '10px' }}>
        <label >
          <Input
            {...field}
            type="radio"
            value="1"
          />
          Definitely yes
        </label>
        <label>
          <Input
            {...field}
            type="radio"
            value="2"
          />
          I don’t mind 
        </label></div>
        </>
      </FormControl>
    </FormItem>
  )}
  />


        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
