import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import { authOptions } from '@/app/lib/auth';


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
