import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

import { useCurrentLanguage } from '~/common/hooks/UseCurrentLanguage'
import { Retrospective } from '~/common/types/Restrospective'

import styles from './RetrospectiveDetails.module.css'

export type RetrospectiveDetailsProps = {
  retrospective: Retrospective
}

export default function RetrospectiveDetails({ retrospective }: RetrospectiveDetailsProps) {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState<string | undefined>(undefined)
  const { currentLanguage } = useCurrentLanguage()

  async function getData() {
    const result = await fetch(`/retros/${currentLanguage}/${retrospective.filename}`)
    const content = await result.text()
    setContent(content)
    setLoading(false)
  }

  useEffect(() => {
    getData().then(() => {})
  }, [currentLanguage])

  if (loading) {
    <p>Loading ...</p>
  }

  return (
    <div className={styles.details}>
      <Markdown>{content}</Markdown>
    </div>
  )
}
