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
          __html: `
            body:has(.admin-layout) > nav,
            body:has(.admin-layout) > footer,
            body:has(.admin-layout) > div.fixed,
            body:has(.admin-layout) .sticky-mobile-cta,
            body:has(.admin-layout) > main ~ nav,
            body:has(.admin-layout) > main ~ footer,
            body:has(.admin-layout) > main ~ div.fixed {
              display: none !important;
            }
          `,
        }}
      />
      {children}
    </div>
  );
}
