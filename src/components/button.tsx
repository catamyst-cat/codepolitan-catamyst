interface ButtonProps extends React.HTMLAttributes<HTMLElement> {}

export function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`px-5 py-3 text-white rounded-lg bg-teal-600 ${className}`}
    >
      {children}
    </button>
  );
}
