import Image from "next/image";
import { Inter } from "next/font/google";
import { ClockP } from "./ClockP";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ClockP />
    </div>
  );
}
