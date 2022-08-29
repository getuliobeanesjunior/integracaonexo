import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiTypes } from "../../utils/enumApiTypes";

@Entity('integration_logs')
class Logs {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;

    @Column()
    integration_type: string;

    @Column()
    integration_success:boolean;

    @Column()
    sent_json:string;

    @Column()
    created_at:Date;

}

export default Logs;