export default function Loader({
  loadingMsg,
  width,
}: {
  loadingMsg ?: string,
  width ?: number
}) {
  return (
    <section
      className=' w-[100%] dark:bg-[#222] h-[200px] flex justify-center flex-col items-center w-[90%] 
        lg:h-[300px] m-[2rem]
      '
      style={{ width }}
      data-testid="loader"
    >
      <h2>{loadingMsg}</h2>
      <div className='loader'></div>
    </section>
  )
}
