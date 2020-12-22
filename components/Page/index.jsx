import Header from '../Header'
import Footer from '../Footer'
import CenteredColumn from '../Layouts'

export default function Page({ children }) {
    return (
      <>
        <CenteredColumn>
          <Header />
          <div className="px-4 lg:px-0">{children}</div>
          <Footer />
        </CenteredColumn>
      </>
    )
  }