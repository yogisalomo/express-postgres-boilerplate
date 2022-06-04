import {
    DataTypes,
    Model,
    Optional
} from 'sequelize';
import SequelizeConnection from '../config';
import Auditorium from './auditorium';

export interface SeatAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;

    number?: string;
    // auditoriumId?: number;
    is_available?: boolean;
}

export interface SeatInput extends Optional<SeatAttributes, 'id' | 'number' | 'isAvailable' > {}
export interface SeatOutput extends Required<SeatAttributes> {}

class Seat extends Model<SeatAttributes, SeatInput> implements SeatAttributes {
    public id!: number
    public number!: string
    // public auditoriumId!: number
    public is_available!: boolean

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Seat.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    number: {
        type: DataTypes.STRING
    },
    is_available: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: true,
    sequelize: SequelizeConnection,
});

Seat.belongsTo(Auditorium, {
    foreignKey: 'auditorium_id'
})

export default Seat