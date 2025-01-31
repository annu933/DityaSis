// import Head from "next/head";

// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/component/navbar";
// import Footer from "@/component/footer";

// const inter = Inter({ subsets: ["latin"],
//   variable: '--font-inter',
//  });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//       <meta name="description" content={metadata.description} />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
//       </Head>
//       <body className={inter.className}>
//       <Navbar />
//         {children}
//         <Footer />
//         </body>
//     </html>
//   );
// }


import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";

// const interFont = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <meta name="description" content={metadata.description} /> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}
        {/* Use Inter font directly from Google Fonts */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" /> */}
        {/* Optionally, include other font weights as needed */}
      </Head>
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
