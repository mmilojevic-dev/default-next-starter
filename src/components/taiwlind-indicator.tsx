export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="bottom-1 left-1 h-6 w-6 bg-gray-800 p-3 text-xs fixed z-50 flex items-center justify-center rounded-full font-mono text-white">
      <div className="sm:hidden block">xs</div>
      <div className="sm:block md:hidden hidden">sm</div>
      <div className="md:block lg:hidden hidden">md</div>
      <div className="lg:block xl:hidden hidden">lg</div>
      <div className="xl:block 2xl:hidden hidden">xl</div>
      <div className="2xl:block hidden">2xl</div>
    </div>
  )
}
