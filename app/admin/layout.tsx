import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Superior Power Electric",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "body:has(.admin-layout) > header, body:has(.admin-layout) > footer { display: none !important; }",
        }}
      />
      {children}
    </div>
  );
}
