import Header from '../Header'
import Footer from '../Footer'
import { PostCenteredColumn }  from '../Layouts'

export default function PostPage({ children }) {
    return (
      <>
        <PostCenteredColumn>
          <div className="px-4 lg:px-0">
            <Header />
            {children}
            <Footer />
          </div>
        </PostCenteredColumn>
      </>
    )
  }