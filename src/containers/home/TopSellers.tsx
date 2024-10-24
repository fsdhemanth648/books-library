import { useEffect, useState } from "react";
import SelectInput from "../../components/common/SelectInput";
import { BookType } from "../../types/books";
import Card from "../../components/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const categories = [
  "Choose Category",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
  "Marketing",
];

const TopSellers = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose Category");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose Category"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );
  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Category Filter */}
      <div className="max-w-fit mb-8">
        <SelectInput
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.currentTarget.value)}
          data={categories}
        />
      </div>
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <Card data={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
