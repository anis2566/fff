"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import { Star } from "lucide-react";
import { Separator } from "../ui/separator";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 bg-card px-8 py-6 md:w-[450px] flex flex-col justify-between gap-4"
            key={item.name}
          >
            <div className="flex-1 h-full flex flex-col justify-center items-center space-y-3">
                <div className="flex items-center gap-x-1">
                    <Star className="text-amber-500 fill-amber-500" />
                    <Star className="text-amber-500 fill-amber-500" />
                    <Star className="text-amber-500 fill-amber-500" />
                    <Star className="text-amber-500 fill-amber-500" />
                    <Star className="text-amber-500 fill-amber-500" />
                </div>
                <p className="text-center">
                This is the best course in the world I have ever seen in my life. It is very helpful for the beginners. Everyone should try it. This is too good.
                </p>
                </div>
                <Separator className="bg-muted-foreground" />
            <div className="flex gap-x-3 w-full">
                <Image
                    src="/profile.jpeg"
                    alt="Logo"
                    height={40}
                    width={40}
                    className="rounded-full w-12 h-12 flex-shrink-0"
                 />
                 <div>
                    <h2 className="text-lg font-semibold">Anichur Anis</h2>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                 </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
