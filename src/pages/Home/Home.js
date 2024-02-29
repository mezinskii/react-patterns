import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
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
      <Container>
        <RenderItems
          items={books}
          title="Лучшие книги"
          render={(book) => (
            <CardBook key={book.id} {...book} buttonText="Добавить" />
          )}
        />
      </Container>
      <Container>
        <RenderItems
          items={authors}
          title="Лучшие авторы"
          render={(author) => (
            <AuthorCard key={author.id} {...author} buttonText="Смотреть" />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
