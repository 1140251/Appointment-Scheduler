﻿// <auto-generated />
using System;
using AS.DAL.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace AS.API.Migrations
{
    [DbContext(typeof(AppointmentDatabaseContext))]
    [Migration("20190209113022_initial6")]
    partial class initial6
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("AS.DAL.Models.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AddressLine1");

                    b.Property<string>("AddressLine2");

                    b.Property<string>("City");

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("PostalCode");

                    b.Property<string>("State");

                    b.HasKey("Id");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("AS.DAL.Models.Appointment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AppointmentId");

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<int?>("CustomerId");

                    b.Property<string>("Description");

                    b.Property<int?>("EmployeeId");

                    b.Property<DateTime>("End");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<int?>("RoomId");

                    b.Property<int?>("ServiceId");

                    b.Property<DateTime>("Start");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("AppointmentId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("RoomId");

                    b.HasIndex("ServiceId");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("AS.DAL.Models.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AddressId");

                    b.Property<string>("Code");

                    b.Property<string>("Contact");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Email");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("AS.DAL.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<string>("Contact");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Email");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.HasKey("Id");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("AS.DAL.Models.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Description");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Room");
                });

            modelBuilder.Entity("AS.DAL.Models.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Description");

                    b.Property<DateTime>("ModifiedOn");

                    b.Property<string>("Name");

                    b.Property<int>("UniversalState");

                    b.HasKey("Id");

                    b.ToTable("Services");
                });

            modelBuilder.Entity("AS.DAL.Models.Appointment", b =>
                {
                    b.HasOne("AS.DAL.Models.Appointment")
                        .WithMany("Appointments")
                        .HasForeignKey("AppointmentId");

                    b.HasOne("AS.DAL.Models.Customer", "Customer")
                        .WithMany("Appointments")
                        .HasForeignKey("CustomerId");

                    b.HasOne("AS.DAL.Models.Employee", "Employee")
                        .WithMany("Appointments")
                        .HasForeignKey("EmployeeId");

                    b.HasOne("AS.DAL.Models.Room", "Room")
                        .WithMany("Appointments")
                        .HasForeignKey("RoomId");

                    b.HasOne("AS.DAL.Models.Service", "Service")
                        .WithMany()
                        .HasForeignKey("ServiceId");
                });

            modelBuilder.Entity("AS.DAL.Models.Customer", b =>
                {
                    b.HasOne("AS.DAL.Models.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId");
                });
#pragma warning restore 612, 618
        }
    }
}
