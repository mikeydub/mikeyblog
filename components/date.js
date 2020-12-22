import { parseJSON, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseJSON(dateString)
  return <time className='uppercase' dateTime={dateString}>{format(date, 'MMM d, yyy')}</time>
}