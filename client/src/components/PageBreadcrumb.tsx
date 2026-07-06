import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbCrumb {
  label: string;
  href?: string; // omit for the current (last) page
}

interface PageBreadcrumbProps {
  crumbs: BreadcrumbCrumb[];
  className?: string;
}

/**
 * PageBreadcrumb – renders accessible breadcrumb navigation + BreadcrumbList JSON-LD schema.
 *
 * Usage:
 *   <PageBreadcrumb crumbs={[
 *     { label: "Home", href: "/" },
 *     { label: "Services", href: "/handyman-services/" },
 *     { label: "Drywall Repair" },
 *   ]} />
 */
export default function PageBreadcrumb({ crumbs, className }: PageBreadcrumbProps) {
  if (!crumbs || crumbs.length < 2) return null;

  const baseUrl = "https://herohandymanpro.com";

  // JSON-LD BreadcrumbList schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      ...(crumb.href ? { "item": `${baseUrl}${crumb.href}` } : {}),
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Visual breadcrumb */}
      <div className={`py-2 px-4 bg-muted/30 border-b border-border/40 text-sm ${className ?? ""}`}>
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <span key={index} className="inline-flex items-center gap-1.5">
                    <BreadcrumbItem>
                      {isLast || !crumb.href ? (
                        <BreadcrumbPage className="text-foreground/70 font-medium">
                          {crumb.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={crumb.href}
                          className="text-primary hover:text-primary/80 font-medium"
                        >
                          {crumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </span>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}
