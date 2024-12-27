import React from "react";
import Image from "next/image";

export interface CreatorProps {
  name: string;
  isOnline: boolean;
  avatarUrl: string;
}

const Creator: React.FC<CreatorProps> = ({ name, isOnline, avatarUrl }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative bg-white  rounded-full w-8 h-8">
        <Image
          src={avatarUrl}
          alt={`${name}'s avatar`}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div
          data-testid="status-indicator"
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </div>
      <span className="caption-12-medium text-white">{name}</span>
    </div>
  );
};

export default Creator;
