import { DevLinkProvider } from "../../devlink/DevLinkProvider";
import"../../backup/global.css"
import"./globals.css"

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
