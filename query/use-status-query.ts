import { COLLECTION_DEALS } from '~/constants/index';
// import {useQuery} from '@transtack/vue-query'import { useQuery } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'
import { DATABASE } from '~/libs/appwrite'
import { useAuthStore } from './../store/auth.store'
import { Query } from 'appwrite'
import { COLLECTION_DEALS, DB_ID, status } from '~/constants'
import { IColumn, IDeal } from '~/types/index';

export const useStatusQuery = (userId: string) => {
    const {currentUser} = useAuthStore()

    // console.log(currentUser.id)

    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DATABASE.listDocuments(DB_ID, COLLECTION_DEALS, [
            Query.equal('userId', currentUser.id),//currentUser.id // userId
        ]),
        select: data => {
            // console.log(data)
            const newBoard: IColumn[] = status.map(item => ({
                ...item,
                items: [],
            }))

            const deals = data.documents as unknown as IDeal[]

            for(const deal of deals) {
                const column = newBoard.find(item => item.id === deal.status)

                if(column) {
                    column.items.push({
                        $createdAt: deal.$createdAt,
                        name: deal.name,
                        description: deal.description,
                        status: deal.status,
                        $id: deal.$id,
                    })
                }
            }

            return newBoard
        },
    })
}