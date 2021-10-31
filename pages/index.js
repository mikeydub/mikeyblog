export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="my-auto ml-4 md:ml-32 lg:ml-80">
        <h1 className="font-serif italic text-6xl">Mike Wen</h1>
        <p className="mt-2 text-sm w-96 leading-6">Making a Dent. Pursuing a Greater Good. Trying My Best. Founder of <a className="hover:text-gray-400 hover:underline" href="https://gallery.so/mikey">Gallery.</a> Find me on <a className="hover:text-gray-400 hover:underline" href="https://twitter.com/mikeybitcoin">Twitter</a> or <a className="hover:text-gray-400 hover:underline" href="https://instagram.com/mikeybitcoin">Insta.</a></p>
        {/* <p className="mt-2 text-sm"><a className="hover:text-gray-400 hover:underline" href="https://twitter.com/mikeybitcoin">Twitter.</a> <a className="hover:text-gray-400 hover:underline" href="https://instagram.com/mikeybitcoin">Insta.</a></p> */}
      </div>
    </div>
  )
}