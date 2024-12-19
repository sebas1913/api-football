import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "@/ui/organisms/navbar/navbar";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "500",
});

export const metadata: Metadata = {
    title: "API FOOTBALL",
    description: "Soccer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                <main className="main">
                    {children}
                </main>
            </body>
        </html>
    );
}
