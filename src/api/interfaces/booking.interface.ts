export interface BookingInterface {
    id: number
    user: string,
    agent: string,
    start_at: Date
    finish_at: Date
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}
