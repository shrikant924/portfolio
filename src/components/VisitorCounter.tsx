import useVisitorCount from "../hooks/useVisitorCount";

const VisitorCounter = () => {
  const count = useVisitorCount();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className="px-4 py-2 rounded-full
                      bg-white/80 dark:bg-slate-800/70
                      border border-slate-200 dark:border-slate-700
                      text-slate-900 dark:text-white
                      shadow-lg backdrop-blur-md"
      >
        👀 Visitors:{" "}
        <span className="font-bold text-blue-500">{count ?? "..."}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;
