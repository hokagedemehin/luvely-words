import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      // server: process.env.EMAIL_SERVER,
      // from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  events: {
    // async signIn(message) {
    //   /* on successful sign in */
    //   console.log('Sign In =>', message);
    // },
    // async signOut(message) {
    //   /* on signout */
    //   console.log('Sign Out =>', message);
    // },
    // async createUser(message) {
    //   /* user created */
    //   console.log('Create User =>', message);
    // },
    // async updateUser(message) {
    //   /* user updated - e.g. their email was verified */
    // },
    // async linkAccount(message) {
    //   /* account (e.g. Twitter) linked to a user */
    //   console.log('Linked Account =>', message);
    // },
    // async session(message) {
    //   /* session is active */
    //   console.log('Session Event =>', message);
    // },
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
