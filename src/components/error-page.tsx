'use client'

import { cva, type VariantProps } from "class-variance-authority";

import { Button } from '@/components/ui/button';

const pageVariants = cva(
  "flex items-center justify-center bg-background text-primary rounded-xl",
  {
    variants: {
      variant: {
        full: "h-screen",
        medium: "h-[80vh]",
      },
    },
    defaultVariants: {
      variant: "full",
    },
  }
)

export interface PageProps extends VariantProps<typeof pageVariants> { }

export function ErrorPage({ variant }: PageProps) {
  return (
    <div className={pageVariants({ variant })}>
      <div className="bg-foreground p-14 shadow-md rounded-md space-y-4">
        <h1 className="text-3xl font-bold">Ops! Ocorreu um erro</h1>
        <p className="text-primary">Desculpe, algo deu errado nesta página.</p>
        <Button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-secondary"
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  )
}