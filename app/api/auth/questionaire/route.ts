// app>api>auth>register>route.ts

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
const apiUrl = process.env.NEXT_ML_API_URL;



export async function POST(request: Request) {
  try {
    const { question1, question2, question3, question4, question5, question6, question7, username } = await request.json();
    const userIdResponse = await sql`SELECT id FROM testinguser WHERE email = ${username}`;
    const userId = userIdResponse.rows[0].id;

    console.log({ question1, question2, question3, question4, question5, question6, question7,  username });


    const response =
      await sql`INSERT INTO questionaire (question1, question2, question3, question4, question5, question6, question7,email) VALUES (${question1}, ${question2},${question3},${question4},${question5},${question6},${question7},${username})`;
      if(apiUrl){
        const apiResponse = await fetch(`${apiUrl}/users/${userId}/responses`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        responses: [
          { questionId: "1", value: question1 },
          { questionId: "2", value: question2 },
          { questionId: "3", value: question3 },
          { questionId: "4", value: question4 },
          { questionId: "5", value: question5 },
          { questionId: "6", value: question6 },
          { questionId: "7", value: question7 }
        ]
      }),
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to send questionnaire responses to API');
    }

    console.log("Questionnaire responses sent to API successfully");
}
else{
    console.log("Problem about APIURL has been found");
  }
  }
   catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}