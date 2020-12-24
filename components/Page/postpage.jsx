import Header from '../Header'
import Footer from '../Footer'
import { PostCenteredColumn }  from '../Layouts'

export default function PostPage({ children }) {
    return (
      <>
        <Header />
        <PostCenteredColumn>
          <div className="px-4 lg:px-0">
            {children}
            <Footer />
          </div>
        </PostCenteredColumn>
      </>
    )
  }