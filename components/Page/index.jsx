import Header from '../Header'
import Footer from '../Footer'
import CenteredColumn  from '../Layouts'

export default function Page({ children }) {
    return (
      <>
        <CenteredColumn>
          <div className="px-6 lg:px-0">
            <Header />
            {children}
            <Footer />
          </div>
        </CenteredColumn>
      </>
    )
  }


