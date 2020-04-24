export interface ArticleOverview {
  date: string;
  description: string;
  image: string;
  header: string;
  blogData?: any;
}

export const Articles: ArticleOverview[] = [
  {
    date: "April 14, 2018",
    description: `Ipsum generators on the Internet tend to repeat predefined
                      chunks as necessary, making this generator on the Internet.`,
    image: "assets/images/candy-sample1.jpg",
    header: "The Master Of Human Happiness",
  },
];
