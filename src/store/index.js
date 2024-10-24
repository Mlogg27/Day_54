import { legacy_createStore as createStore } from "redux";
import CountReducer from "./CountReducer";

const initState = {
  products: [
    {
      _id: "6551a7297f15f9c0a42d1ebf",
      name: "Giày dép Habeco",
      category: "Giày dép",
      brand: "Habeco",
      price: 272169,
      quantity: 9999794,
      image: "https://picsum.photos/200?_id=eeyp89998d0H1Gi5oa49b665ca",
      description:
        "dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis",
      updatedAt: "2024-10-22T08:47:28.995Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1ec3",
      name: "Thời trang Honda",
      category: "Thời trang",
      brand: "Honda",
      price: 377396,
      quantity: 9999932,
      image: "https://picsum.photos/200?_id=dT5a0g69r84oaH9i1o95tn69nh8",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus",
      updatedAt: "2024-10-22T08:24:18.465Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1ee9",
      name: "Trà Vinamilk",
      category: "Trà",
      brand: "Vinamilk",
      price: 329163,
      quantity: 9999903,
      image: "https://picsum.photos/200?_id=9m010lii48r9T8ana5k6696V",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente",
      updatedAt: "2024-10-22T08:47:29.018Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f0a",
      name: "Máy tính Traveloka",
      category: "Máy tính",
      brand: "Traveloka",
      price: 461544,
      quantity: 9999981,
      image: "https://picsum.photos/200?_id=6e9r9a95hkoMay0va4n860T6li1t8",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero cumque quam quae",
      updatedAt: "2024-10-01T03:52:43.078Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f16",
      name: "Du lịch Panasonic",
      category: "Du lịch",
      brand: "Panasonic",
      price: 315473,
      quantity: 9999822,
      image: "https://picsum.photos/200?_id=0aaciD1nuin69o89chlP564s6890",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero cumque",
      updatedAt: "2024-10-22T08:24:18.503Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f1d",
      name: "Đồ trang điểm PNJ",
      category: "Đồ trang điểm",
      brand: "PNJ",
      price: 424184,
      quantity: 9999505,
      image: "https://picsum.photos/200?_id=60N958m860JDa416t9ndigero9P",
      description:
        "dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero",
      updatedAt: "2024-10-22T08:24:41.806Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f37",
      name: "Bánh Vietcombank",
      category: "Bánh",
      brand: "Vietcombank",
      price: 307858,
      quantity: 9999358,
      image: "https://picsum.photos/200?_id=mon584e1Bi9968bhVanct016a6k9",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero",
      updatedAt: "2024-10-22T08:24:18.548Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f3b",
      name: "Kẹo Aquafina",
      category: "Kẹo",
      brand: "Aquafina",
      price: 264037,
      quantity: 9999756,
      image: "https://picsum.photos/200?_id=58619K9o0n9uei86A641aaqf",
      description:
        "dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente",
      updatedAt: "2024-10-01T03:52:43.143Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f71",
      name: "Ngân hàng Calofic",
      category: "Ngân hàng",
      brand: "Calofic",
      price: 440636,
      quantity: 3303870,
      image: "https://picsum.photos/200?_id=ag5al4Nin19oa688c9C69h06g2nf",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic praesentium iste, quis assumenda necessitatibus vero cumque",
      updatedAt: "2024-07-29T21:14:53.490Z",
      count: 0,
    },
    {
      _id: "6551a7297f15f9c0a42d1f7a",
      name: "Bánh Unilever",
      category: "Bánh",
      brand: "Unilever",
      price: 281335,
      quantity: 3409868,
      image: "https://picsum.photos/200?_id=6lUeh1r8966v0n9B59e428ain",
      description:
        "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam debitis laboriosam quod deserunt dicta sequi adipisci doloribus odio, cumque eveniet repellendus magni iste voluptate praesentium accusamus repudiandae! Enim eum optio accusamus cum beatae illum sapiente voluptate hic",
      updatedAt: "2024-07-29T21:15:42.389Z",
      count: 0,
    },
  ],
  cart: [],
};

const reducer = (state = initState, action) => {
  return {
    ...state,
    products: CountReducer(state, action),
  };
};

const store = createStore(reducer);
export default store;
