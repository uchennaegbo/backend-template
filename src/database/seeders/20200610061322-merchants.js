'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Merchants',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Public Service',
          accountNumber: '1229392996',
          approvedBy: 'seed',
          aggregatorId: 4,
          bvn: '1229392996',
          websiteLink: 'www.damiventure.com',
          apiSecret:
            '07e7ed81f3030ff6cfec2c2f73baa7d8e8000176111131c7c459dabe8a04e85c',
          address: 'Digital Innovation Unit',
          isVerified: true,
          pending: false,
          companyName: 'Dami Ventures',
          apiKey: 'fb3e129c-507f-4578-8c20-cd355bc1029a',
          email: 'danielem@accessbankplc.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Ngo',
          accountNumber: '29039857371',
          approvedBy: 'seed',
          aggregatorId: 1,
          bvn: '2635637431',
          websiteLink: 'accessrelief.accessbankplc.com',
          apiSecret:
            '9aadddf94a9616b5222798ac1d82b1b4fa2eb53182fea13751e302c5949155f4',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_2',
          apiKey: '93536c3c-09c8-4f17-bd45-22d92d950f05',
          email: 'merchant_2@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Electronic',
          accountNumber: '39039857371',
          approvedBy: 'seed',
          aggregatorId: 2,
          bvn: '2635637431',
          websiteLink: 'www.the-website.com',
          apiSecret:
            '3a0549b68604412a598f9ac91f19ff75c102eb2314b8f5affbc9f6609185e2b9',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_3',
          apiKey: '75a6e7f8-168a-4e3c-8903-8d0779318029',
          email: 'merchant_3@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Telecom',
          accountNumber: '49039857371',
          approvedBy: 'seed',
          aggregatorId: 2,
          bvn: '2635637431',
          websiteLink: 'www.the-website.com',
          apiSecret:
            'bb72b8abd6365edcbd31d70592f099d1735045b14a6ac2a624c7afe111db7095',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_4',
          apiKey: '1e72e2e7-63e6-4221-be43-12f059a8555b',
          email: 'merchant_4@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Digital Goods',
          accountNumber: '59039857371',
          approvedBy: 'seed',
          aggregatorId: 3,
          bvn: '2635637431',
          websiteLink: 'www.the-website.com',
          apiSecret:
            'bb72b8abd6365edcbd31d70592f099d1735045b14a6ac2a624c7afe111db7095',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_5',
          apiKey: 'e3bf4b22-9acb-42de-a20c-d4869e0fb11b',
          email: 'merchant_5@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'MArketplace',
          accountNumber: '69039857371',
          approvedBy: 'seed',
          aggregatorId: 3,
          bvn: '2635637431',
          websiteLink: 'www.the-website.com',
          apiSecret:
            'bb72b8abd6365edcbd31d70592f099d1735045b14a6ac2a624c7afe111db7095',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_6',
          apiKey: '60110a44-b4ee-43ed-a46f-10d3c7a272d9',
          email: 'merchant_6@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          businessType: 'Government service',
          accountNumber: '79039857371',
          approvedBy: 'seed',
          aggregatorId: 4,
          bvn: '2635637431',
          websiteLink: 'www.the-website.com',
          apiSecret:
            '940da915a1f6b0ce13db784e94139d73f44a302e4c6a8a27553a2dce141053ea',
          address: 'No 2 Luke Skywall Street',
          isVerified: true,
          pending: false,
          companyName: 'merchant_7',
          apiKey: 'b00af68c-c12d-4f8d-8278-3e58822bea3a',
          email: 'merchant_7@email.com',
          businessYears: 9,
          phoneNumber: '09065734222',
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Merchants');
  },
};