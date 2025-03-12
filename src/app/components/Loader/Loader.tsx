export default function Loader({
  loadingMsg,
  width,
}: {
  loadingMsg ?: string,
  width ?: number
}) {
  return (
    <section
      className=' w-[100%] h-[400px] flex justify-center flex-col items-center'
      style={{ width }}
      data-testid="loader"
    >
      <h2>{loadingMsg}</h2>
      <div className='loader'></div>
    </section>
  )
}
