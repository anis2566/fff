import AdminPanelLayout from "@/components/admin/layout";
import { AppKnockProviders } from "@/providers/qnock-provider";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AppKnockProviders>
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </AppKnockProviders>
  )
}