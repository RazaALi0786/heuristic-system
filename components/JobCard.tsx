export default function JobCard({ title, description, location }: any) {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="mt-3 text-sm text-gray-500">📍 {location}</p>
    </div>
  );
}
