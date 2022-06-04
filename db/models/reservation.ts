import {
    DataTypes,
    Model,
    Optional
} from 'sequelize';
import SequelizeConnection from '../config';
import Auditorium from './auditorium';

export interface ReservationAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;

    code: string;
    status: number;
    seats: JSON;

    auditorium_id?: number;
}

export interface ReservationInput extends Optional<ReservationAttributes, 'id' | 'code' | 'status' | 'seats' > {}
export interface ReservationOutput extends Required<ReservationAttributes> {}

class Reservation extends Model<ReservationAttributes, ReservationInput> implements ReservationAttributes {
    public id!: number
    public code!: string
    public status!: number
    public seats!: JSON

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Reservation.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.NUMBER
    },
    seats: {
        type: DataTypes.JSON
    },
    
}, {
    timestamps: true,
    sequelize: SequelizeConnection,
});

Reservation.belongsTo(Auditorium, {
    foreignKey: 'auditorium_id'
})

export default Reservation