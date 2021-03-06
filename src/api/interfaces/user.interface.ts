export interface UserInterface {
    id: number
    name: string
    email: string
    has_many_bookings: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}
