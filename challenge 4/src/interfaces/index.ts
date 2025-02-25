export interface RestaurantInterface {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }[];
}
