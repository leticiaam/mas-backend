import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1620481115209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activies",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary: true
            
                    },
                    {
                        name:"name",
                        type:"varchar"

                    },
                    {
                        name: "activy_date",
                        type: "timestamp"

                    },
                    {
                        name: "course_unit_id",
                        type: "varchar"

                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default:"now()",

                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
    }

}
