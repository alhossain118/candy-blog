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
    description: `Dieting is hard, especailly when you need to
    restrain yourself from all the food and snacks you enjoy. We
    have alternatives that will work!`,
    image: "assets/imgs/candy/choco-updated.jpg",
    header: "Snacking for a keto diet",
    link: "candy-for-a-keto-diet"
  },
  {
    date: "April 14, 2018",
    description: `A new sold out sour candy? Whattt?
    Could there really be sour candy that actually delivers?
    Or is it just is over-hyped?`,
    image: "assets/images/sour-strips/retail-group-image-update.jpg",
    header: "My Journey into Sour Strips",
    link: "my-journey-into-sour-strips"
  },
  {
    date: "April 14, 2018",
    description: `Dieting is hard, especailly when you need to
    restrain yourself from all the food and snacks you enjoy. We
    have alternatives that will work!`,
    image: "assets/imgs/candy/choco-updated.jpg",
    header: "Snacking for a keto diet",
    link: "candy-for-a-keto-diet"
  },
  {
    date: "April 14, 2018",
    description: `A new sold out sour candy? Whattt?
    Could there really be sour candy that actually delivers?
    Or is it just is over-hyped?`,
    image: "assets/images/sour-strips/retail-group-image-update.jpg",
    header: "My Journey into Sour Strips",
    link: "my-journey-into-sour-strips"
  },
];
