import Header from '../Header'
import Footer from '../Footer'

export default function Page({ children }) {
    return (
      <>
        <Header />
        <div className="px-4 py-32 lg:px-0">{children}</div>
        <Footer />
      </>
    )
  }