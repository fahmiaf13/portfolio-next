interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`${className} bg-milk max-h-[550px] shadow-lg w-full p-6 rounded-xl border-darker/10 border-2`}>{children}</div>;
}

export const CardHeader = ({ children, className }: CardProps) => <div className={`${className} flex justify-center items-center gap-2`}>{children}</div>;
export const CardContent = ({ children, className }: CardProps) => <div className={`${className} items-center flex flex-col`}>{children}</div>;
export const CardFooter = ({ children, className }: CardProps) => <div className={`${className} items-center flex flex-col`}>{children}</div>;
