// LoginFormWithImage.tsx
import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        
        <div className="w-full p-8 lg:w-5/5">
    <h1 className="text-2xl font-semibold text-center">Create an account</h1>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                value=""
                type="text"
                placeholder="myemail@example.com"
              />
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value=""
                type="password"
                placeholder="password"
                
              />
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="confirmpass">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpass"
                type="password"
                placeholder="Confirm Password"
              />
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value=""
                type="text"
                placeholder="Fullname"
              />
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="birthday">
                Birthday
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value="birthday"
                type="date"
                
              />
              <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="gender">
                Gender
              </label>
              <div className="flex">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="gender"
            value="male"
            
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="radioDefault01"
          >
          Male
          </label>
      </div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ml-4">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="gender"
            value="female"
            
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="radioDefault02"
          >
          Female
          </label>
      </div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ml-4">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="gender"
            value="noinfogender"
            
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="radioDefault03"
          >
          Prefer not to say
          </label>
      </div>
      </div>
      <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="nationality">
                Nationality
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ex. Australian"
              />  
        {/* Below this line is the questionaire section */}
        <div className="bg-question p-1 pl-4 mt-4 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">

        
        <h1 className="block text-gray-700 font-bold text-xl mt-5">
            Let us know your coffee preference (choose the one that matches your taste the most)
        </h1>
        <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question1">
        1. According to the origin of coffee bean, which one is your favourite?
              </label>
              <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question1" value="ethiopia"></input>
      <span className="ml-2">Ethiopia</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question1" value="kenya"></input>
      <span className="ml-2">Kenya</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question1" value="sumatra"></input>
      <span className="ml-2">Sumatra</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question1" value="columbia"></input>
      <span className="ml-2">Columbia</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question1" value="other"></input>
      <span className="ml-2">Other</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question2">
        2. What is your prefer roast level for your coffee?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question2" value="light"></input>
      <span className="ml-2">Light</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question2" value="lightmedium"></input>
      <span className="ml-2">Light-Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question2" value="medium"></input>
      <span className="ml-2">Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question2" value="mediumdark"></input>
      <span className="ml-2">Medium-Dark</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question2" value="dark"></input>
      <span className="ml-2">Dark</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question3">
        3. What is your prefer acidity level for your coffee?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question3" value="light"></input>
      <span className="ml-2">Light</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question3" value="lightmedium"></input>
      <span className="ml-2">Light-Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question3" value="medium"></input>
      <span className="ml-2">Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question3" value="mediumdark"></input>
      <span className="ml-2">Medium-Dark</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question3" value="dark"></input>
      <span className="ml-2">Dark</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question4">
        4. What is your prefer body level for your coffee?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question4" value="low"></input>
      <span className="ml-2">Low</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question4" value="Low-Medium"></input>
      <span className="ml-2">Low-Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question4" value="medium"></input>
      <span className="ml-2">Medium</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question4" value="mediumhigh"></input>
      <span className="ml-2">Medium-High</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question4" value="High"></input>
      <span className="ml-2">High</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question5">
        5. What kind of brewing method do you prefer?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question5" value="espresso"></input>
      <span className="ml-2">Espresso</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question5" value="filter"></input>
      <span className="ml-2">Filter</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question5" value="frenchpress"></input>
      <span className="ml-2">French press</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question5" value="Cold brew"></input>
      <span className="ml-2">Cold brew</span>
    </label>
    <label className="inline-flex items-center ml-6 lg:w-1/6">
      <input type="radio" className="form-radio" name="question5" value="Other"></input>
      <span className="ml-2">Other</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question6">
        6. Do you take price into an account?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question6" value="yes"></input>
      <span className="ml-2">Yes!</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="radio" className="form-radio" name="question6" value="no"></input>
      <span className="ml-2">I don’t mind paying extra for a good cup of coffee!</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question7">
        7. Do you take a cafe atmosphere into an account?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question7" value="yes"></input>
      <span className="ml-2">Yes!</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="radio" className="form-radio" name="question7" value="no"></input>
      <span className="ml-2">Not really</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question8">
        8. Normally do you sit in or take away?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question8" value="sitin"></input>
      <span className="ml-2">Sit in</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="radio" className="form-radio" name="question8" value="takeaway"></input>
      <span className="ml-2">Take away</span>
    </label>
  </div>
  <label className="block text-gray-700 text-md font-bold mt-2" htmlFor="question9">
        9. Do you prefer go to a cafe that serves food?
              </label>
  <div className="mt-2">
    <label className="inline-flex items-center lg:w-1/6">
      <input type="radio" className="form-radio" name="question9" value="sitin"></input>
      <span className="ml-2">Definitely yes</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input type="radio" className="form-radio" name="question9" value="takeaway"></input>
      <span className="ml-2">I don't mind</span>
    </label>
    </div>
  </div>
              











            </div>
            {/* Other input fields */}
            {/* Add your signup form fields here */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <button 
              className="bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              
            >
              Submit
            </button>
            </div>
          </form>
          
            <div className="mt-4 flex flex-col items-center pd-1">
            
             
          </div>
        </div>

      </div>
     
     
  
  );
};

export default Signup;
