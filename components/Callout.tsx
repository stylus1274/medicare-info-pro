import { AlertTriangle, Info, CheckCircle } from "lucide-react";

type CalloutType = "warning" | "info" | "success";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

export default function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    warning: {
      wrapper: "bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />,
    },
    info: {
      wrapper: "bg-blue-50 border-l-4 border-[#1a3fa8] rounded-r-xl p-4",
      icon: <Info className="w-5 h-5 text-[#1a3fa8] flex-shrink-0 mt-0.5" />,
    },
    success: {
      wrapper: "bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4",
      icon: <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
    },
  };

  const { wrapper, icon } = styles[type];

  return (
    <div className={wrapper}>
      <div className="flex items-start gap-3">
        {icon}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
