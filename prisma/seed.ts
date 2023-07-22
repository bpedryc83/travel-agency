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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '508cc17e-f94e-48c6-8567-f6daf5b4a519',
      title: 'Lower Alps - perfect cycling terrain',
      country: 'Austria',
      duration: 5,
      price: 200,
      maxPeopleAmount: 10,
      description: 'Nisi est sit amet facilisis magna etiam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Sed libero enim sed faucibus turpis in eu. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Morbi enim nunc faucibus a pellentesque. Velit scelerisque in dictum non consectetur a. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Cras semper auctor neque vitae tempus quam pellentesque nec. Ac ut consequat semper viverra nam libero justo laoreet.',
    },
    {
      id: '475dad93-e471-4299-9d6a-1246715ca9da',
      title: 'Breathtaking views in the wild Carpathian Mountains',
      country: 'Romania',
      duration: 4,
      price: 1500,
      maxPeopleAmount: 5,
      description: 'Diam maecenas ultricies mi eget mauris pharetra et. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Cum sociis natoque penatibus et magnis dis parturient montes. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Posuere ac ut consequat semper viverra nam libero justo. In ornare quam viverra orci sagittis eu volutpat odio. Tortor at risus viverra adipiscing at in. Nulla aliquet enim tortor at auctor urna. Ac turpis egestas integer eget.',
    },
    {
      id: '86b840a2-ae2e-4af0-a17d-5714a4afad48',
      title: 'Raw beauty of Dolomites with abyss via ferrata adventure',
      country: 'Italy',
      duration: 7,
      price: 4000,
      maxPeopleAmount: 5,
      description: 'Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Suspendisse faucibus interdum posuere lorem ipsum dolor. Tortor pretium viverra suspendisse potenti nullam. Massa massa ultricies mi quis hendrerit dolor. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra nibh cras pulvinar mattis. Id ornare arcu odio ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in.',
    },
    {
      id: 'ace8ca36-9bf5-4cbe-b01b-e24853975f4f',
      title: 'To the top of the Europe - Mount Blanc unforgettable tour',
      country: 'France',
      duration: 6,
      price: 4800,
      maxPeopleAmount: 3,
      description: 'Purus viverra accumsan in nisl nisi scelerisque eu. Eu volutpat odio facilisis mauris. Sit amet justo donec enim. Sit amet nisl suscipit adipiscing bibendum est. Morbi leo urna molestie at. Risus ultricies tristique nulla aliquet enim. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.',
    },
  ];
}

function getOrders() {
  return [
    {
      id: '260d513b-0678-4fba-849a-fabb8811f2e7',
      name: 'John Doe',
      address: 'Warszawa, górzysta 30',
    },
    {
      id: '9541bda3-4168-4404-b6b3-b40639714fef',
      name: 'Amanda Nick',
      address: 'Katowice, śląska 1',
    },
  ]
}

function getPhotos() {
  return [
    {
      id: '260d513b-0678-4fba-849a-fabb8811f2e7',
      name: 'John Doe',
      address: 'Warszawa, górzysta 30',
    },
    {
      id: '9541bda3-4168-4404-b6b3-b40639714fef',
      name: 'Amanda Nick',
      address: 'Katowice, śląska 1',
    },
  ]
}

async function seed() {
  await Promise.all(
    getTrips().map((trip) => {
      return db.trip.create({ data: trip });
    }),
  );

  // await Promise.all(
  //   getProducts().map((product) => {
  //     return db.product.create({ data: product });
  //   }),
  // );

  // await Promise.all(
  //   getOrders().map(({ productId, clientId, ...orderData }) => {
  //     return db.order.create({
  //       data: {
  //         ...orderData,
  //         product: {
  //           connect: { id: productId },
  //         },
  //         client: {
  //           connect: { id: clientId},
  //         }
  //       },
  //     });
  //   }),
  // );
}

seed();