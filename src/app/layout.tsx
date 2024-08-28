import { DevLinkProvider } from "../../devlink/DevLinkProvider";
import { useEffect } from "react";
import"../../backup/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DevLinkProvider>
      {children}
    </DevLinkProvider>
  );
}
