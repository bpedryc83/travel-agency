/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getTrips() {
  return [
    {
      id: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      title: 'The hardest mountain trail in Poland - "Orla Perć',
      country: 'Poland',
      duration: 2,
      price: 800,
      maxPeopleAmount: 3,
      mainPhoto: 'DSCN0963.JPG',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      title: 'Lower Alps - perfect cycling terrain',
      country: 'Austria',
      duration: 5,
      price: 200,
      maxPeopleAmount: 10,
      mainPhoto: 'IMG_20230429_193545.jpg',
      description: 'Nisi est sit amet facilisis magna etiam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Sed libero enim sed faucibus turpis in eu. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Morbi enim nunc faucibus a pellentesque. Velit scelerisque in dictum non consectetur a. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Cras semper auctor neque vitae tempus quam pellentesque nec. Ac ut consequat semper viverra nam libero justo laoreet.',
    },
    {
      id: '475dad93-e471-4299-9d6a-1246715ca9da',
      title: 'Breathtaking views in the wild Carpathian Mountains',
      country: 'Romania',
      duration: 4,
      price: 1500,
      maxPeopleAmount: 5,
      mainPhoto: '/IMG_20220617_131428.jpg',
      description: 'Diam maecenas ultricies mi eget mauris pharetra et. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque penatibus et magnis dis parturient montes. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Posuere ac ut consequat semper viverra nam libero justo. In ornare quam viverra orci sagittis eu volutpat odio. Tortor at risus viverra adipiscing at in. Nulla aliquet enim tortor at auctor urna. Ac turpis egestas integer eget.',
    },
    {
      id: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      title: 'Raw beauty of Dolomites with abyss via ferrata adventure',
      country: 'Italy',
      duration: 7,
      price: 4000,
      maxPeopleAmount: 5,
      mainPhoto: 'DSCN5165.JPG',
      description: 'Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Suspendisse faucibus interdum posuere lorem ipsum dolor. Tortor pretium viverra suspendisse potenti nullam. Massa massa ultricies mi quis hendrerit dolor. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra nibh cras pulvinar mattis. Id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in.',
    },
    {
      id: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      title: 'To the top of the Europe - Mount Blanc unforgettable tour',
      country: 'France',
      duration: 6,
      price: 4800,
      maxPeopleAmount: 3,
      mainPhoto: 'P7090988.JPG',
      description: 'Purus viverra accumsan in nisl nisi scelerisque eu. Eu volutpat odio facilisis mauris. Sit amet justo donec enim. Sit amet nisl suscipit adipiscing bibendum est. Morbi leo urna molestie at. Risus ultricies tristique nulla aliquet enim. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.',
    },
  ];
}

function getPasswords() {
  return [
    {
      id: 'd5c38447-287c-4677-85b6-1f12360cd5d8',
      hashedPassword: 'password',
      userId: '2d153b05-858d-4b55-9acf-e84c1051a778',
    }
  ]
}

function getUsers() {
  return [
    {
      id: '2d153b05-858d-4b55-9acf-e84c1051a778',
      email: 'JohnDoe@example.com',
    }
  ]
}

function getOrders() {
  return [
    {
      id: '27181ca5-fdfa-4797-b3ef-bf70ec03d1fb',
      userId: '2d153b05-858d-4b55-9acf-e84c1051a778',
      remarks: 'Dodatkowe uwagi',
      trips: [
        { tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48', peopleAmount: 1 },
      ],
    },
    {
      id: '6640687e-31fd-42ee-aa51-2e1d8092af74',
      userId: '2d153b05-858d-4b55-9acf-e84c1051a778',
      remarks: 'Dwie wycieczki',
      trips: [
        { tripId: '475dad93-e471-4299-9d6a-1246715ca9da', peopleAmount: 3 },
        { tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48', peopleAmount: 4 },
      ],
    }
  ]
}

function getTripPhotos() {
  return [
    {
      id: '9aab0e96-886c-417a-b8ba-2d246ea662c4',         //trip Austria
      tripId: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      photo: 'IMG_20230501_162447.jpg',
    },
    {
      id: 'd9c5e6b7-248c-495a-a439-e8e0481ee3e1',
      tripId: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      photo: 'IMG_20230501_171738.jpg',
    },
    {
      id: 'f0165534-ff93-4318-b3e6-f83b3bcdd655',
      tripId: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      photo: 'IMG_20230505_182342.jpg',
    },
    {
      id: 'ea355de9-5a25-48cb-9f71-15bc77bc7a99',
      tripId: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      photo: 'IMG_20230505_183547.jpg',
    },
    {
      id: '672c3cd5-ffd9-469c-95ec-32c2533aa1b9',
      tripId: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      photo: 'IMG_20230505_195939.jpg',
    },
    {
      id: 'ce4b3293-e742-479e-9939-bb9630c94282',         //trip France
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7060878.JPG',
    },
    {
      id: '7c5822f3-8904-4b63-b410-2978a00ffb89',
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7080915.JPG',
    },
    {
      id: 'e43f27f0-3307-404e-be4e-06d58ab9b43b',
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7080941.JPG',
    },
    {
      id: '160cf797-f3a9-473e-97d6-69f4fc67efb6',
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7090977.JPG',
    },
    {
      id: 'ccaa9501-5aeb-48ee-ae6f-3d7c9b3f2db5',
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7090988.JPG',
    },
    {
      id: 'e64ac15d-d563-4f9a-b72c-248813e7dfd5',
      tripId: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      photo: 'P7091034.JPG',
    },
    {
      id: '97c1417a-9d84-49e1-92bd-905679851011',         //trip Italy
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5205.JPG',
    },
    {
      id: 'b5a6b6c5-829c-488a-9369-1b3b685e27ed',
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5207.JPG',
    },
    {
      id: '721fbec1-9d2b-4964-b4da-f89bc3ff5339',
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5287.JPG',
    },
    {
      id: 'a32dcf24-c8c1-487a-b71b-10313223f960',
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5307.JPG',
    },
    {
      id: '46e3a159-15e6-4de3-87e7-e23683c806db',
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5322.JPG',
    },
    {
      id: 'e927d27b-91a2-474b-8a4e-238dd2e0fd9b',
      tripId: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      photo: 'DSCN5334.JPG',
    },
    {
      id: '4556dbcf-63ae-4f47-9328-8c3ab2ee43d7',         //trip Poland
      tripId: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      photo: 'P1180883.JPG',
    },
    {
      id: 'b862bbb4-30fa-4283-835b-f5a170af107d',
      tripId: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      photo: 'DSCN0965.JPG',
    },
    {
      id: '2850348d-3a34-4643-b1f9-e731de1a44d1',
      tripId: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      photo: 'P1180906.JPG',
    },
    {
      id: '39586e14-f36f-4955-9b7d-1c902d046ff3',
      tripId: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      photo: 'P1180911.JPG',
    },
    {
      id: '2156e201-ab1a-40fc-9ac6-b279da349a3d',
      tripId: '6e9a20ad-3b04-4e52-809e-a1fd4e8860da',
      photo: 'P1200225.JPG',
    },
    {
      id: '7d8c684a-1737-4ab2-bf09-6af310810474',         //trip Romania
      tripId: '475dad93-e471-4299-9d6a-1246715ca9da',
      photo: 'IMG_20220616_185340.jpg',
    },
    {
      id: 'fcb8e766-a77b-4541-b62d-11508c1d127c',
      tripId: '475dad93-e471-4299-9d6a-1246715ca9da',
      photo: 'IMG_20220617_094554.jpg',
    },
    {
      id: '9b7341d9-70ef-45e6-b0d0-d8be8b778077',
      tripId: '475dad93-e471-4299-9d6a-1246715ca9da',
      photo: 'IMG_20220617_102657.jpg',
    },
    {
      id: 'd941818a-ccf6-4fae-a859-c7b9de5135d0',
      tripId: '475dad93-e471-4299-9d6a-1246715ca9da',
      photo: 'IMG_20220618_123158.jpg',
    },
    {
      id: 'd84f0e84-4764-44ca-ace7-6f7894ce002d',
      tripId: '475dad93-e471-4299-9d6a-1246715ca9da',
      photo: 'IMG_20220619_073604.jpg',
    },
  ]
}

async function seed() {
  
  await Promise.all(
    getTrips().map((trip) => {
      return db.trip.create({ data: trip });
    }),
  );

  await Promise.all(
    getTripPhotos().map(({ tripId, ...tripPhotoData }) => {
      return db.tripPhoto.create({
        data: {
          ...tripPhotoData,
          trip: {
            connect: { id: tripId },
          }
        }
      })
    }),
  );

  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    }),
  );

  await Promise.all(
    getPasswords().map((password) => {
      return db.password.create({ data: password });
    }),
  );

  await Promise.all(
    getOrders().map(({ userId, trips, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          trips: {
            create: trips.map((trip) => ({
              trip: { connect: { id: trip.tripId } },
              peopleAmount: trip.peopleAmount,
            })),
          },
          user: {
            connect: { id: userId },
          },
        },
      });
    }),
  );
}

seed();