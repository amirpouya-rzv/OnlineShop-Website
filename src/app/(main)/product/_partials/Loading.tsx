import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-4 border rounded-md shadow p-4"
        >
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-48 w-full rounded-md" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-10 w-full mt-auto" />
        </div>
      ))}
    </div>
  );
}
