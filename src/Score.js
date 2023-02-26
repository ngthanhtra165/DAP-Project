import React from 'react'
import { useState } from 'react'
import EssaySubmissionForm from './EssaySubmissionForm'
const Score = () => {

  const [essay , setEssay] = useState('')

  return (
      <div>
        <EssaySubmissionForm 
        />
      </div>
  )
}

export default Score