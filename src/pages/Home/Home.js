import React, { useEffect, useState } from "react";
import axios from "axios";
import RenderItems from "../../modules/home/RenderItems/RenderItems";
import CardBook from "../../components/common/CardBook/CardBook";
import AuthorCard from "../../components/common/AuthorCard/AuthorCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async (type, setData) => {
      try {
        const response = await axios.get(`http://localhost:3006/${type}`);
        const data = response.data;

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData("books", setBooks);
    fetchData("authors", setAuthors);
  }, []);

  return (
    <>
      <RenderItems
        title="Лучшие книги"
        items={books}
        render={(book) => <CardBook key={book.id} {...book} />}
      />
       <RenderItems
        title="Лучшие авторы"
        items={authors}
        render={(author) => <AuthorCard key={author.id} {...author} />}
      />
    </>
  );
};

export default Home;
