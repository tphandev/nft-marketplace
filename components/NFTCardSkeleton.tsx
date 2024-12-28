export default function NFTCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 animate-pulse skeleton-card">
      <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 skeleton-image" />
      <div className="space-y-3 skeleton-details">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-700 rounded w-1/2" />
        <div className="h-4 bg-gray-700 rounded w-2/3" />
      </div>
    </div>
  );
}
