import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto | Corevo" };
  }

  return {
    title: `${project.name} | Corevo`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/#projetos"
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              ← Voltar para projetos
            </Link>

            <div className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10">
              <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-300">
                {project.tag}
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              {project.logo ? (
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:max-w-md">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={project.logo}
                      alt={`Logo do app ${project.name}`}
                      fill
                      className={`object-contain ${
                        project.disableLogoBlend ? "" : "mix-blend-screen"
                      } ${
                        project.iosIconStyle
                          ? project.iconWithoutWhiteFrame
                            ? "rounded-[22%] object-cover"
                            : "rounded-[22%] bg-white object-cover p-0.5"
                          : ""
                      }`}
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold tracking-tight text-white">
                      {project.logoTitle ?? project.name}
                    </p>
                    {project.logoSubtitle ? (
                      <p className="text-sm text-slate-400">
                        {project.logoSubtitle}
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <p className="mt-4 max-w-3xl text-lg text-slate-300">
                {project.summary}
              </p>
              <p className="mt-5 max-w-3xl leading-relaxed text-slate-400">
                {project.description}
              </p>
              {project.appStoreUrl ? (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-gradient-corevo px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:brightness-110"
                    >
                      Download na Apple Store
                    </a>
                    {project.playStoreUrl ? (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                      >
                        Download na Play Store
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {!project.appStoreUrl && project.playStoreUrl ? (
                <div className="mt-6">
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
                  >
                    Download na Play Store
                  </a>
                </div>
              ) : null}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Destaques
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="text-sm text-slate-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Plataforma
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {(project.websiteUrl || project.instagramUrl) && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/[0.08]"
                  >
                    Site oficial
                  </a>
                ) : null}
                {project.instagramUrl ? (
                  <a
                    href={project.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/[0.08]"
                  >
                    Instagram
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
