export interface AgentInterface {
    id: number
    name: string,
    email: string,
    has_many_bookings: boolean
    has_many_users: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}
