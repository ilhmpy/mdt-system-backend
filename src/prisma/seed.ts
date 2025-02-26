import { PrismaClient } from '@prisma/client';
import { civils } from "./data/civils";
import { officers } from './data/officers';
import { ranks } from './data/ranks';
import { roles } from './data/roles';
import { markings } from './data/markings';

const prisma = new PrismaClient();

const createType: "markingsRolesRanksAndCivils" | "other" = "markingsRolesRanksAndCivils"; 

async function main() {
    switch(createType) {
      case("markingsRolesRanksAndCivils"): {

      for (const civil of civils) {
            await prisma.civil.create({
              data: {
                name: civil.name,
                idCard: civil.idCard,
                gunLicense: civil.gunLicense,
                drivingLicense: civil.drivingLicense,
                workPlace: civil.workPlace,
                history: {
                  create: civil.history.map(item => ({
                    happened: item.happened,
                    description: item.description,
                    type: item.type
                  }))
                },
                cars: {
                  create: civil.cars.map(car => ({
                    brand: car.brand,
                    plate: car.plate,
                    history: {
                      create: car.history.map(item => ({
                        happened: item.happened,
                        description: item.description,
                        type: item.type
                      }))
                    }
                  }))
                },
                weapons: {
                  create: civil.weapons.map(weapon => ({
                    serial: weapon.serial,
                    brand: weapon.brand,
                    history: {
                      create: weapon.history.map(item => ({
                        happened: item.happened,
                        description: item.description,
                        type: item.type
                      }))
                    }
                  }))
                }
              }
            });
          }
        }

        await prisma.marking.createMany({
          data: markings,
        });

        await prisma.rank.createMany({
          data: ranks
        })
    
        for (let rolesData of roles) {
          await prisma.role.create({
            data: {
              name: rolesData.name,
              permissions: {
                create: rolesData.permissions
              }
            }
          })
        } 
        
        break;
      

      case("other"): {    
         const shifts = await Promise.all([
            prisma.shift.create({ data: {} }),
            prisma.shift.create({ data: {} }),
            prisma.shift.create({ data: {} }),
            prisma.shift.create({ data: {} }),
            prisma.shift.create({ data: {} }),
            prisma.shift.create({ data: {} }),
         ]);
        
          /*const officersArr = officers.map((officer) =>
            ({ ...officer, shiftId: shifts[Math.floor(Math.random() * shifts.length)].id, history: { create: officer.history.map((item) => ({ ...item })) } })
          )*/
    
          await Promise.all([
            officers.map(async (officer) => {
              const createdOfficer = await prisma.officer.create({
                data: {
                  ...officer,
                  shiftId: shifts[Math.floor(Math.random() * shifts.length)].id,
                  history: {
                    create: officer.history.map((item) => ({ ...item }))
                  }
                }
              });
          
              return createdOfficer;
            })
          ]);
      }
    }
    console.log('Seed data inserted successfully.');
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });