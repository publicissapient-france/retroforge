import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

import { Retrospective } from '~/common/types/Restrospective'

export type RetrospectiveDetailsProps = {
  retrospective: Retrospective
}

export default function RetrospectiveDetails({ retrospective }: RetrospectiveDetailsProps) {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState<string | undefined>(undefined)

  async function getData() {
    const result = await fetch(`/retros/${retrospective.filename}`)
    const content = await result.text()
    console.log('content', content)
    setContent(content)
    setLoading(false)
  }

  useEffect(() => {
    getData().then(() => {})
  }, [])

  if (loading) {
    <p>Loading ...</p>
  }

  return (
    <Markdown>{content}</Markdown>
  )
}
