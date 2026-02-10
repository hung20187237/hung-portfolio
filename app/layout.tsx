import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Trần Đức Hùng - Full-stack Developer",
    description: "Portfolio of Tran Duc Hung, a Full-stack Developer specializing in ReactJS, TypeScript, and Node.js.",
};

import NanoChatBot from "@/components/NanoChatBot";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" data-theme="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>
                {children}
                <NanoChatBot />
            </body>
        </html>
    );
}
