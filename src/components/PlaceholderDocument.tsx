'use client' // renders on browser

import React from "react";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
  const router = useRouter();
  const handleClick = async() =>
  {
    // chekc pro or not and if over file limit push it to upgrade page
    router.push('/dashboard/upload');
  }
  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
<PlusCircleIcon className="w-16 h-16" />
  <p>Add a Document</p>
    </Button>
  );
}

export default PlaceholderDocument;
