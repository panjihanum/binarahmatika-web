import { FadeUp } from "@/components/fade-up";
import { projectPortfolioSections } from "@/data/project-experience";

export function ProjectPortfolio() {
  const section = projectPortfolioSections[0];

  return (
    <div className="space-y-4">
      <FadeUp>
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
          <h3 className="text-lg font-semibold text-zinc-900">{section.title}</h3>
          <p className="mt-1 text-sm font-medium text-amber-700">
            {section.items.length} proyek
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-[56rem] text-left text-sm text-zinc-600">
              <thead className="text-xs uppercase text-zinc-500">
                <tr>
                  <th className="py-2 pr-4">No</th>
                  <th className="py-2 pr-4">Nama Proyek</th>
                  <th className="py-2 pr-4">Instansi/Perusahaan</th>
                  <th className="py-2 pr-4">Alamat</th>
                  <th className="py-2 pr-4">Pekerjaan</th>
                  <th className="py-2">Volume</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item) => (
                  <tr
                    key={`${item.no}-${item.name}`}
                    className="border-t border-zinc-200/60"
                  >
                    <td className="py-2 pr-4 font-medium text-zinc-900">
                      {item.no}
                    </td>
                    <td className="py-2 pr-4 text-zinc-900">{item.name}</td>
                    <td className="py-2 pr-4">{item.client}</td>
                    <td className="py-2 pr-4">{item.location}</td>
                    <td className="py-2 pr-4">{item.scope}</td>
                    <td className="py-2 text-amber-700">{item.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
