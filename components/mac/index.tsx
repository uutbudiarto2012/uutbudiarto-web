import { MacbookScroll } from "@/components/ui/macbook-scroll";
import MainLogo from "../logo/MainLogo";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden w-full">
      <MacbookScroll
        title={
          <span className="text-slate-200">
            This Macbook is built with Tailwindcss. <br /> No kidding. xxx
          </span>
        }
        badge={
          <div className="text-white scale-50"><MainLogo /></div>
        }
        src={`/images/works/admin-2.png`}
        showGradient={false}
      />
    </div>
  );
}