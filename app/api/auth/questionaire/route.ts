// app>api>auth>register>route.ts

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { question1, question2, question3, question4, question5, question6, question7, question8, question9 } = await request.json();


    console.log({ question1, question2, question3, question4, question5, question6, question7, question8, question9 });


    const response =
      await sql`INSERT INTO testinguser (question1, question2, question3, question4, question5, question6, question7, question8, question9) VALUES (${question1}, ${question2},${question3},${question4},${question5},${question6},${question7},${question8},${question9})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}