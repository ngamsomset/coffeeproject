// app>api>auth>register>route.ts

import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { email, password,fullname,birthday,gender,nationality,postcode } = await request.json();
    // YOU MAY WANT TO ADD SOME VALIDATION HERE

    console.log({ email, password,fullname,birthday, gender, nationality,postcode });

    const hashedPassword = await hash(password, 10);

    const response =
      await sql`INSERT INTO testinguser (email, password,fullname,birthdate,gender,nationality,postcode) VALUES (${email}, ${hashedPassword},${fullname},${birthday},${gender},${nationality},${postcode})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}