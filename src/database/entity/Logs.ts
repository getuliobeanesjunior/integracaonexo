import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiTypes } from "../../utils/enumApiTypes";

@Entity('integration_logs')
class Logs {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    integration_id: string;

    @Column({
        type: "enum",
        enum: ApiTypes
    })
    integration_type: ApiTypes;

    @Column()
    integration_success:boolean;

    @Column()
    sent_json:string;

    @Column('date')
    created_at:Date;

}

export default Logs;