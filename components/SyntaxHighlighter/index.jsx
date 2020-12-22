import * as React from 'react'
import Prism from 'prismjs'
import { loadLanguages } from 'prismjs/components'

loadLanguages(['sql']);

export default function SyntaxHighlighter({ data }) {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [data])
  return null
}


// import React from "react"
// import Prism from "prismjs"

// export class SyntaxHighlighter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.ref = React.createRef()
//   }
//   componentDidMount() {
//     this.highlight()
//   }
//   componentDidUpdate() {
//     this.highlight()
//   }
//   highlight = () => {
//     if (this.ref && this.ref.current) {
//       Prism.highlightElement(this.ref.current)
//     }
//   }
//   render() {
//     const { code, plugins, language } = this.props
//     return (
//       <pre className={!plugins ? "" : plugins.join(" ")}>
//         <code ref={this.ref} className={`language-${language}`}>
//           {code.trim()}
//         </code>
//       </pre>
//     )
//   }
// }