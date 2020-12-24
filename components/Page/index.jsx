import Header from '../Header'
import Footer from '../Footer'
import CenteredColumn  from '../Layouts'

export default function Page({ children }) {
    return (
      <>
        <Header />
        <CenteredColumn>
          <div className="px-6 lg:px-0">            
            {children}
            <Footer />
          </div>
        </CenteredColumn>
      </>
    )
  }


