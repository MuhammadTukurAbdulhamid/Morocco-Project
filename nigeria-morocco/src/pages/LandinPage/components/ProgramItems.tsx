export default function ProgramItems({ title = "", content = "", icon = "" }) {
  return (
       <div className="w-full bg-[#E5E5EA] rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={icon}
          alt={title}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
