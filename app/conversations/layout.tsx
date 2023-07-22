import Sidebar from "../components/sidebar/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar>
        <div className="h-full">{children}</div>
      </Sidebar>
    </div>
  );
}
