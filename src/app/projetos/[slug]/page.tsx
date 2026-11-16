import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocusPage } from "@/components/LocusPage";
import { ProjectArticle } from "@/components/ProjectArticle";
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
    title: project.metaTitle ?? `${project.name} | Corevo`,
    description: project.metaDescription ?? project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "locus") {
    return <LocusPage project={project} />;
  }

  return <ProjectArticle project={project} />;
}
