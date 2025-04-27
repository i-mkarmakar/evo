"use client";

import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import { AlignLeft, MessageSquarePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex flex-col flex-1 items-center justify-center px-4 pb-8 text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <AlignLeft
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
            />
            <MessageSquarePlus className="opacity-70" onClick={() => {}} />
          </div>
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-6" />
                <p className="text-2xl font-medium">Hi, I'm Evo.</p>
              </div>
              <p className="text-sm mt-2">How can I help you today?</p>
            </>
          ) : (
              <div>
                <Message role='user' content='what is nextjs ?'/>
            </div>
          )}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          <p className="text-xs absolute bottom-1 text-gray-500">
            AI-generated, for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
