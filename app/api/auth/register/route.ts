// app>api>auth>register>route.ts

import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password,fullname,birthday,gender,nationality } = await request.json();
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log({ email, password,fullname,birthday, gender, nationality });

    const hashedPassword = await hash(password, 10);

    const response =
      await sql`INSERT INTO testinguser (email, password,fullname,birthdate,gender,nationality) VALUES (${email}, ${hashedPassword},${fullname},${birthday},${gender},${nationality})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}