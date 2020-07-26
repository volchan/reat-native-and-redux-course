import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "Bordeaux",
        },
      });
      setResults(res.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong.");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length > 0 ? (
        <Text>We have found {results.length} results.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
