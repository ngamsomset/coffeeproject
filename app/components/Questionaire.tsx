'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
});

type FormData = z.infer<typeof FormSchema>;

export default function FormQuestionaire() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [showContent, setShowContent] = useState(true);
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
    },
  });
  const router = useRouter();
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
  const handleNext = () => {
    setShowContent(false); // Hide the form content
    setTimeout(() => {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setShowContent(true); // Show the form content after a short delay
    }, 500); // Adjust the delay as needed
  };

  const handlePrevious = () => {
    setShowContent(false); // Hide the form content
    setTimeout(() => {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
      setShowContent(true); // Show the form content after a short delay
    }, 500); // Adjust the delay as needed
  };
  const onSubmit = async (data: FormData) => {
    console.log('Submitting questionaire form', data);

    const {username,question1, question2, question3, question4, question5, question6, question7} = data;

    try {
      const response = await fetch('/api/auth/questionaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,question1, question2, question3, question4, question5, question6, question7 }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Process response here
      console.log('Registration Questionaire Successful', response);
      toast({ title: 'Registration Questionaire Successful' });
      router.push('/logintest');
    } catch (error: any) {
      console.error('Registration Questionaire Failed:', error);
      toast({ title: 'Registration Questionaire Failed', description: error.message });
    }
  };

  return (
    
    <div className="flex justify-center h-screen">
        
      <div className="w-full max-w-lg rounded-lg overflow-hidden mt-5">
        <h1 className="text-2xl font-semibold text-center mb-8">Let us know your coffee preference (choose the one that matches your taste the most)</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
        <div
          style={{
            opacity: showContent ? 1 : 0, // Apply transition effect based on showContent state
            transition: 'opacity 0.5s ease-in-out', // Define the transition effect
          }}
        >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            
            {currentQuestion === 1 && (
              <FormField
                control={form.control}
                name="question1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mt-4">
                        <FormLabel>1. According to the origin of coffee bean, which one is your favourite?</FormLabel>
                        <div className="mt-2 space-y-2">
                          <label className="flex items-center">
                            <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                            <span className="text-sm">South America</span>
                          </label>
                          <label className="flex items-center">
                            <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                            <span className="text-sm">Central America</span>
                          </label>
                          <label className="flex items-center">
            <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
            <span className="text-sm">The Middle East</span>
          </label>
          <label className="flex items-center">
            <Input {...field} type="radio" value="4" className="h-4 w-4 mr-2" />
            <span className="text-sm">Africa</span>
          </label>
          <label className="flex items-center">
            <Input {...field} type="radio" value="5" className="h-4 w-4 mr-2" />
            <span className="text-sm">Southeast Asia</span>
          </label>
          <label className="flex items-center">
            <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
            <span className="text-sm">Others</span>
          </label>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            {currentQuestion === 2 && (
              <FormField
              control={form.control}
              name="question2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>2. What is your prefer roast level for your coffee?</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Light</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Medium</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Dark</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            {currentQuestion === 3 && (
              <FormField
              control={form.control}
              name="question3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>3. What is your prefer acidity level for your coffee? (pH)</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">4.85</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">4.90</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">4.95</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="4" className="h-4 w-4 mr-2" />
                        <span className="text-sm">5.00</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="5" className="h-4 w-4 mr-2" />
                        <span className="text-sm">5.05</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="6" className="h-4 w-4 mr-2" />
                        <span className="text-sm">5.10</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            {currentQuestion === 4 && (
              <FormField
              control={form.control}
              name="question4"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>4. What is your prefer body level for your coffee?</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Thin</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Medium</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Full</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            {currentQuestion === 5 && (
              <FormField
              control={form.control}
              name="question5"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>5. What kind of brewing method do you prefer?</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Boiling (Cowboy, Turkish)</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Steeping</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Dripping</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="4" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Pressure</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            {currentQuestion === 6 && (
              <FormField
              control={form.control}
              name="question6"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>6. What is the reasonable price range for a quality coffee in your opinion?</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Under $5</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">$5 to $7</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">$7 to $10</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="4" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Over $10</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            {currentQuestion === 7 && (
              <FormField
              control={form.control}
              name="question7"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>7. What type of coffee do you prefer? Please select from the following options</FormLabel>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="1" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Arabica</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="2" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Robusta</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="3" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Excelsa</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="4" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Liberica</span>
                      </label>
                      <label className="flex items-center">
                        <Input {...field} type="radio" value="0" className="h-4 w-4 mr-2" />
                        <span className="text-sm">Others</span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            )}
            
            {/* Buttons */}
            <div className="flex justify-between mt-8">
              {/* Render "Previous" button if not on the first question */}
              {currentQuestion > 1 && (
                <Button type="button" className='bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'onClick={handlePrevious}>
                  Previous
                </Button>
              )}

              {/* Render "Next" button if not on the last question */}
              {currentQuestion < 7 && (
                <Button type="button" className='bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleNext}>
                  Next
                </Button>
              )}

              {/* Render "Finish" button if on the last question */}
              {currentQuestion === 7 && (
                <Button type="submit" className="ml-auto bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Finish
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
    </div>
    </div>
  );
}