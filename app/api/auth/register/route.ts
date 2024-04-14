// app>api>auth>register>route.ts

import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password,fullname,birthday } = await request.json();
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log({ email, password,fullname,birthday });

    const hashedPassword = await hash(password, 10);

    const response =
      await sql`INSERT INTO testinguser (email, password,fullname,birthdate) VALUES (${email}, ${hashedPassword},${fullname},${birthday})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}