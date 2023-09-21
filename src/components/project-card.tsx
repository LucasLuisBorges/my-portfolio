import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  name: string;
  office: string;
  src: string;
  link: string;
  className?: string;
}

export function ProjectCard({ name, office, src, link, className }: IProps) {
  return (
    <Card className={cn('flex cursor-pointer flex-col justify-between text-primary bg-foreground', className)}>
      <Link href={link} target='_blank'>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{office}</CardDescription>
        </CardHeader>
        <CardContent className='relative w-full h-[300px]'>
          <Image
            alt='Imagem do projeto'
            src={src}
            fill
            className='rounded-xl bg-cover'
          />
        </CardContent>
      </Link>
    </Card>
  );
}