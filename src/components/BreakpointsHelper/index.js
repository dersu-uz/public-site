const BreakpointsHelper = () => {
  const breakpointClasses = {
    'sm': 'sm:block',
    'md': 'md:block',
    'lg': 'lg:block',
    'xl': 'xl:block',
    '2xl': '2xl:block',
  }

  return (
    <div className="fixed top-3 left-3 bg-red-500 text-white font-sans p-2 ">
      {Object.keys(breakpointClasses).map((breakpoint, i) => {
        const className = `hidden ${breakpointClasses[breakpoint]}`
        return (
          <div key={i} className={className}>
            {breakpoint}
          </div>
        )
      })}
    </div>
  )
}

export default BreakpointsHelper
