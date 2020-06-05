export interface Company {
  name: string;
  location: string;
  image?: string;
  companyPageImg?: string;
  netSales?: string;
  website?: string;
  cheifOfficer?: string;
  numberOfEmployees?: string;
  numberOfFactories?: string;
  verified?: boolean;
  infoAvailable?: boolean;
}

export const Companies: Company[] = [
  {
    name: 'Mars Wrigley Confectionery',
    location: 'Chicago, Ill., USA',
    image: 'assets/photoshop/top-25/mars-chocolate.jpg',
    companyPageImg: 'assets/photoshop/company/mars.jpg',
    netSales: '18 Billion',
    website: 'https://www.mars.com/made-by-mars/mars-wrigley',
    cheifOfficer: 'Andrew Clarke(Pres. of Mars Wrigley Confectionery)',
    numberOfEmployees: '34,000',
    numberOfFactories: 'N/A',
    infoAvailable: true,
    verified: false,
  },
  {
    name: 'Ferrero Group',
    location: 'Luxembourg, Italy',
    image: 'assets/photoshop/top-25/ferrero.jpg',
    companyPageImg: 'assets/photoshop/company/ferrero.jpg',
    website: 'https://www.ferrero.com',
    netSales: '13 Billion',
    cheifOfficer: 'Giovanni Ferrero(CEO)',
    numberOfEmployees: '40,000',
    numberOfFactories: '25',
    infoAvailable: true,
    verified: false,
  },
  {
    name: 'Mondelez International',
    location: 'Deerfield, Ill., USA',
    image: 'assets/photoshop/top-25/mondelez-1.jpg',
    website: 'https://www.mondelezinternational.com',
    companyPageImg: 'assets/photoshop/company/mondelez.jpg',
    cheifOfficer: 'Dirk Van de Put(CEO)',
    netSales: '3.4 billion(2018)',
    numberOfEmployees: '83,000 (2018)',
    numberOfFactories: '150',
    infoAvailable: true,
    verified: false,
  },
  {
    name: 'Meiji Co. Ltd.',
    location: 'Tokyo, Japan',
    image: 'assets/photoshop/top-25/meiji.jpg',
    website: 'https://www.meiji.com/global',
    companyPageImg: 'assets/photoshop/company/meji.jpg',
    netSales: '9.7 Billion',
    cheifOfficer: 'Kazuo Kawamura, (President) ',
    numberOfEmployees: '17,600(2019)',
    numberOfFactories: '7',
    infoAvailable: true,
    verified: false,
  },
  {
    name: 'Hershey Co.',
    location: 'Hershey, Pa., USA',
    image: 'assets/photoshop/top-25/hersheys.jpg',
    website: 'https://www.hersheys.com',
    companyPageImg: 'assets/photoshop/company/hersheys.jpg',
    cheifOfficer: 'Michele Buck(CEO)',
    netSales: '7.99 Billion',
    numberOfEmployees: '16,140(2018)',
    numberOfFactories: '17',
    infoAvailable: true,
    verified: false,

  },
  {
    name: 'Nestle SA',
    location: 'Vevey, Switzerland',
    image: 'assets/photoshop/top-25/nestle.jpg',
    companyPageImg: 'assets/photoshop/company/nestle.jpg',
  },
  {
    name: 'Chocoladefabriken Lindt & Sprungli AG',
    location: 'Kilchberg, Switzerland',
    image: 'assets/photoshop/top-25/lindt.jpg',
    companyPageImg: 'assets/photoshop/company/lindt.jpg',
  },
  {
    name: 'pladis',
    location: '	London, UK',
    image: 'assets/photoshop/top-25/pladis.jpg',
    companyPageImg: 'assets/photoshop/company/pladis.jpg',
  },
  {
    name: 'Haribo GmbH & Co. K.G.',
    location: 'Bonn, Germany',
    image: 'assets/photoshop/top-25/haribo.jpg',
    companyPageImg: 'assets/photoshop/company/haribo.jpg',
  },
  {
    name: 'Ezaki Glico Co. Ltd.',
    location: 'Osaka, Japan',
    image: 'assets/photoshop/top-25/glico.jpg',
    companyPageImg: 'assets/photoshop/company/glico.jpg',
  },
  {
    name: 'Perfetti Van Melle',
    location: 'Spa Lainate, Italy, & Breda, Netherlands',
    image: 'assets/photoshop/top-25/perfetti.jpg',
    companyPageImg: 'assets/photoshop/company/perfetti.jpg',
  },
  {
    name: 'General Mills',
    location: 'Minneapolis, Minn., USA',
    image: 'assets/photoshop/top-25/general-mills.jpg',
    companyPageImg: 'assets/photoshop/company/general-mills.jpg',
  },
  {
    name: 'Kellogg Co.',
    location: 'Battle Creek, Mich., USA',
    image: 'assets/photoshop/top-25/kelloggs.jpg',
    companyPageImg: 'assets/photoshop/company/kellogs.jpg',
  },
  {
    name: 'Orion Corp.',
    location: 'Seoul, Korea',
    image: 'assets/images/tranding_post_img1.jpg',
  },
  {
    name: 'August Storck KG',
    location: 'Berlin, Germany',
    image: 'assets/photoshop/top-25/storck.jpg',
    companyPageImg: 'assets/photoshop/company/storck.jpg',
  },
  {
    name: 'Morinaga & Co. Ltd.',
    location: 'Tokyo, Japan	',
    image: 'assets/photoshop/top-25/morinaga.jpg',
    companyPageImg: 'assets/photoshop/company/morinaga.jpg',
  },
  {
    name: 'Bourbon Corp.',
    location: 'Niigata, Japan',
    image: 'assets/images/tranding_post_img1.jpg',
  },
  {
    name: 'United Confectionary Manufacturers',
    location: 'Moscow, Russia',
    image: 'assets/images/tranding_post_img1.jpg',
  },
  {
    name: 'Chocolat Frey AB',
    location: 'Buchs, Switerland',
    image: 'assets/photoshop/top-25/frey.jpg',
    companyPageImg: 'assets/photoshop/company/frey.jpg',
  },
  {
    name: 'Arcor',
    location: 'Buenos Aires, Argentina',
    image: 'assets/photoshop/top-25/arcor.jpg',
    companyPageImg: 'assets/photoshop/company/arcor.jpg',
  },
  {
    name: 'Valeo Foods Group',
    location: 'Dublin, Ireland	',
    image: 'assets/photoshop/top-25/valeo.jpg',
    companyPageImg: 'assets/photoshop/company/valeo.jpg',
  },
  {
    name: 'Crown Confectionery Co. Ltd.',
    location: 'Seoul, Korea',
    image: 'assets/photoshop/top-25/crown.jpg',
    companyPageImg: 'assets/photoshop/company/crown.jpg',
  },
  {
    name: 'Cacau Show',
    location: 'Itapevi, SP, Brazil',
    image: 'assets/photoshop/top-25/cacau.jpg',
    companyPageImg: 'assets/photoshop/company/cacau.jpg',
  },
  {
    name: 'Cemoi',
    location: 'Perpignan, France',
    image: 'assets/photoshop/top-25/cemoi.jpg',
    companyPageImg: 'assets/photoshop/company/cemoi.jpg',
  },
  {
    name: 'Clif Bar & Co.',
    location: 'Emeryville, Calif.',
    image: 'assets/photoshop/top-25/clif.jpg',
    companyPageImg: 'assets/photoshop/company/clif.jpg',
  },
];
