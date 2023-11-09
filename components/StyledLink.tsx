import clsx from "clsx";
import Link from "next/link";

export default function StyledLink({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      className={clsx(
        "text-amber-600 hover:text-amber-900 transition-colors underline",
        className,
      )}
      {...rest}
    />
  );
}
