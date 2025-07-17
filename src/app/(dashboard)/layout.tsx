export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main>{children}</main>
    </div>
  );
}