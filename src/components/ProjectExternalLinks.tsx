import { cn } from "@/lib/cn";

type ProjectExternalLinksProps = {
  websiteUrl?: string;
  instagramUrl?: string;
  className?: string;
};

export function ProjectExternalLinks({
  websiteUrl,
  instagramUrl,
  className,
}: ProjectExternalLinksProps) {
  if (!websiteUrl && !instagramUrl) return null;

  const linkClass =
    "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/[0.14]";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {websiteUrl ? (
        <a href={websiteUrl} target="_blank" rel="noreferrer" className={linkClass}>
          Site oficial
        </a>
      ) : null}
      {instagramUrl ? (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Instagram
        </a>
      ) : null}
    </div>
  );
}
