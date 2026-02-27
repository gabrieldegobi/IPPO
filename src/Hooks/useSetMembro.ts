import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../Firebase/ConfigFirebase'
import { useState } from 'react'

export const useSetMembro = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const setMembroFirestore = async (data: object) => {
    setLoading(true)
    setError(null)

    try {
      const docRef = await addDoc(collection(db, "membros"), { ...data, createdAt: Timestamp.now() })

      setLoading(false)
      return docRef.id

    }
    catch (err:any) {
     setLoading(false)
     setError(err.message)
     return null
    }

  }

  return {setMembroFirestore,loading,error}
}

