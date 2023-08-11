import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface IProps {
  name: string;
  office: string;
  description: string;
  date: string;
  className?: string;
}

export function WorkCard({ name, office, description, date, className }: IProps) {
  return (
    <Card className={cn('flex flex-col justify-between text-primary bg-foreground', className)}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{office}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
    </Card>
  )
}