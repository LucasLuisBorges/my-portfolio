import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface IProps {
  name: string;
  office: string;
  src: string;
  className?: string;
}

export function SkillsCard({ name, office, src, className }: IProps) {
  return (
    <Card className={cn('flex flex-col justify-between text-primary bg-foreground', className)}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{office}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          alt='Imagem do projeto'
          src={src}
          height={300}
          width={400}
          className='rounded-xl'
        />
      </CardContent>
    </Card>
  );
}