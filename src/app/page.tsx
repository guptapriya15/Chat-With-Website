"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [urlInput, setUrlInput] = useState("");
  const router = useRouter();

  const handleRedirect = () => {
    if (urlInput) {
      router.push(`/` + urlInput);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-300">
          Chat with Website
        </h1>
        <p className="text-lg text-gray-500">
          Enter a URL after the main URL to start chatting with a website.
        </p>
        <p className="text-lg text-gray-500">
          For eg. add your desired link after the main url localhost:3000/ +
          your url
        </p>
        <div className="mt-6">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Enter your URL"
            className="px-4 py-2 border border-gray-300 rounded-md bg-zinc-800 text-white"
          />
          <button
            onClick={handleRedirect}
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
