using Microsoft.EntityFrameworkCore.Migrations;

namespace AS.API.Migrations
{
    public partial class initial4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Employee_CreatedById",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Employee_ModifiedById",
                table: "Appointments");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_CreatedById",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "CreatedById",
                table: "Appointments");

            migrationBuilder.RenameColumn(
                name: "ModifiedById",
                table: "Appointments",
                newName: "EmployeeId");

            migrationBuilder.RenameIndex(
                name: "IX_Appointments_ModifiedById",
                table: "Appointments",
                newName: "IX_Appointments_EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Employee_EmployeeId",
                table: "Appointments",
                column: "EmployeeId",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Employee_EmployeeId",
                table: "Appointments");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "Appointments",
                newName: "ModifiedById");

            migrationBuilder.RenameIndex(
                name: "IX_Appointments_EmployeeId",
                table: "Appointments",
                newName: "IX_Appointments_ModifiedById");

            migrationBuilder.AddColumn<int>(
                name: "CreatedById",
                table: "Appointments",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_CreatedById",
                table: "Appointments",
                column: "CreatedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Employee_CreatedById",
                table: "Appointments",
                column: "CreatedById",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Employee_ModifiedById",
                table: "Appointments",
                column: "ModifiedById",
                principalTable: "Employee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
