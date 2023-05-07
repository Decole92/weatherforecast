"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0c417a] to-[#3579c2] p-10">
      <Card className="max-w-4xl">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by Next.js 13.3, OpenAI, Tremor 2.2, Tailwind Css and More!
        </Subtitle>
        <Divider />
        <Card className="bg-gradient-to-br from-[#0c417a] to-[#3579c2]">
          <CityPicker />
        </Card>
      </Card>
    </main>
  );
}
