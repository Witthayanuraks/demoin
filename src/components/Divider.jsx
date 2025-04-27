function Divider({ text = "" }) {
    return (
      <div className="flex items-center w-full my-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        {text && <span className="px-4 text-gray-700 font-medium">{text}</span>}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
      </div>
    );
  }
  
  export default Divider;
  