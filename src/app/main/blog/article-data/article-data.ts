export interface ArticleOverview {
  date: string;
  description: string;
  image: string;
  header: string;
  blogData?: any;
  link: string;
}

export const Articles: ArticleOverview[] = [
  {
    date: 'April 14, 2018',
    description: `Dieting is hard, especailly when you need to
    restrain yourself from all the sugary treats you enjoy.
    I've put together way to still satisfy your cravings without kicking you out of ketosis.`,
    image: 'assets/photoshop/article-cover/keto-candy-1.jpg',
    header: 'Candy for a Keto Diet',
    link: 'candy-keto-diet',
  },
  {
    date: 'April 14, 2018',
    description: `Welcome to my list of the World's Top Candy Companies. The companies
    are ranked based on the annual net sales.`,
    image: 'assets/photoshop/article-cover/lots-of-candy.jpg',
    header: 'Top 10 Candy Companies in 2020',
    link: 'top-10-candy-companies',
  },
  {
    date: 'April 14, 2018',
    description: `A new sold out sour candy? Whattt?
                      Could there really be sour candy that actually delivers?
                      Or is it just is over-hyped?`,
    image: 'assets/photoshop/article-cover/sour-strips-1.jpg',
    header: 'My Journey into Sour Strips',
    link: 'my-journey-into-sour-strips',
  },
  {
    date: 'April 14, 2018',
    description: `A new sold out sour candy? Whattt?
    Could there really be sour candy that actually delivers?
    Or is it just is over-hyped?`,
    image: 'assets/photoshop/article-cover/entrepreneur.jpg',
    header: 'Candy Entrepreneurship',
    link: 'candy-entrepreneur',
  },
];
