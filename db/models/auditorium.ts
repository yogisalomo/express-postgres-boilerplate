import {
    DataTypes,
    Model,
    Optional
} from 'sequelize';
import SequelizeConnection from '../config';
import Seat from './seat';

export interface AuditoriumAttributes {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;

    name: string;
}

export interface AuditoriumInput extends Optional<AuditoriumAttributes, 'id' | 'name'> {}
export interface AuditoriumOutput extends Required<AuditoriumAttributes> {}

class Auditorium extends Model<AuditoriumAttributes, AuditoriumInput> implements AuditoriumAttributes {
    public id!: number
    public name!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Auditorium.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: SequelizeConnection,
});

export default Auditorium