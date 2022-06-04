export interface Reservation {
    id: number
    code: string
    seats: JSON
    status: number
    createdAt?: Date
    updatedAt?: Date
}