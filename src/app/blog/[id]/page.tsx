import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
  // Temporary dummy content
  if (!params?.id) return notFound();

  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-2xl font-bold">Dummy Blog Page</h1>
      <p className="mt-4 text-gray-600">Blog ID: {params.id}</p>
    </div>
  );
}
