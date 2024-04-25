import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
const apiUrl = process.env.NEXT_ML_API_URL;

export async function POST(request: Request) {
  try {
    const { email, password, fullname, birthday, gender, nationality, postcode } = await request.json();
    
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log({ email, password, fullname, birthday, gender, nationality, postcode });

    const hashedPassword = await hash(password, 10);

    // Map gender to numerical value
    const genderValue = mapGenderToValue(gender);

    // Insert user into your database
    const response = await sql`INSERT INTO testinguser (email, password, fullname, birthdate, gender, nationality, postcode) 
                                VALUES (${email}, ${hashedPassword}, ${fullname}, ${birthday}, ${gender}, ${nationality}, ${postcode}) 
                                RETURNING id`;

    const insertedUserId = response.rows[0].id;
    console.log("Inserted user ID:", insertedUserId);

    // Now, send data to the API endpoint at localhost:5001/users/<id>
  if(apiUrl){
    const apiResponse = await fetch(`${apiUrl}/users/${insertedUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postcode, gender: genderValue, age: calculateAge(birthday) }), // Assuming you have a function to calculate age from birthday
    });
  

    if (!apiResponse.ok) {
      throw new Error('Failed to send data to API');
    }
    console.log("Data sent to API successfully");
  }
  else
  {
    console.log("Problem about APIURL has been found");
  }
    
  } catch (e) {
    console.error({ e });
    return new Response("Failed to send data to API", { status: 500 }); // Return a response with an error status code and message
  }

  return NextResponse.json({ message: "success" });
}

function calculateAge(birthday: string): number {
  // Implement your logic to calculate age from birthday
  const birthdate = new Date(birthday);
  const age = new Date().getFullYear() - birthdate.getFullYear();
  return age;
}

function mapGenderToValue(gender: string): number {
  // Map gender string to numerical value
  switch (gender.toLowerCase()) {
    case 'male':
      return 0;
    case 'female':
      return 1;
    case 'prefer_not_to_say':
      return 2;
    default:
      return -1; // Unknown gender, handle accordingly
  }
}
