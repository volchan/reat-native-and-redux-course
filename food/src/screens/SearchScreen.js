import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const res = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "Bordeaux",
      },
    });
    setResults(res.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>SearchScreen</Text>
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
