import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
import axios from 'axios';
const qs = require('qs');
// import { createTransport } from 'nodemailer';

// const customeVerificationRequest = async ({
//   email,
//   url,
//   server,
//   from,
//   theme,
// }) => {
//   // const { identifier, url, provider, theme } = params;
//   const { host } = new URL(url);
//   // NOTE: You are not required to use `nodemailer`, use whatever you want.
//   const transport = createTransport(server);
//   const result = await transport.sendMail({
//     to: email,
//     from: from,
//     subject: `Sign in to ${host}`,
//     text: text({ url, host }),
//     html: html({ url, host, theme }),
//   });
//   const failed = result.rejected.concat(result.pending).filter(Boolean);
//   if (failed.length) {
//     throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
//   }

//   /**
//    * Email HTML body
//    * Insert invisible space into domains from being turned into a hyperlink by email
//    * clients like Outlook and Apple mail, as this is confusing because it seems
//    * like they are supposed to click on it to sign in.
//    *
//    * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
//    */
//   function html({ url, host, theme }) {
//     // const { url, host, theme } = params;

//     const escapedHost = host.replace(/\./g, '&#8203;.');

//     const brandColor = theme.brandColor || '#346df1';
//     const color = {
//       background: '#f9f9f9',
//       text: '#444',
//       mainBackground: '#fff',
//       buttonBackground: brandColor,
//       buttonBorder: brandColor,
//       buttonText: theme.buttonText || '#fff',
//     };

//     return `
// <body style="background: ${color.background};">
//   <table width="100%" border="0" cellspacing="20" cellpadding="0"
//     style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
//     <tr>
//       <td align="center"
//         style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//         // Sign in to <strong>${escapedHost}</strong>
//         Sign in to <strong> Luvely Words Web App</strong>
//       </td>
//     </tr>
//     <tr>
//       <td align="center" style="padding: 20px 0;">
//         <table border="0" cellspacing="0" cellpadding="0">
//           <tr>
//             <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
//                 target="_blank"
//                 style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
//                 in</a></td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//     <tr>
//       <td align="center"
//         style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
//         If you believe this mail was an error, or you did not request this email you can safely ignore it.
//       </td>
//     </tr>
//   </table>
// </body>
// `;
//   }

//   /** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
//   function text({ url, host }) {
//     return `Sign in to ${host}\n${url}\n\n`;
//   }
// };

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
      // sendVerificationRequest({
      //   identifier: email,
      //   url,
      //   server,
      //   from,
      //   theme,
      //   // provider: { server, from },
      // }) {
      //   /* your function */
      //   customeVerificationRequest({ email, url, server, from, theme });
      // },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/error',
    verifyRequest: '/verify',
  },
  events: {
    // async signIn(message) {
    //   /* on successful sign in */
    //   console.log('Sign In =>', message);
    //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/histories`, {
    //     data: {
    //       name: 'Sign In',
    //       fullName: message?.user?.name ?? '',
    //       type: 'Sign In',
    //       email: message?.user?.email ?? '',
    //     },
    //   });
    // },
    // async signOut(message) {
    //   /* on signout */
    //   console.log('Sign Out =>', message);

    // },
    async createUser(message) {
      /* user created */
      console.log('Create User =>', message);
      // *check for email in database first
      const query = qs.stringify(
        {
          filters: {
            email: {
              $eq: message?.user?.email,
            },
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles?${query}`
      );
      if (data?.data.length == 0) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-profiles`,
          {
            data: {
              mongoID: message?.user?.id,
              fullName: message?.user?.name ?? '',
              email: message?.user?.email,
              imageURL:
                message?.user?.image ??
                'https://avatars.dicebear.com/api/micah/:child.svg?mouth[]=laughing&mouth[]=smile&glassesProbability=100',
              phoneNo: '',
              birthDay: '',
            },
          }
        );
      }
    },
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
  theme: {
    brandColor: '#529af1',
    logo: 'https://res.cloudinary.com/luvely/image/upload/v1657397882/luvely_words_2_vqooc2.png',
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  // async session({ session, token, user }) {
  //   session.user = user;
  //   session.text = 'testing';
  //   console.log(session);
  //   return session;
  // },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
