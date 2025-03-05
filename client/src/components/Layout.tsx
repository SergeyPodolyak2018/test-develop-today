import { ReactNode } from "react";

type Props = {
  children: string | ReactNode | ReactNode[];
};
export default function Layout({ children }: Props) {
  return <div>{children}</div>;
}
