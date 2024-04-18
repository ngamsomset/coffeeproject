import CredentialsProvider from 'next-auth/providers/credentials';
import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 1800 // Sets token expiry to 30 minutes
    },

    pages: {
        signIn: '/logintest',
    },

    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                const response = await sql`
              SELECT * FROM testinguser WHERE email=${credentials?.email}
            `;
                const user = response.rows[0];

                const passwordCorrect = await compare(
                    credentials?.password || '',
                    user.password,
                );

                if (passwordCorrect) {
                    return {
                        id: user.id,
                        email: user.email,
                    };
                }

                console.log('credentials', credentials);
                return null;
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => ({
            ...session,
            ...token,
            user: {
                id: token.sub,
                email: token.email
            },
        }),
    },
};