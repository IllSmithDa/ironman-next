export default function Loader({
  loadingMsg,
  width,
}: {
  loadingMsg ?: string,
  width ?: number
}) {
  return (
    <section
      className=' w-[100%] h-[300px] flex justify-center flex-col items-center
        lg:h-[400px]
      '
      style={{ width }}
      data-testid="loader"
    >
      <h2>{loadingMsg}</h2>
      <div className='loader'></div>
    </section>
  )
}
