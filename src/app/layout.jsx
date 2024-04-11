import { Poppins } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "@/app/components/progress-bar";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bexon",
  description: "SAVING WORLD WITH GOOD DESIGNS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary-light`}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
