import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { tv } from 'tailwind-variants';

interface IProps {
  icon: LucideIcon;
  name: string;
  count: string | undefined;
  color: "data" | "city" | "user" | "file";
  className: string;
}

const card = tv({
  base: "",
  variants: {
    color: {
      data: "text-[#00DEA3]",
      city: "text-[#192A3E] dark:text-[#5286D4]",
      user: "text-[#6FD1F6]",
      file: "text-[#164C73] dark:text-[#DADADA]",
    },
  },
  defaultVariants: {
    size: "md",
    color: "data",
  }
});

export function DataCard({ icon: Icon, name, count, color, className }: IProps) {
  return (
    <div className={cn('flex bg-background w-full h-40 rounded-2xl p-6 items-center justify-around', className)}>
      <Icon size={48} className={card({ color: color })} />
      <div className='flex flex-col items-center gap-1'>
        <span className='text-base font-medium'>{name}</span>
        <span className='text-2xl font-bold'>{count}</span>
      </div>
    </div>
  )
}