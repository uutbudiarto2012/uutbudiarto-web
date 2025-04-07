"use client";

import { cn } from "@/lib/utils";

export default function Excerpt({ html, className }: { html: string,className?:string }) {
  return <div className={cn(
    'line-clamp-2',
    className
  )} dangerouslySetInnerHTML={{ __html: html }} />;
}
