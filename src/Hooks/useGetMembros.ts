import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '../Firebase/ConfigFirebase'
import { useState } from 'react'

export const useGetMembro = <T>() => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<T[]>([])

    const getMembroFirestore = async () => {
        setLoading(true)
        setError(null)

        try {
            const querySnapshot = await getDocs(collection(db, "membros"))
            const docs = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
                id: doc.id,
                ...doc.data(),
            })) as T[]

            setData(docs)
            setLoading(false)

        }
        catch (err: any) {
            setLoading(false)
            setError(err.message)
            return null
        }
    }

    return { getMembroFirestore, data, loading, error }
}
