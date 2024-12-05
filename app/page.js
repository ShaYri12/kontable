import { Sidebar } from "./components/sidebar";
import { DashboardCards } from "./components/dashboard-cards";
import { StatsPanel } from "./components/stats";
import { Header } from "./components/header";
import Flechages from "./components/flechages";
import NoteCards from "./components/note-cards";
import PieCharts from "./components/pie-charts";
import ScoreChart from "./components/score-chart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#FBFBFB]">
      <Sidebar />
      <main className="flex-1 relative">
        <Header />
        <div className="xl:px-[30px] md:px-[20px] px-4 pb-[20px] pt-[110px]">
          <div className="max-w-[1440px] mx-auto space-y-[24px]">
            <DashboardCards />

            <div className="relative">
              <div className="bg-white border border-[#E5E9EB] rounded-[6px] px-[24px] py-[12px] flex flex-wrap items-center justify-between gap-4 shadow-md relative z-[3]">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-[#E8F1E7] rounded-[4px] flex items-center justify-center">
                    <img
                      src="/assets/enterprises.png"
                      alt="Net Enterprises"
                      className="w-[22px] h-auto"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Net Enterprises</div>
                    <div className="text-sm text-gray-500">
                      109 declarations
                    </div>
                  </div>
                </div>
                <button className="px-[24px] py-[8.5px] bg-black text-white rounded-[5px] text-[15px] font-[600]">
                  Configure
                </button>
              </div>
              <div className="bg-white border border-[#E5E9EB] rounded-[6px] px-[24px] py-[12px] flex items-center gap-4 shadow-md w-[98%] h-[20px] relative top-[-18px] mx-auto z-[2]"></div>
              <div className="bg-white border border-[#E5E9EB] rounded-[6px] px-[24px] py-[12px] flex items-center gap-4 shadow-md w-[95%] h-[20px] relative top-[-37px] mx-auto z-[1]"></div>
            </div>

            <StatsPanel />
            <div className="flex xl:flex-row flex-col gap-[16px]">
              <div className="xl:w-[44%]">
                <ScoreChart />
              </div>
              <div className="flex-1">
                <PieCharts />
              </div>
            </div>
            <Flechages />
            <NoteCards />
          </div>
        </div>
      </main>
    </div>
  );
}
