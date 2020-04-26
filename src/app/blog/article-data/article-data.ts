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
    date: "April 14, 2018",
    description: `A new sold out sour candy? Whattt?
    Could there really be sour candy that actually delivers?
    Or is it just is over-hyped?`,
    image: "assets/images/sour-strips/group2A.jpg",
    header: "My Journey into Sour Strips",
    link: "my-journey-into-sour-strips"
  },
];
